import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CONTACT } from '../../core/content';
import { RevealDirective } from '../../core/reveal.directive';
import { SeoService } from '../../core/seo.service';
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
  }
}
