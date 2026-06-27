import { Lang } from './i18n';

export const SUPPORTED_LANGS: readonly Lang[] = ['en', 'ar'];

export function isLang(value: string | null | undefined): value is Lang {
  return value === 'en' || value === 'ar';
}

export function splitLocalizedUrl(url: string): { lang: Lang; path: string } {
  const clean = (url || '/').split(/[?#]/)[0] || '/';
  const parts = clean.split('/').filter(Boolean);
  const first = parts[0];
  if (first === 'ar') {
    const rest = '/' + parts.slice(1).join('/');
    return { lang: 'ar', path: rest === '/' ? '/' : rest.replace(/\/$/, '') };
  }
  if (first === 'en') {
    const rest = '/' + parts.slice(1).join('/');
    return { lang: 'en', path: rest === '/' ? '/' : rest.replace(/\/$/, '') };
  }
  return { lang: 'en', path: clean === '/' ? '/' : clean.replace(/\/$/, '') };
}

export function localizePath(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : '/' + path;
  const stripped = splitLocalizedUrl(clean).path;
  if (lang === 'ar') {
    return stripped === '/' ? '/ar' : `/ar${stripped}`;
  }
  return stripped;
}

export function pathWithoutTrailingSlash(path: string): string {
  if (path === '/') return path;
  return path.replace(/\/$/, '');
}
