import { ChangeDetectionStrategy, Component, DOCUMENT, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CONTACT, SOCIALS } from '../../core/content';
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
  private document = inject(DOCUMENT);
  protected socials = SOCIALS;
  protected contact = CONTACT;
  /** Opens a Gmail compose window addressed to the studio inbox (works without
     a desktop mail client). Opened in a new tab from the template. */
  protected emailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT.email)}`;

  backToTop(): void {
    this.document.defaultView?.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
