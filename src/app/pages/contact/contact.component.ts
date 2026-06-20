import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { CONTACT } from '../../core/content';
import { RevealDirective } from '../../core/reveal.directive';
import { SeoService } from '../../core/seo.service';
import { absUrl, SITE } from '../../core/site.config';
import { pageSchema } from '../../core/structured-data';
import { TranslationService } from '../../core/translation.service';
import { ContactFormComponent } from '../../ui/contact-form/contact-form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RevealDirective, ContactFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  protected t = inject(TranslationService);
  protected contact = CONTACT;
  protected mailto = `mailto:${CONTACT.email}`;
  protected whatsappNumber = CONTACT.whatsapp.replace(/[^\d]/g, '');
  protected hasWhatsapp = this.whatsappNumber.length > 0;
  protected whatsappLink = this.hasWhatsapp ? `https://wa.me/${this.whatsappNumber}` : '';

  constructor(seo: SeoService) {
    seo.set(
      () => this.t.ui().contact.metaTitle,
      () => this.t.ui().contact.metaDesc
    );

    effect(() => {
      const url = absUrl(this.t.path('/contact'));
      seo.setJsonLd(pageSchema({
        url,
        name: this.t.ui().contact.metaTitle,
        description: this.t.ui().contact.metaDesc,
        language: this.t.lang(),
        breadcrumbs: [
          { name: this.t.ui().nav.home, path: this.t.path('/') },
          { name: this.t.ui().nav.contact, path: this.t.path('/contact') },
        ],
        additional: [{
          '@type': 'ContactPage',
          '@id': `${url}#contact-page`,
          url,
          name: this.t.ui().contact.metaTitle,
          mainEntity: { '@id': `${SITE.url}/#organization` },
        }],
      }));
    });
  }
}
