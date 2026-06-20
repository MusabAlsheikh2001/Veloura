import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
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
  protected socials = SOCIALS;
  protected contact = CONTACT;
  protected mailto = `mailto:${CONTACT.email}`;

  backToTop(): void {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
