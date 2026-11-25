import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../core/translation.service';
import { CONTACT } from '../../core/content';

@Component({
  selector:'app-footer',
  standalone:true,
  imports:[RouterLink],
  templateUrl:'./footer.component.html',
  styleUrl:'./footer.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  protected readonly t=inject(TranslationService);
  protected readonly email=CONTACT.email;
  protected readonly year=new Date().getFullYear();
  protected text(en:string,ar:string):string{return this.t.isArabic()?ar:en;}
  protected readonly links=[
    {path:'/',en:'Home',ar:'الرئيسية'},
    {path:'/services',en:'Services',ar:'الخدمات'},
    {path:'/work',en:'Selected work',ar:'أعمالنا'},
    {path:'/about',en:'About',ar:'من نحن'},
    {path:'/contact',en:'Contact',ar:'تواصل معنا'},
  ];
}