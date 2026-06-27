import { isPlatformBrowser } from '@angular/common';
import { computed, DOCUMENT, effect, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { htmlLocale, Lang, Localized, UI } from './i18n';
import { localizePath, splitLocalizedUrl } from './localized-routes';

const STORAGE_KEY = 'veloura-lang';

/**
 * Holds the active language as a signal, exposes the matching UI dictionary,
 * keeps <html lang/dir> in sync, and persists the choice to localStorage.
 */
@Injectable({ providedIn: 'root' })
export class TranslationService {
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  readonly lang = signal<Lang>(this.readInitial());

  /** Current UI dictionary — reactive; read in templates as `t.ui().nav.home`. */
  readonly ui = computed(() => UI[this.lang()]);

  /** 'rtl' for Arabic, otherwise 'ltr'. */
  readonly dir = computed<'rtl' | 'ltr'>(() => (this.lang() === 'ar' ? 'rtl' : 'ltr'));
  readonly locale = computed(() => htmlLocale(this.lang()));

  readonly isArabic = computed(() => this.lang() === 'ar');

  constructor() {
    this.syncFromUrl(this.router.url || this.currentDocumentPath());
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => this.syncFromUrl(e.urlAfterRedirects));

    // Reflect language to <html> and storage whenever it changes.
    effect(() => {
      const lang = this.lang();
      const root = this.document.documentElement;
      root.setAttribute('lang', htmlLocale(lang));
      root.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
      if (this.isBrowser) {
        try {
          this.document.defaultView?.localStorage?.setItem(STORAGE_KEY, lang);
        } catch {
          /* storage unavailable - ignore */
        }
      }
    });
  }

  setLang(lang: Lang): void {
    const { path } = splitLocalizedUrl(this.router.url);
    this.router.navigateByUrl(localizePath(lang, path));
  }

  toggle(): void {
    this.lang.update((l) => (l === 'en' ? 'ar' : 'en'));
  }

  /** Pick the active-language value from a {en, ar} pair. Reactive in templates. */
  pick(value: Localized): string {
    return value[this.lang()];
  }

  path(path: string): string {
    return localizePath(this.lang(), path);
  }

  altPath(lang: Lang, path?: string): string {
    const current = path ?? splitLocalizedUrl(this.router.url || '/').path;
    return localizePath(lang, current);
  }

  private syncFromUrl(url: string): void {
    const { lang } = splitLocalizedUrl(url);
    const routeLang = lang || splitLocalizedUrl(this.currentDocumentPath()).lang;
    if (routeLang && routeLang !== this.lang()) {
      this.lang.set(routeLang);
    }
  }

  private readInitial(): Lang {
    const routeLang =
      splitLocalizedUrl(this.router.url).lang || splitLocalizedUrl(this.currentDocumentPath()).lang;
    if (routeLang) return routeLang;

    if (this.isBrowser) {
      try {
        const stored = this.document.defaultView?.localStorage?.getItem(STORAGE_KEY);
        if (stored === 'en' || stored === 'ar') return stored;
      } catch {
        /* ignore */
      }
    }
    return 'en';
  }

  private currentDocumentPath(): string {
    try {
      const locationPath = this.document.location?.pathname;
      if (locationPath) return locationPath;
      return new URL(this.document.URL).pathname;
    } catch {
      return '/';
    }
  }
}
