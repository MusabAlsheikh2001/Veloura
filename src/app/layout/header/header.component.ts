import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  HostListener,
  inject,
  signal,
} from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';
import { SERVICES } from '../../core/content';
import { INDUSTRY_PAGES, LOCATION_PAGES, serviceSlugById } from '../../core/market-content';
import { TranslationService } from '../../core/translation.service';
import { LanguageToggleComponent } from '../../ui/language-toggle/language-toggle.component';
import { LogoComponent } from '../../ui/logo/logo.component';
import { ThemeToggleComponent } from '../../ui/theme-toggle/theme-toggle.component';

interface NavLink {
  path: string;
  key: 'home' | 'about' | 'blog' | 'contact';
  exact: boolean;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    LogoComponent,
    LanguageToggleComponent,
    ThemeToggleComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  protected t = inject(TranslationService);
  private router = inject(Router);
  private document = inject(DOCUMENT);

  protected scrolled = signal(false);
  protected menuOpen = signal(false);
  protected megaOpen = signal(false);

  protected links: NavLink[] = [
    { path: '/', key: 'home', exact: true },
    { path: '/about', key: 'about', exact: false },
    { path: '/blog', key: 'blog', exact: false },
    { path: '/contact', key: 'contact', exact: false },
  ];
  protected services = SERVICES.slice(0, 6);
  protected industries = INDUSTRY_PAGES.slice(0, 6);
  protected locations = LOCATION_PAGES.slice(0, 6);
  protected serviceSlug = serviceSlugById;

  constructor() {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        this.closeMenu();
        this.closeMega();
      });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set((this.document.defaultView?.scrollY ?? 0) > 12);
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
    this.setBodyLock(this.menuOpen());
  }

  closeMenu(): void {
    if (this.menuOpen()) {
      this.menuOpen.set(false);
      this.setBodyLock(false);
    }
  }

  openMega(): void {
    this.megaOpen.set(true);
  }

  closeMega(): void {
    this.megaOpen.set(false);
  }

  toggleMega(): void {
    this.megaOpen.update((open) => !open);
  }

  protected solutionsActive(): boolean {
    const path = this.router.url.split(/[?#]/)[0];
    return path.includes('/services') || path.includes('/industries') || path.includes('/locations');
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
    this.closeMega();
  }

  private setBodyLock(locked: boolean): void {
    this.document.body.style.overflow = locked ? 'hidden' : '';
  }
}
