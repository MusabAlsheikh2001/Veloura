import { Lang } from './i18n';

export const SUPPORTED_LANGS: readonly Lang[] = ['en', 'ar'];

export function isLang(value: string | null | undefined): value is Lang {
  return value === 'en' || value === 'ar';
}

export function splitLocalizedUrl(url: string): { lang: Lang | null; path: string } {
  const clean = (url || '/').split(/[?#]/)[0] || '/';
  const parts = clean.split('/').filter(Boolean);
  const first = parts[0];
  if (isLang(first)) {
    const rest = '/' + parts.slice(1).join('/');
    return { lang: first, path: rest === '/' ? '/' : rest.replace(/\/$/, '') };
  }
  return { lang: null, path: clean === '/' ? '/' : clean.replace(/\/$/, '') };
}

export function localizePath(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : '/' + path;
  const stripped = splitLocalizedUrl(clean).path;
  return stripped === '/' ? `/${lang}` : `/${lang}${stripped}`;
}

export function pathWithoutTrailingSlash(path: string): string {
  if (path === '/') return path;
  return path.replace(/\/$/, '');
}
