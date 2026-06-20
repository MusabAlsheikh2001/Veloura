import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LOCATION_PAGES } from '../../core/market-content';
import { RevealDirective } from '../../core/reveal.directive';
import { SeoService } from '../../core/seo.service';
import { absUrl } from '../../core/site.config';
import { itemListSchema, pageSchema } from '../../core/structured-data';
import { TranslationService } from '../../core/translation.service';
import { CtaBandComponent } from '../../ui/cta-band/cta-band.component';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [RouterLink, RevealDirective, CtaBandComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss',
})
export class LocationsComponent {
  protected t = inject(TranslationService);
  protected locations = LOCATION_PAGES;

  constructor(seo: SeoService) {
    seo.set(
      () => this.t.ui().locations.metaTitle,
      () => this.t.ui().locations.metaDesc
    );

    effect(() => {
      const url = absUrl(this.t.path('/locations'));
      const listId = `${url}#location-list`;
      seo.setJsonLd(pageSchema({
        url,
        name: this.t.ui().locations.metaTitle,
        description: this.t.ui().locations.metaDesc,
        language: this.t.lang(),
        breadcrumbs: [
          { name: this.t.ui().nav.home, path: this.t.path('/') },
          { name: this.t.ui().nav.locations, path: this.t.path('/locations') },
        ],
        mainEntityId: listId,
        additional: [
          itemListSchema(
            listId,
            this.t.ui().nav.locations,
            this.locations.map((location) => ({
              name: this.t.pick(location.title),
              path: this.t.path(`/locations/${location.slug}`),
              type: 'Place',
            }))
          ),
        ],
      }));
    });
  }
}
