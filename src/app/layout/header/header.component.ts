import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { TranslationService } from '../../core/translation.service';
import { LogoComponent } from '../../ui/logo/logo.component';

@Component({
  selector:'app-header',
  standalone:true,
  imports:[RouterLink,RouterLinkActive,LogoComponent],
  templateUrl:'./header.component.html',
  styleUrl:'./header.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  protected readonly t = inject(TranslationService);
  protected readonly menuOpen = signal(false);
  protected readonly links = [
    {path:'/',en:'Home',ar:'الرئيسية',exact:true},
    {path:'/services',en:'Services',ar:'الخدمات',exact:true},
    {path:'/work',en:'Work',ar:'أعمالنا',exact:true},
    {path:'/about',en:'About',ar:'من نحن',exact:true},
    {path:'/contact',en:'Contact',ar:'تواصل معنا',exact:true},
  ];
  constructor() {
    inject(Router).events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => this.menuOpen.set(false));
  }
  protected text(en:string,ar:string):string { return this.t.isArabic()?ar:en; }
  protected toggleMenu():void { this.menuOpen.update(value => !value); }
  protected changeLanguage():void { this.t.setLang(this.t.isArabic()?'en':'ar'); this.menuOpen.set(false); }
  @HostListener('document:keydown.escape')
  protected escape():void { this.menuOpen.set(false); }
}
