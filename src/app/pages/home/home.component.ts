import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  INDUSTRIES,
  BLOG_POSTS,
  MODEL_DO,
  MODEL_DONT,
  PROCESS,
  SERVICES_PREVIEW,
  VALUE_CARDS,
} from '../../core/content';
import { findLegalPage } from '../../core/legal-content';
import { serviceSlugById } from '../../core/market-content';
import { RevealDirective } from '../../core/reveal.directive';
import { SeoService } from '../../core/seo.service';
import { absUrl } from '../../core/site.config';
import { itemListSchema, pageSchema } from '../../core/structured-data';
import { TranslationService } from '../../core/translation.service';
import { CtaBandComponent } from '../../ui/cta-band/cta-band.component';
import { BlogCardComponent } from '../../ui/blog-card/blog-card.component';
import { IconComponent } from '../../ui/icon/icon.component';
import { ProcessStepComponent } from '../../ui/process-step/process-step.component';
import { SectionHeaderComponent } from '../../ui/section-header/section-header.component';
import { ServiceCardComponent } from '../../ui/service-card/service-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    RevealDirective,
    SectionHeaderComponent,
    ServiceCardComponent,
    ProcessStepComponent,
    IconComponent,
    BlogCardComponent,
    CtaBandComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  protected t = inject(TranslationService);

  /** Interface state shown by the hero product panel (0 = overview, 1 = pipeline, 2 = invoices). */
  protected readonly panelState = signal(0);
  protected readonly panelStates = [0, 1, 2];

  /** Portfolio: the logo drifts toward the pointer while the card is hovered. */
  protected aimPortfolio(event: PointerEvent): void {
    const host = event.currentTarget as HTMLElement;
    const r = host.getBoundingClientRect();
    host.style.setProperty('--px', ((event.clientX - r.left) / r.width - 0.5).toFixed(3));
    host.style.setProperty('--py', ((event.clientY - r.top) / r.height - 0.5).toFixed(3));
  }

  protected resetPortfolio(event: PointerEvent): void {
    const host = event.currentTarget as HTMLElement;
    host.style.setProperty('--px', '0');
    host.style.setProperty('--py', '0');
  }

  protected setPanel(state: number): void {
    this.panelState.set(state);
  }

  /** Pointer tilt: sets --tilt-x / --tilt-y on the panel, read by its transform. */
  protected tiltPanel(event: PointerEvent): void {
    if (event.pointerType !== 'mouse') return; // touch drags should scroll, not tilt
    const host = event.currentTarget as HTMLElement;
    const r = host.getBoundingClientRect();
    const px = (event.clientX - r.left) / r.width - 0.5;
    const py = (event.clientY - r.top) / r.height - 0.5;
    host.style.setProperty('--tilt-x', (px * 8).toFixed(2) + 'deg');
    host.style.setProperty('--tilt-y', (-py * 6).toFixed(2) + 'deg');
  }

  protected resetTilt(event: PointerEvent): void {
    const host = event.currentTarget as HTMLElement;
    host.style.setProperty('--tilt-x', '0deg');
    host.style.setProperty('--tilt-y', '0deg');
  }

  protected services = SERVICES_PREVIEW;
  protected process = PROCESS;
  protected values = VALUE_CARDS;
  protected industries = INDUSTRIES;
  protected modelDo = MODEL_DO;
  protected modelDont = MODEL_DONT;
  protected posts = BLOG_POSTS.slice(0, 3);
  protected faqs = findLegalPage('faqs')?.faqs.slice(0, 6) ?? [];

  constructor(seo: SeoService) {
    seo.set(
      () => this.t.ui().home.metaTitle,
      () => this.t.ui().home.metaDesc
    );

    effect(() => {
      const url = absUrl(this.t.path('/'));
      const listId = `${url}#featured-services`;
      seo.setJsonLd(pageSchema({
        url,
        name: this.t.ui().home.metaTitle,
        description: this.t.ui().home.metaDesc,
        language: this.t.lang(),
        breadcrumbs: [{ name: this.t.ui().nav.home, path: this.t.path('/') }],
        mainEntityId: listId,
        additional: [
          itemListSchema(
            listId,
            this.t.ui().home.servicesTitle,
            this.services.map((service) => ({
              name: this.t.pick(service.title),
              path: this.t.path(`/services/${serviceSlugById(service.id)}`),
              type: 'Service',
            }))
          ),
          {
            '@type': 'FAQPage',
            '@id': `${url}#faq`,
            mainEntity: this.faqs.map((faq) => ({
              '@type': 'Question',
              name: this.t.pick(faq.q),
              acceptedAnswer: {
                '@type': 'Answer',
                text: this.t.pick(faq.a),
              },
            })),
          },
        ],
      }));
    });
  }
}
