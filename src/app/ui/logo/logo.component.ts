import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../core/translation.service';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a class="logo" [routerLink]="t.path('/')" [attr.aria-label]="t.ui().brand.name">
      <span class="logo__mark" aria-hidden="true">
        <img
          src="/img/veloura-v-icon.png"
          alt=""
          width="668"
          height="678"
          loading="eager"
          fetchpriority="high"
          decoding="async"
        />
      </span>
      @if (showWord) {
        <span class="logo__word">{{ t.ui().brand.name }}</span>
      }
    </a>
  `,
  styles: [
    `
      .logo {
        display: inline-flex;
        align-items: center;
        gap: 0.62rem;
      }
      :host {
        display: inline-flex;
      }
      .logo__mark {
        width: var(--logo-size, 44px);
        height: var(--logo-size, 44px);
        display: inline-flex;
        flex-shrink: 0;
        filter: drop-shadow(0 7px 15px rgba(90, 30, 42, 0.2));
        transition: transform 0.5s var(--ease-out), filter 0.5s var(--ease);
      }
      .logo__mark img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        transition: filter 0.5s var(--ease);
      }
      :host-context([data-theme='dark']) .logo__mark {
        filter:
          drop-shadow(0 0 1px rgba(255, 255, 255, 0.95))
          drop-shadow(0 0 7px rgba(255, 255, 255, 0.46))
          drop-shadow(0 0 17px rgba(111, 26, 43, 0.88))
          drop-shadow(0 0 28px rgba(111, 26, 43, 0.48));
      }
      :host-context([data-theme='dark']) .logo__mark img {
        filter: brightness(1.1) saturate(1.08) contrast(1.04);
      }
      .logo:hover .logo__mark {
        transform: translateY(-2px) scale(1.04) rotate(-1.5deg);
        filter: drop-shadow(0 12px 26px rgba(90, 30, 42, 0.4));
      }
      :host-context([data-theme='dark']) .logo:hover .logo__mark {
        filter:
          drop-shadow(0 0 1px rgba(255, 255, 255, 1))
          drop-shadow(0 0 10px rgba(255, 255, 255, 0.56))
          drop-shadow(0 0 21px rgba(111, 26, 43, 0.96))
          drop-shadow(0 0 34px rgba(111, 26, 43, 0.58));
      }
      .logo__word {
        font-family: var(--font-display);
        font-size: var(--logo-word-size, 1.08rem);
        font-weight: 500;
        letter-spacing: 0.18em;
        line-height: 1;
        text-transform: uppercase;
        color: var(--text);
      }
      html[lang='ar'] .logo__word {
        font-family: var(--font-display);
        letter-spacing: 0.18em;
        font-weight: 500;
      }
    `,
  ],
})
export class LogoComponent {
  @Input() showWord = true;
  protected t = inject(TranslationService);
}
