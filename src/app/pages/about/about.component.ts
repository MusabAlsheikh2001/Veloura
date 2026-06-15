import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DISCIPLINES, IconName } from '../../core/content';
import { RevealDirective } from '../../core/reveal.directive';
import { SeoService } from '../../core/seo.service';
import { TranslationService } from '../../core/translation.service';
import { IconComponent } from '../../ui/icon/icon.component';
import { SectionHeaderComponent } from '../../ui/section-header/section-header.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, RevealDirective, IconComponent, SectionHeaderComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  protected t = inject(TranslationService);

  protected valueIcons: IconName[] = ['clarity', 'branding', 'performance', 'position'];
  protected disciplines = DISCIPLINES;

  /** Narrative blocks — getters keep them reactive to the language signal. */
  protected blocks = [
    {
      id: 'who',
      title: () => this.t.ui().about.whoTitle,
      p1: () => this.t.ui().about.whoBody1,
      p2: () => this.t.ui().about.whoBody2,
    },
    {
      id: 'believe',
      title: () => this.t.ui().about.believeTitle,
      p1: () => this.t.ui().about.believeBody1,
      p2: () => this.t.ui().about.believeBody2,
    },
    {
      id: 'work',
      title: () => this.t.ui().about.workTitle,
      p1: () => this.t.ui().about.workBody1,
      p2: () => this.t.ui().about.workBody2,
    },
    {
      id: 'why',
      title: () => this.t.ui().about.whyTitle,
      p1: () => this.t.ui().about.whyBody1,
      p2: () => this.t.ui().about.whyBody2,
    },
  ];

  protected values = [
    { title: () => this.t.ui().about.value1Title, body: () => this.t.ui().about.value1Body },
    { title: () => this.t.ui().about.value2Title, body: () => this.t.ui().about.value2Body },
    { title: () => this.t.ui().about.value3Title, body: () => this.t.ui().about.value3Body },
    { title: () => this.t.ui().about.value4Title, body: () => this.t.ui().about.value4Body },
  ];

  constructor(seo: SeoService) {
    seo.set(
      () => this.t.ui().about.metaTitle,
      () => this.t.ui().about.metaDesc
    );
  }
}
