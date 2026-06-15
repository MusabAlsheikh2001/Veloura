import { effect, inject, Injectable, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { absUrl, SITE } from './site.config';
import { TranslationService } from './translation.service';

type StringGetter = () => string;

/**
 * Centralizes per-page SEO: title, meta description, Open Graph / Twitter text,
 * canonical + og:url (tracked from the router), og:locale (tracked from the
 * language signal), and an optional page-level JSON-LD block.
 *
 * Pages pass getter functions so the text stays reactive to the language signal.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly titleFn = signal<StringGetter | null>(null);
  private readonly descFn = signal<StringGetter | null>(null);
  private readonly t = inject(TranslationService);

  constructor(private title: Title, private meta: Meta, private router: Router) {
    // Title + description + OG/Twitter text + locale — reactive to language.
    effect(() => {
      const titleFn = this.titleFn();
      const descFn = this.descFn();
      if (titleFn) {
        const value = titleFn();
        this.title.setTitle(value);
        this.meta.updateTag({ property: 'og:title', content: value });
        this.meta.updateTag({ name: 'twitter:title', content: value });
      }
      if (descFn) {
        const value = descFn();
        this.meta.updateTag({ name: 'description', content: value });
        this.meta.updateTag({ property: 'og:description', content: value });
        this.meta.updateTag({ name: 'twitter:description', content: value });
      }
      this.meta.updateTag({
        property: 'og:locale',
        content: this.t.isArabic() ? 'ar_AR' : 'en_US',
      });
    });

    // Canonical + og:url follow the active route. Clear any page-level JSON-LD
    // on navigation start so a previous article's data never leaks to the next page.
    this.router.events
      .pipe(filter((e) => e instanceof NavigationStart))
      .subscribe(() => this.clearJsonLd());
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => this.setCanonical(e.urlAfterRedirects));
  }

  /** Set the reactive title + description for the current page. */
  set(title: StringGetter, description: StringGetter): void {
    this.titleFn.set(title);
    this.descFn.set(description);
  }

  /** Replace the page-level JSON-LD block (e.g. BlogPosting on an article). */
  setJsonLd(data: unknown): void {
    if (typeof document === 'undefined') return;
    let el = document.getElementById('ld-page') as HTMLScriptElement | null;
    if (!el) {
      el = document.createElement('script');
      el.type = 'application/ld+json';
      el.id = 'ld-page';
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(data);
  }

  private clearJsonLd(): void {
    if (typeof document === 'undefined') return;
    document.getElementById('ld-page')?.remove();
  }

  private setCanonical(url: string): void {
    if (typeof document === 'undefined') return;
    const path = url.split(/[?#]/)[0] || '/';
    const href = absUrl(path);
    let link = document.querySelector<HTMLLinkElement>("link[rel='canonical']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = href;
    this.meta.updateTag({ property: 'og:url', content: href });
  }
}
