import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SERVICES } from '../../core/content';
import { RevealDirective } from '../../core/reveal.directive';
import { SeoService } from '../../core/seo.service';
import { TranslationService } from '../../core/translation.service';
import { CtaBandComponent } from '../../ui/cta-band/cta-band.component';
import { IconComponent } from '../../ui/icon/icon.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RevealDirective, IconComponent, CtaBandComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  protected t = inject(TranslationService);
  protected services = SERVICES;

  constructor(seo: SeoService) {
    seo.set(
      () => this.t.ui().services.metaTitle,
      () => this.t.ui().services.metaDesc
    );
  }
}
