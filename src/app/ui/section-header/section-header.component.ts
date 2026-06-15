import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RevealDirective } from '../../core/reveal.directive';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="sec-head" [class.center]="center" appReveal>
      @if (eyebrow) {
        <span class="eyebrow">{{ eyebrow }}</span>
      }
      <h2 class="sec-head__title">{{ title }}</h2>
      @if (subtitle) {
        <p class="lead sec-head__sub">{{ subtitle }}</p>
      }
    </header>
  `,
  styles: [
    `
      .sec-head {
        max-width: 760px;
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      .sec-head.center {
        margin-inline: auto;
        text-align: center;
        align-items: center;
      }
      .sec-head__title {
        font-size: var(--fs-h2);
      }
      .sec-head__sub {
        max-width: 640px;
      }
    `,
  ],
})
export class SectionHeaderComponent {
  @Input() eyebrow?: string;
  @Input({ required: true }) title!: string;
  @Input() subtitle?: string;
  @Input() center = true;
}
