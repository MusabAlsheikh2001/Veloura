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

  protected services = SERVICES_PREVIEW;

  /** Constellation: each service sits on a ring around the V mark. */
  protected readonly nodes = SERVICES_PREVIEW.map((s, i) => {
    const angle = ((-90 + (i * 360) / SERVICES_PREVIEW.length) * Math.PI) / 180;
    return {
      s,
      i,
      x: (50 + 36 * Math.cos(angle)).toFixed(2),
      y: (50 + 36 * Math.sin(angle)).toFixed(2),
      slug: serviceSlugById(s.id),
    };
  });
  protected readonly activeNode = signal(0);
  protected readonly activeService = signal(0);

  /** Technologies the studio can verify it uses in this codebase (Simple Icons, CC0). */
  protected readonly stack = [
    { name: 'Angular', src: '/img/logos/tech/angular.svg' },
    { name: 'TypeScript', src: '/img/logos/tech/typescript.svg' },
    { name: 'Node.js', src: '/img/logos/tech/nodedotjs.svg' },
    { name: 'Git', src: '/img/logos/tech/git.svg' },
    { name: 'GitHub', src: '/img/logos/tech/github.svg' },
  ];
  protected readonly activeProject = signal(0);

  /** Selected Work: the three projects, with their real URLs and authentic logos. */
  protected get projects() {
    const h = this.t.ui().home;
    return [
      { key: 'nay', name: 'Nay Alrouh', host: 'nayalrouh.com', url: 'https://nayalrouh.com/', logo: 'https://nayalrouh.b-cdn.net/logo.png', alt: 'Nay Alrouh logo', type: h.portfolioNayType, desc: h.portfolioNayDesc },
      { key: 'sukkar', name: 'Sukkar', host: 'sukkar.space', url: 'https://sukkar.space/', logo: '/img/portfolio-sukkar-logo.svg', alt: 'Sukkar logo', type: h.portfolioSukkarType, desc: h.portfolioSukkarDesc },
      { key: 'alma', name: 'Alma Alrouh', host: 'alma-alrouh.com', url: 'https://alma-alrouh.com/', logo: '/img/portfolio-alma-logo.png', alt: 'Alma Alrouh logo', type: h.portfolioAlmaType, desc: h.portfolioAlmaDesc },
    ];
  }
  protected readonly slug = serviceSlugById;

  protected setNode(i: number): void {
    this.activeNode.set(i);
  }
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
