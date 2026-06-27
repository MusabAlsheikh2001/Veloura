import { DOCUMENT, effect, inject, Injectable, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { htmlLocale, openGraphLocale } from './i18n';
import { localizePath, splitLocalizedUrl, SUPPORTED_LANGS } from './localized-routes';
import { absUrl, SITE } from './site.config';
import { TranslationService } from './translation.service';

type StringGetter = () => string;

interface SeoMetaOptions {
  type?: 'website' | 'article';
  image?: StringGetter;
  /** Optional canonical URL override. Accepts an absolute URL or site-relative path. */
  canonicalUrl?: StringGetter;
}

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
  private readonly options = signal<SeoMetaOptions>({});
  private readonly t = inject(TranslationService);
  private readonly document = inject(DOCUMENT);

  constructor(private title: Title, private meta: Meta, private router: Router) {
    // Title + description + OG/Twitter text + locale — reactive to language.
    effect(() => {
      const titleFn = this.titleFn();
      const descFn = this.descFn();
      const options = this.options();
      if (titleFn) {
        const value = this.fitTitle(titleFn());
        this.title.setTitle(value);
        this.meta.updateTag({ property: 'og:title', content: value });
        this.meta.updateTag({ name: 'twitter:title', content: value });
      }
      if (descFn) {
        const value = this.fitDescription(descFn());
        this.meta.updateTag({ name: 'description', content: value });
        this.meta.updateTag({ property: 'og:description', content: value });
        this.meta.updateTag({ name: 'twitter:description', content: value });
      }
      this.meta.updateTag({
        property: 'og:locale',
        content: openGraphLocale(this.t.lang()),
      });
      this.meta.updateTag({
        property: 'og:locale:alternate',
        content: openGraphLocale(this.t.isArabic() ? 'en' : 'ar'),
      });
      this.meta.updateTag({ property: 'og:type', content: options.type || 'website' });
      const image = options.image?.() || absUrl(SITE.ogImage);
      this.meta.updateTag({ property: 'og:image', content: image });
      this.meta.updateTag({ name: 'twitter:image', content: image });
      this.setCanonical(options.canonicalUrl?.() || this.currentUrl());
    });

    // Canonical + og:url follow the active route. Clear any page-level JSON-LD
    // on navigation start so a previous article's data never leaks to the next page.
    this.router.events
      .pipe(filter((e) => e instanceof NavigationStart))
      .subscribe(() => this.clearJsonLd());
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => this.setCanonical(this.options().canonicalUrl?.() || e.urlAfterRedirects));
  }

  /** Set the reactive title + description for the current page. */
  set(title: StringGetter, description: StringGetter, options: SeoMetaOptions = {}): void {
    this.titleFn.set(title);
    this.descFn.set(description);
    this.options.set(options);
    this.setCanonical(options.canonicalUrl?.() || this.currentUrl());
  }

  /** Replace the page-level JSON-LD block (e.g. BlogPosting on an article). */
  setJsonLd(data: unknown): void {
    let el = this.document.getElementById('ld-page') as HTMLScriptElement | null;
    if (!el) {
      el = this.document.createElement('script');
      el.type = 'application/ld+json';
      el.id = 'ld-page';
      this.document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(data);
  }

  private clearJsonLd(): void {
    this.document.getElementById('ld-page')?.remove();
  }

  private setCanonical(url: string): void {
    let path = url.split(/[?#]/)[0] || '/';
    let explicitHref: string | null = null;
    if (/^https?:\/\//i.test(url)) {
      try {
        const parsed = new URL(url);
        path = parsed.pathname || '/';
        explicitHref = `${parsed.origin}${parsed.pathname}${parsed.search}`;
      } catch {
        explicitHref = null;
      }
    }
    const split = splitLocalizedUrl(path);
    const lang = split.lang || this.t.lang();
    const localizedPath = localizePath(lang, split.path);
    const href = explicitHref || absUrl(localizedPath);
    let link = this.document.querySelector<HTMLLinkElement>("link[rel='canonical']");
    if (!link) {
      link = this.document.createElement('link');
      link.rel = 'canonical';
      this.document.head.appendChild(link);
    }
    link.href = href;
    this.meta.updateTag({ property: 'og:url', content: href });

    for (const code of SUPPORTED_LANGS) {
      const alternateHref = absUrl(localizePath(code, split.path));
      const hrefLang = htmlLocale(code);
      let alt = this.document.querySelector<HTMLLinkElement>(`link[rel='alternate'][hreflang='${hrefLang}']`);
      if (!alt) {
        alt = this.document.createElement('link');
        alt.rel = 'alternate';
        alt.hreflang = hrefLang;
        this.document.head.appendChild(alt);
      }
      alt.href = alternateHref;
    }

    let xDefault = this.document.querySelector<HTMLLinkElement>("link[rel='alternate'][hreflang='x-default']");
    if (!xDefault) {
      xDefault = this.document.createElement('link');
      xDefault.rel = 'alternate';
      xDefault.hreflang = 'x-default';
      this.document.head.appendChild(xDefault);
    }
    xDefault.href = absUrl(localizePath('en', split.path));
  }

  private currentUrl(): string {
    const routerUrl = this.router.url;
    if (routerUrl && routerUrl !== '/') return routerUrl;
    const location = this.document.location;
    return `${location.pathname || '/'}${location.search || ''}`;
  }

  /** Keep titles inside the requested search-snippet range without losing the page topic. */
  private fitTitle(input: string): string {
    const value = input.trim();
    if (value.length >= 50 && value.length <= 60) return value;

    const base = value.replace(/\s*(?:\||—)\s*Veloura\s*$/i, '').trim();
    const suffixes = this.t.isArabic()
      ? [
          ' | Veloura',
          ' | Veloura للأعمال',
          ' | Veloura استوديو رقمي',
          ' | Veloura استوديو نمو رقمي',
          ' | Veloura للأعمال الخليجية',
          ' | Veloura استوديو رقمي للأعمال الخليجية',
        ]
      : [
          ' | Veloura',
          ' | Veloura Studio',
          ' | Veloura Growth Studio',
          ' | Veloura Digital Studio',
          ' | Veloura Digital Growth Studio',
          ' | Veloura GCC Digital Growth Studio',
        ];

    if (value.length < 50) {
      const candidates = suffixes
        .map((suffix) => `${base}${suffix}`)
        .filter((candidate) => candidate.length >= 50 && candidate.length <= 60)
        .sort((a, b) => Math.abs(a.length - 55) - Math.abs(b.length - 55));
      return candidates[0] || value;
    }

    if (base.length >= 50 && base.length <= 60) return base;

    const suffix = suffixes[0];
    const maxBaseLength = 60 - suffix.length;
    const clipped = this.atWordBoundary(base, maxBaseLength, 50 - suffix.length);
    return `${clipped}${suffix}`;
  }

  /** Preserve authored copy while fitting the requested 150–160 character description band. */
  private fitDescription(input: string): string {
    const value = input.trim();
    if (value.length >= 150 && value.length <= 160) return value;

    if (value.length > 160) {
      const clipped = this.atWordBoundary(value, 159, 149).replace(/[,:;\-–—]+$/, '');
      return `${clipped}…`;
    }

    const additions = this.t.isArabic()
      ? [
          ' تعرّف على أفكار عملية لبناء علامة أوضح وموقع أقوى ونمو مستدام للأعمال في الخليج.',
          ' نربط الاستراتيجية بالتصميم والتنفيذ.',
          ' بخطة واضحة وتنفيذ مرن عن بُعد.',
          ' ابدأ بنطاق عمل مخصص لهدفك.',
          ' للعملاء في الخليج والعالم.',
          ' مصممة للأعمال الخليجية.',
          ' تواصل لمناقشة مشروعك.',
          ' تعرّف على التفاصيل.',
          ' اكتشف المزيد.',
          ' اعرف أكثر.',
        ]
      : [
          ' Ideas for clearer brands, stronger websites, and focused business growth.',
          ' Designed for clarity, trust, and stronger conversion.',
          ' Every scope is tailored to the business goal.',
          ' Delivered remotely across the GCC and beyond.',
          ' Built for GCC and global brands.',
          ' Start with a strategic audit.',
          ' Request a focused scope.',
          ' Made for GCC brands.',
          ' See the full approach.',
          ' Plan your next step.',
          ' Built for growth.',
          ' Explore the work.',
          ' See the details.',
          ' Learn more.',
          ' Learn why.',
        ];

    const result = this.findDescriptionFit(value, additions, 0, new Set<number>());
    return result || value;
  }

  private findDescriptionFit(
    value: string,
    additions: string[],
    start: number,
    used: Set<number>
  ): string | null {
    if (value.length >= 150 && value.length <= 160) return value;
    if (value.length > 160 || used.size === 4) return null;

    for (let index = start; index < additions.length; index++) {
      if (used.has(index)) continue;
      const nextUsed = new Set(used).add(index);
      const match = this.findDescriptionFit(value + additions[index], additions, index + 1, nextUsed);
      if (match) return match;
    }
    return null;
  }

  private atWordBoundary(value: string, maxLength: number, minLength: number): string {
    const slice = value.slice(0, maxLength).trimEnd();
    const boundary = slice.lastIndexOf(' ');
    return boundary >= minLength ? slice.slice(0, boundary).trimEnd() : slice;
  }
}
