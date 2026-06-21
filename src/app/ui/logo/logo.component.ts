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
        <img src="/img/veloura-v-icon.png" alt="" width="668" height="678" decoding="async" />
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
        filter: drop-shadow(0 8px 18px rgba(90, 30, 42, 0.2));
        transition: transform 0.5s var(--ease-out), filter 0.5s var(--ease);
      }
      .logo__mark img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      /* Dark mode: the burgundy mark sits on a near-black surface, so lift it
         with a warm champagne rim-glow + slight brightness for clean contrast. */
      [data-theme='dark'] .logo__mark {
        filter: brightness(1.14) saturate(1.05)
          drop-shadow(0 0 10px rgba(198, 167, 123, 0.32))
          drop-shadow(0 6px 16px rgba(0, 0, 0, 0.55));
      }
      .logo:hover .logo__mark {
        transform: translateY(-2px) scale(1.04) rotate(-1.5deg);
        filter: drop-shadow(0 12px 26px rgba(90, 30, 42, 0.4));
      }
      [data-theme='dark'] .logo:hover .logo__mark {
        filter: brightness(1.2) saturate(1.08)
          drop-shadow(0 0 16px rgba(198, 167, 123, 0.5))
          drop-shadow(0 10px 22px rgba(0, 0, 0, 0.6));
      }
      .logo__word {
        font-family: var(--font-display);
        font-size: 1.4rem;
        font-weight: 600;
        letter-spacing: 0.01em;
        color: var(--text);
      }
      html[lang='ar'] .logo__word {
        font-family: var(--font-ar);
        font-weight: 700;
      }
    `,
  ],
})
export class LogoComponent {
  @Input() showWord = true;
  protected t = inject(TranslationService);
}
