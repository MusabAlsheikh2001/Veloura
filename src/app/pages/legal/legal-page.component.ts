import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { findLegalPage, LegalPage } from '../../core/legal-content';
import { RevealDirective } from '../../core/reveal.directive';
import { SeoService } from '../../core/seo.service';
import { absUrl, SITE } from '../../core/site.config';
import { TranslationService } from '../../core/translation.service';

@Component({
  selector: 'app-legal-page',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './legal-page.component.html',
  styleUrl: './legal-page.component.scss',
})
export class LegalPageComponent {
  protected t = inject(TranslationService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  protected page = signal<LegalPage | undefined>(undefined);

  constructor(seo: SeoService) {
    this.route.data.subscribe((data) => {
      const found = findLegalPage(data['legalPage']);
      if (!found) {
        this.router.navigateByUrl(this.t.path('/'));
        return;
      }
      this.page.set(found);
    });

    seo.set(
      () => {
        const page = this.page();
        return page ? this.t.pick(page.metaTitle) : this.t.ui().home.metaTitle;
      },
      () => {
        const page = this.page();
        return page ? this.t.pick(page.metaDesc) : this.t.ui().home.metaDesc;
      }
    );

    effect(() => {
      const page = this.page();
      if (!page) return;
      const url = absUrl(this.t.path('/' + page.id));
      const graph: unknown[] = [
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: this.t.ui().nav.home, item: absUrl(this.t.path('/')) },
            { '@type': 'ListItem', position: 2, name: this.t.pick(page.title), item: url },
          ],
        },
        {
          '@type': 'WebPage',
          '@id': url,
          url,
          name: this.t.pick(page.h1),
          description: this.t.pick(page.metaDesc),
          inLanguage: this.t.lang(),
          publisher: { '@id': SITE.url + '/#organization' },
        },
      ];

      if (page.faqs.length) {
        graph.push({
          '@type': 'FAQPage',
          mainEntity: page.faqs.map((faq) => ({
            '@type': 'Question',
            name: this.t.pick(faq.q),
            acceptedAnswer: {
              '@type': 'Answer',
              text: this.t.pick(faq.a),
            },
          })),
        });
      }

      seo.setJsonLd({
        '@context': 'https://schema.org',
        '@graph': graph,
      });
    });
  }
}
