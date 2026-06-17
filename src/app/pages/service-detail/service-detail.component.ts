import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { RevealDirective } from '../../core/reveal.directive';
import { SeoService } from '../../core/seo.service';
import { absUrl, SITE } from '../../core/site.config';
import { TranslationService } from '../../core/translation.service';
import { CtaBandComponent } from '../../ui/cta-band/cta-band.component';
import { IconComponent } from '../../ui/icon/icon.component';
import {
  findServicePage,
  ServicePage,
  SERVICE_PAGES,
} from '../../core/market-content';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [RouterLink, RevealDirective, IconComponent, CtaBandComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.scss',
})
export class ServiceDetailComponent {
  protected t = inject(TranslationService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  protected page = signal<ServicePage | undefined>(undefined);

  constructor(seo: SeoService) {
    this.route.paramMap.subscribe((params) => {
      const found = findServicePage(params.get('slug'));
      if (!found) {
        this.router.navigateByUrl(this.t.path('/services'));
        return;
      }
      this.page.set(found);
    });

    seo.set(
      () => {
        const page = this.page();
        return page ? this.t.pick(page.metaTitle) : this.t.ui().services.metaTitle;
      },
      () => {
        const page = this.page();
        return page ? this.t.pick(page.metaDesc) : this.t.ui().services.metaDesc;
      }
    );

    effect(() => {
      const page = this.page();
      if (!page) return;
      const url = absUrl(this.t.path('/services/' + page.slug));
      seo.setJsonLd({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: this.t.ui().nav.home, item: absUrl(this.t.path('/')) },
              { '@type': 'ListItem', position: 2, name: this.t.ui().nav.services, item: absUrl(this.t.path('/services')) },
              { '@type': 'ListItem', position: 3, name: this.t.pick(page.title), item: url },
            ],
          },
          {
            '@type': 'Service',
            name: this.t.pick(page.title),
            description: this.t.pick(page.metaDesc),
            provider: { '@id': SITE.url + '/#organization' },
            areaServed: ['GCC', 'Saudi Arabia', 'United Arab Emirates', 'Qatar', 'Kuwait', 'Bahrain', 'Oman', 'International'],
            url,
            serviceType: this.t.pick(page.title),
          },
          {
            '@type': 'FAQPage',
            mainEntity: page.faqs.map((faq) => ({
              '@type': 'Question',
              name: this.t.pick(faq.q),
              acceptedAnswer: {
                '@type': 'Answer',
                text: this.t.pick(faq.a),
              },
            })),
          },
        ],
      });
    });
  }

  protected relatedServices(page: ServicePage): ServicePage[] {
    return page.related
      .map((slug) => SERVICE_PAGES.find((service) => service.slug === slug || service.id === slug))
      .filter((service): service is ServicePage => !!service)
      .slice(0, 3);
  }
}
