import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { ProcessStep } from '../../core/content';
import { TranslationService } from '../../core/translation.service';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-process-step',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article class="step">
      <div class="step__top">
        <span class="step__icon" aria-hidden="true">
          <app-icon [name]="step.icon" />
        </span>
        <span class="step__num">{{ step.num }}</span>
      </div>
      <h3 class="step__title">{{ t.pick(step.title) }}</h3>
      <p class="step__desc">{{ t.pick(step.desc) }}</p>
    </article>
  `,
  styles: [
    `
      .step {
        position: relative;
        padding-top: 1.6rem;
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
        border-top: 1px solid var(--border-strong);
      }
      .step__top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0.4rem;
      }
      .step__icon {
        width: 40px;
        height: 40px;
        padding: 9px;
        color: var(--accent);
      }
      [data-theme='dark'] .step__icon {
        color: var(--gold);
      }
      .step__num {
        font-size: 0.85rem;
        font-weight: 600;
        letter-spacing: 0.1em;
        color: var(--gold);
      }
      .step__title {
        font-size: 1.25rem;
        font-weight: 600;
      }
      .step__desc {
        color: var(--text-soft);
        font-size: var(--fs-sm);
        line-height: 1.6;
      }
    `,
  ],
})
export class ProcessStepComponent {
  @Input({ required: true }) step!: ProcessStep;
  protected t = inject(TranslationService);
}
