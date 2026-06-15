import { computed, effect, Injectable, signal } from '@angular/core';
import { Lang, Localized, UI } from './i18n';

const STORAGE_KEY = 'veloura-lang';

/**
 * Holds the active language as a signal, exposes the matching UI dictionary,
 * keeps <html lang/dir> in sync, and persists the choice to localStorage.
 */
@Injectable({ providedIn: 'root' })
export class TranslationService {
  readonly lang = signal<Lang>(this.readInitial());

  /** Current UI dictionary — reactive; read in templates as `t.ui().nav.home`. */
  readonly ui = computed(() => UI[this.lang()]);

  /** 'rtl' for Arabic, otherwise 'ltr'. */
  readonly dir = computed<'rtl' | 'ltr'>(() => (this.lang() === 'ar' ? 'rtl' : 'ltr'));

  readonly isArabic = computed(() => this.lang() === 'ar');

  constructor() {
    // Reflect language to <html> and storage whenever it changes.
    effect(() => {
      const lang = this.lang();
      if (typeof document !== 'undefined') {
        const root = document.documentElement;
        root.setAttribute('lang', lang);
        root.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
      }
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch {
        /* storage unavailable — ignore */
      }
    });
  }

  setLang(lang: Lang): void {
    this.lang.set(lang);
  }

  toggle(): void {
    this.lang.update((l) => (l === 'en' ? 'ar' : 'en'));
  }

  /** Pick the active-language value from a {en, ar} pair. Reactive in templates. */
  pick(value: Localized): string {
    return value[this.lang()];
  }

  private readInitial(): Lang {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'en' || stored === 'ar') return stored;
    } catch {
      /* ignore */
    }
    return 'en';
  }
}
