import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  inject,
  signal,
} from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';
import { TranslationService } from '../../core/translation.service';
import { LanguageToggleComponent } from '../../ui/language-toggle/language-toggle.component';
import { LogoComponent } from '../../ui/logo/logo.component';
import { ThemeToggleComponent } from '../../ui/theme-toggle/theme-toggle.component';

interface NavLink {
  path: string;
  key: 'home' | 'about' | 'services' | 'blog' | 'contact';
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

  protected scrolled = signal(false);
  protected menuOpen = signal(false);

  protected links: NavLink[] = [
    { path: '/', key: 'home', exact: true },
    { path: '/about', key: 'about', exact: false },
    { path: '/services', key: 'services', exact: false },
    { path: '/blog', key: 'blog', exact: false },
    { path: '/contact', key: 'contact', exact: false },
  ];

  constructor() {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => this.closeMenu());
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 12);
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

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }

  private setBodyLock(locked: boolean): void {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = locked ? 'hidden' : '';
    }
  }
}
