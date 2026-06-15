import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../core/translation.service';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a class="logo" routerLink="/" [attr.aria-label]="t.ui().brand.name">
      <span class="logo__mark" aria-hidden="true">
        <svg viewBox="0 0 40 40" fill="none">
          <rect x="1" y="1" width="38" height="38" rx="11.5" fill="url(#vTile)" />
          <rect x="1.6" y="1.6" width="36.8" height="36.8" rx="10.9" fill="none"
                stroke="url(#vEdge)" stroke-width="1.1" />
          <!-- V monogram: ivory base + rising champagne-gold right arm -->
          <path d="M11.3 12 20 27.4 28.7 10.6" fill="none" stroke="#F5EFE7"
                stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M20 27.4 28.7 10.6" fill="none" stroke="url(#vGold)"
                stroke-width="2.8" stroke-linecap="round" />
          <defs>
            <linearGradient id="vTile" x1="2" y1="2" x2="38" y2="38" gradientUnits="userSpaceOnUse">
              <stop stop-color="#6A2533" />
              <stop offset="1" stop-color="#3A0F18" />
            </linearGradient>
            <linearGradient id="vGold" x1="20" y1="28" x2="29" y2="10" gradientUnits="userSpaceOnUse">
              <stop stop-color="#B68A4E" />
              <stop offset="1" stop-color="#E7D3B2" />
            </linearGradient>
            <linearGradient id="vEdge" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop stop-color="#C6A77B" stop-opacity="0.75" />
              <stop offset="1" stop-color="#C6A77B" stop-opacity="0.12" />
            </linearGradient>
          </defs>
        </svg>
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
        gap: 0.6rem;
      }
      .logo__mark {
        width: 36px;
        height: 36px;
        display: inline-flex;
        flex-shrink: 0;
        filter: drop-shadow(0 4px 10px rgba(90, 30, 42, 0.25));
        transition: transform 0.45s var(--ease-out), filter 0.45s var(--ease);
      }
      .logo:hover .logo__mark {
        transform: translateY(-1px) scale(1.05);
        filter: drop-shadow(0 7px 18px rgba(90, 30, 42, 0.42));
      }
      .logo__word {
        font-size: 1.32rem;
        font-weight: 600;
        letter-spacing: -0.01em;
        color: var(--text);
      }
      html[lang='ar'] .logo__word {
        font-weight: 700;
      }
    `,
  ],
})
export class LogoComponent {
  @Input() showWord = true;
  protected t = inject(TranslationService);
}
