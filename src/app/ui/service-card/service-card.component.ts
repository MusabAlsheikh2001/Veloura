import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { Service } from '../../core/content';
import { TranslationService } from '../../core/translation.service';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article class="svc card card-hover">
      <span class="svc__icon" aria-hidden="true">
        <app-icon [name]="service.icon" />
      </span>
      <h3 class="svc__title">{{ t.pick(service.title) }}</h3>
      <p class="svc__desc">{{ t.pick(service.desc) }}</p>
    </article>
  `,
  styles: [
    `
      .svc {
        height: 100%;
        padding: clamp(1.5rem, 2.4vw, 2.1rem);
        display: flex;
        flex-direction: column;
        gap: 0.85rem;
        position: relative;
        overflow: hidden;
      }
      .svc::after {
        content: '';
        position: absolute;
        inset: 0;
        background: radial-gradient(
          120% 80% at 100% 0%,
          var(--gold-soft),
          transparent 60%
        );
        opacity: 0;
        transition: opacity 0.5s var(--ease);
        pointer-events: none;
      }
      .svc:hover::after {
        opacity: 1;
      }
      .svc__icon {
        width: 48px;
        height: 48px;
        padding: 11px;
        border-radius: 14px;
        color: var(--accent);
        background: color-mix(in srgb, var(--accent) 9%, transparent);
        border: 1px solid color-mix(in srgb, var(--accent) 18%, transparent);
        transition: transform 0.5s var(--ease), color 0.4s var(--ease);
      }
      [data-theme='dark'] .svc__icon {
        color: var(--gold);
        background: var(--gold-soft);
        border-color: color-mix(in srgb, var(--gold) 24%, transparent);
      }
      .svc:hover .svc__icon {
        transform: translateY(-2px) scale(1.04);
      }
      .svc__title {
        font-size: var(--fs-h3);
        font-weight: 600;
      }
      .svc__desc {
        color: var(--text-soft);
        font-size: var(--fs-sm);
        line-height: 1.6;
      }
    `,
  ],
})
export class ServiceCardComponent {
  @Input({ required: true }) service!: Service;
  protected t = inject(TranslationService);
}
