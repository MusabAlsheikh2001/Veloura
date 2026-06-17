import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { findLocationPage, LocationPage, SERVICE_PAGES } from '../../core/market-content';
import { RevealDirective } from '../../core/reveal.directive';
import { SeoService } from '../../core/seo.service';
import { absUrl } from '../../core/site.config';
import { TranslationService } from '../../core/translation.service';
import { CtaBandComponent } from '../../ui/cta-band/cta-band.component';
import { IconComponent } from '../../ui/icon/icon.component';

@Component({
  selector: 'app-location-detail',
  standalone: true,
  imports: [RouterLink, RevealDirective, IconComponent, CtaBandComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './location-detail.component.html',
  styleUrl: './location-detail.component.scss',
})
export class LocationDetailComponent {
  protected t = inject(TranslationService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  protected page = signal<LocationPage | undefined>(undefined);
  protected services = SERVICE_PAGES.slice(0, 6);

  constructor(seo: SeoService) {
    this.route.paramMap.subscribe((params) => {
      const found = findLocationPage(params.get('slug'));
      if (!found) {
        this.router.navigateByUrl(this.t.path('/locations'));
        return;
      }
      this.page.set(found);
    });

    seo.set(
      () => {
        const page = this.page();
        return page ? this.t.pick(page.metaTitle) : this.t.ui().locations.metaTitle;
      },
      () => {
        const page = this.page();
        return page ? this.t.pick(page.metaDesc) : this.t.ui().locations.metaDesc;
      }
    );

    effect(() => {
      const page = this.page();
      if (!page) return;
      const url = absUrl(this.t.path('/locations/' + page.slug));
      seo.setJsonLd({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: this.t.ui().nav.home, item: absUrl(this.t.path('/')) },
              { '@type': 'ListItem', position: 2, name: this.t.ui().nav.locations, item: absUrl(this.t.path('/locations')) },
              { '@type': 'ListItem', position: 3, name: this.t.pick(page.title), item: url },
            ],
          },
          {
            '@type': 'WebPage',
            name: this.t.pick(page.h1),
            description: this.t.pick(page.metaDesc),
            url,
            inLanguage: this.t.lang(),
          },
        ],
      });
    });
  }
}
