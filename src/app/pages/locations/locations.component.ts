import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LOCATION_PAGES } from '../../core/market-content';
import { RevealDirective } from '../../core/reveal.directive';
import { SeoService } from '../../core/seo.service';
import { TranslationService } from '../../core/translation.service';
import { CtaBandComponent } from '../../ui/cta-band/cta-band.component';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [RouterLink, RevealDirective, CtaBandComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss',
})
export class LocationsComponent {
  protected t = inject(TranslationService);
  protected locations = LOCATION_PAGES;

  constructor(seo: SeoService) {
    seo.set(
      () => this.t.ui().locations.metaTitle,
      () => this.t.ui().locations.metaDesc
    );
  }
}
