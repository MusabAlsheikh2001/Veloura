import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../core/translation.service';

/**
 * Veloura logo. Uses the approved lockup (V mark + wordmark) as transparent
 * PNGs: a dark-wordmark version for light surfaces and a porcelain-wordmark
 * version for dark surfaces. The mark on its own is used when showWord is false.
 */
@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a class="logo" [routerLink]="t.path('/')" [attr.aria-label]="t.ui().brand.name">
      @if (showWord) {
        <span class="logo__lockup" aria-hidden="true">
          <img class="logo__img logo__img--light" src="/img/brand/logo-lockup-light.png" alt="" width="1042" height="217" loading="eager" decoding="async" />
          <img class="logo__img logo__img--dark" src="/img/brand/logo-lockup-dark.png" alt="" width="1042" height="217" loading="eager" decoding="async" />
        </span>
      } @else {
        <span class="logo__mark" aria-hidden="true">
          <img src="/img/brand/logo-mark.png" alt="" width="260" height="217" loading="eager" decoding="async" />
        </span>
      }
    </a>
  `,
  styles: [
    `
      :host { display: inline-flex; }
      .logo { display: inline-flex; align-items: center; }
      .logo__lockup { position: relative; display: inline-flex; height: var(--logo-height, 44px); aspect-ratio: 1042 / 217; }
      .logo__img { display: block; width: 100%; height: 100%; object-fit: contain; transition: opacity 0.4s var(--ease); }
      .logo__img--dark { position: absolute; inset: 0; opacity: 0; }
      :host-context([data-theme='dark']) .logo__img--light { opacity: 0; }
      :host-context([data-theme='dark']) .logo__img--dark { opacity: 1; }
      .logo__mark { display: inline-flex; width: var(--logo-size, 44px); height: var(--logo-size, 44px); }
      .logo__mark img { width: 100%; height: 100%; object-fit: contain; }
      .logo:focus-visible { outline: 2px solid var(--accent-2); outline-offset: 6px; border-radius: 6px; }
    `,
  ],
})
export class LogoComponent {
  @Input() showWord = true;
  protected t = inject(TranslationService);
}
