import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { TranslationService } from './core/translation.service';
import { ThemeService } from './core/theme.service';
import { SeoService } from './core/seo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // Inject so the language/theme effects and SEO route tracking boot with the
  // app shell — SeoService must subscribe before the router's initial navigation
  // so canonical/og:url are correct on first load (including deep links).
  constructor(
    private t: TranslationService,
    private theme: ThemeService,
    private seo: SeoService
  ) {}
}
