import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { INDUSTRY_PAGES } from '../../core/market-content';
import { RevealDirective } from '../../core/reveal.directive';
import { SeoService } from '../../core/seo.service';
import { absUrl } from '../../core/site.config';
import { itemListSchema, pageSchema } from '../../core/structured-data';
import { TranslationService } from '../../core/translation.service';
import { CtaBandComponent } from '../../ui/cta-band/cta-band.component';

@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [RouterLink, RevealDirective, CtaBandComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './industries.component.html',
  styleUrl: './industries.component.scss',
})
export class IndustriesComponent {
  protected t = inject(TranslationService);
  protected industries = INDUSTRY_PAGES;

  constructor(seo: SeoService) {
    seo.set(
      () => this.t.ui().industries.metaTitle,
      () => this.t.ui().industries.metaDesc
    );

    effect(() => {
      const url = absUrl(this.t.path('/industries'));
      const listId = `${url}#industry-list`;
      seo.setJsonLd(pageSchema({
        url,
        name: this.t.ui().industries.metaTitle,
        description: this.t.ui().industries.metaDesc,
        language: this.t.lang(),
        breadcrumbs: [
          { name: this.t.ui().nav.home, path: this.t.path('/') },
          { name: this.t.ui().nav.industries, path: this.t.path('/industries') },
        ],
        mainEntityId: listId,
        additional: [
          itemListSchema(
            listId,
            this.t.ui().nav.industries,
            this.industries.map((industry) => ({
              name: this.t.pick(industry.title),
              path: this.t.path(`/industries/${industry.slug}`),
            }))
          ),
        ],
      }));
    });
  }
}
