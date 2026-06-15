import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CONTACT, SERVICES, SOCIALS } from '../../core/content';
import { TranslationService } from '../../core/translation.service';
import { LogoComponent } from '../../ui/logo/logo.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, LogoComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  protected t = inject(TranslationService);
  protected year = new Date().getFullYear();

  protected services = SERVICES.slice(0, 6);
  protected socials = SOCIALS;
  protected contact = CONTACT;

  protected navLinks = [
    { path: '/', key: 'home' as const },
    { path: '/about', key: 'about' as const },
    { path: '/services', key: 'services' as const },
    { path: '/blog', key: 'blog' as const },
    { path: '/contact', key: 'contact' as const },
  ];

  protected mailto = `mailto:${CONTACT.email}`;
  protected whatsappLink = `https://wa.me/${CONTACT.whatsapp.replace(/[^\d]/g, '')}`;

  backToTop(): void {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
