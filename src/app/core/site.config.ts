/* ============================================================
   Veloura — Site-wide constants for SEO / metadata.
   Single source of truth for absolute URLs (canonical, OG, sitemap).
   ⚠️ Change `url` here when the production domain is confirmed.
   ============================================================ */

export const SITE = {
  /** Production origin, no trailing slash. Used for canonical + OG + sitemap. */
  url: 'https://veloura-marketing.com',
  name: 'Veloura',
  /** Default share image (1200×630). Absolute URL is derived from `url`. */
  ogImage: '/img/og-image.jpg',
} as const;

/** Build an absolute URL from a site-relative path. */
export function absUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return SITE.url + (path.startsWith('/') ? path : '/' + path);
}
