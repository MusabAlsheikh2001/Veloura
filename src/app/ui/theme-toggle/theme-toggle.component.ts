import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ThemeService } from '../../core/theme.service';
import { TranslationService } from '../../core/translation.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      type="button"
      class="theme-toggle"
      (click)="theme.toggle()"
      [attr.aria-label]="theme.isDark() ? t.ui().controls.toLight : t.ui().controls.toDark"
      [attr.aria-pressed]="theme.isDark()"
    >
      <span class="ico" [class.is-dark]="theme.isDark()" aria-hidden="true">
        @if (theme.isDark()) {
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
               stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5" />
          </svg>
        } @else {
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
               stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
          </svg>
        }
      </span>
    </button>
  `,
  styles: [
    `
      .theme-toggle {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 0;
        background: transparent;
        color: var(--text);
        transition: color 0.3s var(--ease), background 0.3s var(--ease),
          transform 0.3s var(--ease);
      }
      .theme-toggle:hover {
        color: var(--gold);
        background: color-mix(in srgb, var(--text) 5%, transparent);
        transform: translateY(-1px);
      }
      .ico {
        width: 21px;
        height: 21px;
        display: inline-flex;
        transition: transform 0.5s var(--ease);
      }
      .ico.is-dark {
        transform: rotate(40deg);
      }
    `,
  ],
})
export class ThemeToggleComponent {
  protected theme = inject(ThemeService);
  protected t = inject(TranslationService);
}
