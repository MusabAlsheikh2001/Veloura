import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { INDUSTRY_PAGES } from '../../core/market-content';
import { RevealDirective } from '../../core/reveal.directive';
import { SeoService } from '../../core/seo.service';
import { TranslationService } from '../../core/translation.service';
import { CtaBandComponent } from '../../ui/cta-band/cta-band.component';

@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [RouterLink, RevealDirective, CtaBandComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './industries.component.html',
  styleUrl: './industries.component.scss',
})
export class IndustriesComponent {
  protected t = inject(TranslationService);
  protected industries = INDUSTRY_PAGES;

  constructor(seo: SeoService) {
    seo.set(
      () => this.t.ui().industries.metaTitle,
      () => this.t.ui().industries.metaDesc
    );
  }
}
