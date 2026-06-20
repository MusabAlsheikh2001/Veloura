import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SERVICES } from '../../core/content';
import { serviceSlugById } from '../../core/market-content';
import { RevealDirective } from '../../core/reveal.directive';
import { SeoService } from '../../core/seo.service';
import { absUrl } from '../../core/site.config';
import { itemListSchema, pageSchema } from '../../core/structured-data';
import { TranslationService } from '../../core/translation.service';
import { CtaBandComponent } from '../../ui/cta-band/cta-band.component';
import { IconComponent } from '../../ui/icon/icon.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, RevealDirective, IconComponent, CtaBandComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  protected t = inject(TranslationService);
  protected services = SERVICES;
  protected serviceSlug = serviceSlugById;

  constructor(seo: SeoService) {
    seo.set(
      () => this.t.ui().services.metaTitle,
      () => this.t.ui().services.metaDesc
    );

    effect(() => {
      const url = absUrl(this.t.path('/services'));
      const listId = `${url}#service-list`;
      seo.setJsonLd(pageSchema({
        url,
        name: this.t.ui().services.metaTitle,
        description: this.t.ui().services.metaDesc,
        language: this.t.lang(),
        breadcrumbs: [
          { name: this.t.ui().nav.home, path: this.t.path('/') },
          { name: this.t.ui().nav.services, path: this.t.path('/services') },
        ],
        mainEntityId: listId,
        additional: [
          itemListSchema(
            listId,
            this.t.ui().nav.services,
            this.services.map((service) => ({
              name: this.t.pick(service.title),
              path: this.t.path(`/services/${this.serviceSlug(service.id)}`),
              type: 'Service',
            }))
          ),
        ],
      }));
    });
  }
}
