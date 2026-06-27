import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BLOG_POSTS, BlogPost } from '../../core/content';
import { RevealDirective } from '../../core/reveal.directive';
import { SeoService } from '../../core/seo.service';
import { absUrl, SITE } from '../../core/site.config';
import { pageSchema } from '../../core/structured-data';
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
        this.router.navigateByUrl(this.t.path('/blog'));
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

    });

    seo.set(
      () => {
        const p = this.post();
        return p ? `${this.t.pick(p.title)} — Veloura` : 'Veloura';
      },
      () => {
        const p = this.post();
        return p ? this.t.pick(p.excerpt) : this.t.ui().blog.metaDesc;
      },
      {
        type: 'article',
        image: () => absUrl(this.post()?.image || SITE.ogImage),
      }
    );

    effect(() => {
      const post = this.post();
      if (!post) return;
      const url = absUrl(this.t.path(`/blog/${post.slug}`));
      const articleId = `${url}#article`;
      seo.setJsonLd(pageSchema({
        url,
        name: this.t.pick(post.title),
        description: this.t.pick(post.excerpt),
        language: this.t.lang(),
        breadcrumbs: [
          { name: this.t.ui().nav.home, path: this.t.path('/') },
          { name: this.t.ui().nav.blog, path: this.t.path('/blog') },
          { name: this.t.pick(post.title), path: this.t.path(`/blog/${post.slug}`) },
        ],
        mainEntityId: articleId,
        additional: [{
          '@type': 'BlogPosting',
          '@id': articleId,
          headline: this.t.pick(post.title),
          description: this.t.pick(post.excerpt),
          image: absUrl(post.image),
          datePublished: post.date,
          dateModified: post.date,
          inLanguage: this.t.locale(),
          articleSection: this.t.pick(post.category),
          author: { '@type': 'Organization', '@id': `${SITE.url}/#organization`, name: SITE.name },
          publisher: { '@id': `${SITE.url}/#organization` },
          mainEntityOfPage: { '@id': `${url}#webpage` },
        }],
      }));
    });
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
