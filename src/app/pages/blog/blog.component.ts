import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { BLOG_CATEGORIES, BLOG_POSTS } from '../../core/content';
import { RevealDirective } from '../../core/reveal.directive';
import { SeoService } from '../../core/seo.service';
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
  }

  select(id: string): void {
    this.selected.set(id);
  }
}
