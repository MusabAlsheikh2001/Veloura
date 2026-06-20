import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { findIndustryPage, IndustryPage, SERVICE_PAGES } from '../../core/market-content';
import { RevealDirective } from '../../core/reveal.directive';
import { SeoService } from '../../core/seo.service';
import { absUrl } from '../../core/site.config';
import { pageSchema } from '../../core/structured-data';
import { TranslationService } from '../../core/translation.service';
import { CtaBandComponent } from '../../ui/cta-band/cta-band.component';
import { IconComponent } from '../../ui/icon/icon.component';

@Component({
  selector: 'app-industry-detail',
  standalone: true,
  imports: [RouterLink, RevealDirective, IconComponent, CtaBandComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './industry-detail.component.html',
  styleUrl: './industry-detail.component.scss',
})
export class IndustryDetailComponent {
  protected t = inject(TranslationService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  protected page = signal<IndustryPage | undefined>(undefined);

  constructor(seo: SeoService) {
    this.route.paramMap.subscribe((params) => {
      const found = findIndustryPage(params.get('slug'));
      if (!found) {
        this.router.navigateByUrl(this.t.path('/industries'));
        return;
      }
      this.page.set(found);
    });

    seo.set(
      () => {
        const page = this.page();
        return page ? this.t.pick(page.metaTitle) : this.t.ui().industries.metaTitle;
      },
      () => {
        const page = this.page();
        return page ? this.t.pick(page.metaDesc) : this.t.ui().industries.metaDesc;
      }
    );

    effect(() => {
      const page = this.page();
      if (!page) return;
      const url = absUrl(this.t.path('/industries/' + page.slug));
      seo.setJsonLd(pageSchema({
        url,
        name: this.t.pick(page.metaTitle),
        description: this.t.pick(page.metaDesc),
        language: this.t.lang(),
        breadcrumbs: [
          { name: this.t.ui().nav.home, path: this.t.path('/') },
          { name: this.t.ui().nav.industries, path: this.t.path('/industries') },
          { name: this.t.pick(page.title), path: this.t.path(`/industries/${page.slug}`) },
        ],
      }));
    });
  }

  protected linkedServices(page: IndustryPage) {
    return page.services
      .map((slug) => SERVICE_PAGES.find((service) => service.slug === slug || service.id === slug))
      .filter((service): service is (typeof SERVICE_PAGES)[number] => !!service)
      .slice(0, 4);
  }
}
