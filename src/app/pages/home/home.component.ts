import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  INDUSTRIES,
  BLOG_POSTS,
  MODEL_DO,
  MODEL_DONT,
  PROCESS,
  SERVICES_PREVIEW,
  TRUST,
  VALUE_CARDS,
} from '../../core/content';
import { CountUpDirective } from '../../core/count-up.directive';
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
    CountUpDirective,
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
  protected trust = TRUST;
  protected process = PROCESS;
  protected values = VALUE_CARDS;
  protected industries = INDUSTRIES;
  protected modelDo = MODEL_DO;
  protected modelDont = MODEL_DONT;
  protected posts = BLOG_POSTS.slice(0, 3);

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
        ],
      }));
    });
  }
}
