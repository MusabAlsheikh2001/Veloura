import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../core/reveal.directive';
import { TranslationService } from '../../core/translation.service';

@Component({
  selector: 'app-cta-band',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="cta-band" appReveal>
      <span class="cta-band__glow" aria-hidden="true"></span>
      <div class="cta-band__inner">
        <h2 class="cta-band__title">{{ title }}</h2>
        @if (subtitle) {
          <p class="cta-band__sub">{{ subtitle }}</p>
        }
        <a class="btn btn-lg cta-band__btn" [routerLink]="t.path(link)">
          {{ button || t.ui().common.startProject }}
          <svg class="arrow" width="18" height="18" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </div>
  `,
  styleUrl: './cta-band.component.scss',
})
export class CtaBandComponent {
  @Input({ required: true }) title!: string;
  @Input() subtitle?: string;
  @Input() button?: string;
  @Input() link = '/contact';
  protected t = inject(TranslationService);
}
