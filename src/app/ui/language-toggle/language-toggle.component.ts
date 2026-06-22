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
        gap: 0.1rem;
      }
      .lang__btn {
        position: relative;
        min-width: 34px;
        min-height: 40px;
        padding: 0.4rem 0.45rem;
        border-radius: 0;
        font-size: 0.78rem;
        font-weight: 600;
        letter-spacing: 0.04em;
        color: var(--text-mute);
        transition: color 0.3s var(--ease);
      }
      .lang__btn::after {
        content: '';
        position: absolute;
        inset-inline: 0.45rem;
        bottom: 3px;
        height: 1.5px;
        background: var(--gold);
        transform: scaleX(0);
        transition: transform 0.3s var(--ease);
      }
      .lang__btn:hover {
        color: var(--text);
      }
      .lang__btn.is-active {
        color: var(--text);
      }
      .lang__btn.is-active::after {
        transform: scaleX(1);
      }
      :host-context([data-theme='dark']) .lang__btn.is-active {
        color: var(--gold-bright);
      }
    `,
  ],
})
export class LanguageToggleComponent {
  protected t = inject(TranslationService);
  protected languages = LANGUAGES;
}
