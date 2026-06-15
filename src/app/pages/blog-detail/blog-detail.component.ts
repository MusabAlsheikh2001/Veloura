import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BLOG_POSTS, BlogPost } from '../../core/content';
import { RevealDirective } from '../../core/reveal.directive';
import { SeoService } from '../../core/seo.service';
import { absUrl, SITE } from '../../core/site.config';
import { TranslationService } from '../../core/translation.service';
import { BlogCardComponent } from '../../ui/blog-card/blog-card.component';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [RouterLink, RevealDirective, BlogCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss',
})
export class BlogDetailComponent {
  protected t = inject(TranslationService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  protected post = signal<BlogPost | undefined>(undefined);
  protected related = signal<BlogPost[]>([]);

  constructor(seo: SeoService) {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      const found = BLOG_POSTS.find((p) => p.slug === slug);
      if (!found) {
        this.router.navigate(['/blog']);
        return;
      }
      this.post.set(found);
      this.related.set(
        BLOG_POSTS.filter(
          (p) => p.slug !== found.slug && p.categoryId === found.categoryId
        )
          .concat(BLOG_POSTS.filter((p) => p.slug !== found.slug))
          .filter((p, i, arr) => arr.findIndex((x) => x.slug === p.slug) === i)
          .slice(0, 3)
      );

      // BlogPosting structured data for rich results.
      seo.setJsonLd({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: this.t.pick(found.title),
        description: this.t.pick(found.excerpt),
        image: absUrl(found.image),
        datePublished: found.date,
        dateModified: found.date,
        inLanguage: this.t.lang(),
        articleSection: this.t.pick(found.category),
        author: { '@type': 'Organization', name: SITE.name, url: SITE.url + '/' },
        publisher: { '@id': SITE.url + '/#organization' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': absUrl('/blog/' + found.slug),
        },
      });
    });

    seo.set(
      () => {
        const p = this.post();
        return p ? `${this.t.pick(p.title)} — Veloura` : 'Veloura';
      },
      () => {
        const p = this.post();
        return p ? this.t.pick(p.excerpt) : this.t.ui().blog.metaDesc;
      }
    );
  }

  formattedDate(post: BlogPost): string {
    const locale = this.t.lang() === 'ar' ? 'ar' : 'en-US';
    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(post.date));
  }
}
