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
        <img src="/img/veloura-logo.jpeg" alt="" width="1254" height="1254" />
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
      :host {
        display: inline-flex;
      }
      .logo__mark {
        width: var(--logo-size, 44px);
        height: var(--logo-size, 44px);
        display: inline-flex;
        flex-shrink: 0;
        filter: drop-shadow(0 8px 18px rgba(90, 30, 42, 0.18));
        transition: transform 0.45s var(--ease-out), filter 0.45s var(--ease);
      }
      .logo__mark img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      html:not([data-theme='dark']) .logo__mark img {
        mix-blend-mode: multiply;
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
