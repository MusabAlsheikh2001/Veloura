import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogPost } from '../../core/content';
import { TranslationService } from '../../core/translation.service';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a class="post card card-hover" [routerLink]="t.path('/blog/' + post.slug)">
      <div class="post__thumb media media--warm">
        <img [src]="post.image" alt="" loading="lazy" decoding="async" />
        <span class="post__cat">{{ t.pick(post.category) }}</span>
      </div>
      <div class="post__body">
        <div class="post__meta">
          <span>{{ formattedDate }}</span>
          <span class="post__dot">·</span>
          <span>{{ post.readTime }} {{ t.ui().common.minRead }}</span>
        </div>
        <h3 class="post__title">{{ t.pick(post.title) }}</h3>
        <p class="post__excerpt">{{ t.pick(post.excerpt) }}</p>
        <span class="post__more">
          {{ t.ui().common.readArticle }}
          <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </a>
  `,
  styles: [
    `
      .post {
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: hidden;
      }
      .post__thumb {
        position: relative;
        aspect-ratio: 16 / 10;
      }
      .post__cat {
        position: absolute;
        z-index: 2;
        inset-block-start: 0.9rem;
        inset-inline-start: 0.9rem;
        font-size: 0.7rem;
        font-weight: 600;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        padding: 0.34rem 0.72rem;
        border-radius: 100px;
        color: var(--bone-ivory);
        background: rgba(12, 8, 9, 0.42);
        -webkit-backdrop-filter: blur(8px);
        backdrop-filter: blur(8px);
        border: 1px solid rgba(245, 239, 231, 0.22);
      }
      .post:hover .post__thumb img {
        transform: scale(1.06);
      }
      .post__body {
        padding: clamp(1.25rem, 2vw, 1.6rem);
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
        flex: 1;
      }
      .post__meta {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: var(--fs-xs);
        color: var(--text-mute);
      }
      .post__title {
        font-size: 1.32rem;
        font-weight: 500;
        line-height: 1.22;
      }
      .post__excerpt {
        color: var(--text-soft);
        font-size: var(--fs-sm);
        line-height: 1.6;
        flex: 1;
      }
      .post__more {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        margin-top: 0.4rem;
        font-size: var(--fs-sm);
        font-weight: 500;
        color: var(--accent);
      }
      [data-theme='dark'] .post__more {
        color: var(--gold);
      }
      .post:hover .arrow {
        transform: translateX(4px);
        transition: transform 0.3s var(--ease);
      }
      [dir='rtl'] .post__more .arrow {
        transform: scaleX(-1);
      }
      [dir='rtl'] .post:hover .arrow {
        transform: translateX(-4px) scaleX(-1);
      }
    `,
  ],
})
export class BlogCardComponent {
  @Input({ required: true }) post!: BlogPost;
  protected t = inject(TranslationService);

  get formattedDate(): string {
    const locale = this.t.lang() === 'ar' ? 'ar' : 'en-US';
    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(new Date(this.post.date));
  }
}
