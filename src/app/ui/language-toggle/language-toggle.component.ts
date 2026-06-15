import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LANGUAGES } from '../../core/i18n';
import { TranslationService } from '../../core/translation.service';

@Component({
  selector: 'app-language-toggle',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="lang" role="group" [attr.aria-label]="t.ui().controls.language">
      @for (l of languages; track l.code) {
        <button
          type="button"
          class="lang__btn"
          [class.is-active]="t.lang() === l.code"
          [attr.aria-pressed]="t.lang() === l.code"
          [attr.lang]="l.code"
          (click)="t.setLang(l.code)"
        >
          {{ l.short }}
        </button>
      }
    </div>
  `,
  styles: [
    `
      .lang {
        display: inline-flex;
        align-items: center;
        padding: 3px;
        border-radius: 100px;
        border: 1px solid var(--border-strong);
        background: var(--surface);
      }
      .lang__btn {
        min-width: 38px;
        padding: 0.34rem 0.6rem;
        border-radius: 100px;
        font-size: 0.78rem;
        font-weight: 600;
        letter-spacing: 0.04em;
        color: var(--text-mute);
        transition: color 0.3s var(--ease), background 0.3s var(--ease);
      }
      .lang__btn:hover {
        color: var(--text);
      }
      .lang__btn.is-active {
        background: var(--accent);
        color: var(--btn-text);
      }
      [data-theme='dark'] .lang__btn.is-active {
        color: var(--btn-text);
      }
    `,
  ],
})
export class LanguageToggleComponent {
  protected t = inject(TranslationService);
  protected languages = LANGUAGES;
}
