import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { BLOG_CATEGORIES, BLOG_POSTS } from '../../core/content';
import { RevealDirective } from '../../core/reveal.directive';
import { SeoService } from '../../core/seo.service';
import { absUrl } from '../../core/site.config';
import { itemListSchema, pageSchema } from '../../core/structured-data';
import { TranslationService } from '../../core/translation.service';
import { BlogCardComponent } from '../../ui/blog-card/blog-card.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RevealDirective, BlogCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {
  protected t = inject(TranslationService);
  protected categories = BLOG_CATEGORIES;
  protected selected = signal<string>('all');

  protected posts = computed(() => {
    const cat = this.selected();
    return cat === 'all'
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.categoryId === cat);
  });

  constructor(seo: SeoService) {
    seo.set(
      () => this.t.ui().blog.metaTitle,
      () => this.t.ui().blog.metaDesc
    );

    effect(() => {
      const url = absUrl(this.t.path('/blog'));
      const listId = `${url}#article-list`;
      seo.setJsonLd(pageSchema({
        url,
        name: this.t.ui().blog.metaTitle,
        description: this.t.ui().blog.metaDesc,
        language: this.t.lang(),
        breadcrumbs: [
          { name: this.t.ui().nav.home, path: this.t.path('/') },
          { name: this.t.ui().nav.blog, path: this.t.path('/blog') },
        ],
        mainEntityId: listId,
        additional: [
          itemListSchema(
            listId,
            this.t.ui().nav.blog,
            BLOG_POSTS.map((post) => ({
              name: this.t.pick(post.title),
              path: this.t.path(`/blog/${post.slug}`),
              type: 'Article',
            }))
          ),
        ],
      }));
    });
  }

  select(id: string): void {
    this.selected.set(id);
  }
}
