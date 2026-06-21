import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const projectRoot = new URL('..', import.meta.url).pathname;
const browserRoot = join(projectRoot, 'dist/veloura/browser');
const sitemapPath = join(projectRoot, 'public/sitemap.xml');

if (!existsSync(browserRoot)) {
  console.error('SEO audit needs a production build. Run `npm run build` first.');
  process.exit(1);
}

const decode = (value = '') => value
  .replaceAll('&amp;', '&')
  .replaceAll('&quot;', '"')
  .replaceAll('&#39;', "'")
  .replaceAll('&lt;', '<')
  .replaceAll('&gt;', '>');

const attr = (html, selector, attribute = 'content') => {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = html.match(new RegExp(`<meta\\s+${escaped}\\s+${attribute}="([^"]*)"`, 'i'));
  return decode(match?.[1]);
};

const sitemap = readFileSync(sitemapPath, 'utf8');
const urls = [...sitemap.matchAll(/<loc>(https:\/\/veloura-marketing\.com([^<]*))<\/loc>/g)]
  .map((match) => ({ canonical: match[1], route: match[2] || '/' }));

const errors = [];
const recommendations = [];

for (const { canonical, route } of urls) {
  const htmlPath = join(browserRoot, route.replace(/^\//, ''), 'index.html');
  if (!existsSync(htmlPath)) {
    errors.push(`${route}: sitemap URL was not prerendered`);
    continue;
  }

  const html = readFileSync(htmlPath, 'utf8');
  const title = decode(html.match(/<title>([^<]*)<\/title>/i)?.[1]);
  const description = attr(html, 'name="description"');
  const canonicalHref = decode(html.match(/<link\s+rel="canonical"\s+href="([^"]*)"/i)?.[1]);
  const ogTitle = attr(html, 'property="og:title"');
  const ogDescription = attr(html, 'property="og:description"');
  const ogUrl = attr(html, 'property="og:url"');
  const ogImage = attr(html, 'property="og:image"');

  if (!title) errors.push(`${route}: missing title`);
  if (!description) errors.push(`${route}: missing meta description`);
  if (canonicalHref !== canonical) errors.push(`${route}: canonical is ${canonicalHref || 'missing'}`);
  if (ogTitle !== title) errors.push(`${route}: Open Graph title does not match the page title`);
  if (ogDescription !== description) errors.push(`${route}: Open Graph description does not match`);
  if (ogUrl !== canonical) errors.push(`${route}: og:url is ${ogUrl || 'missing'}`);
  if (!ogImage?.startsWith('https://')) errors.push(`${route}: Open Graph image must be absolute HTTPS`);

  if (title.length < 50 || title.length > 60) {
    recommendations.push(`${route}: title is ${title.length} characters (target 50–60)`);
  }
  if (description.length < 150 || description.length > 160) {
    recommendations.push(`${route}: description is ${description.length} characters (target 150–160)`);
  }

  for (const lang of ['en', 'ar', 'x-default']) {
    const expression = new RegExp(`<link\\s+rel="alternate"\\s+hreflang="${lang}"\\s+href="https:\\/\\/veloura-marketing\\.com\\/`, 'i');
    if (!expression.test(html)) errors.push(`${route}: missing ${lang} hreflang`);
  }

  const jsonLdBlocks = [...html.matchAll(/<script\s+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
  const types = new Set();
  for (const block of jsonLdBlocks) {
    try {
      const data = JSON.parse(block[1]);
      const visit = (value) => {
        if (!value || typeof value !== 'object') return;
        if (typeof value['@type'] === 'string') types.add(value['@type']);
        Object.values(value).forEach(visit);
      };
      visit(data);
    } catch {
      errors.push(`${route}: invalid JSON-LD`);
    }
  }

  for (const type of ['Organization', 'WebSite', 'WebPage', 'BreadcrumbList']) {
    if (!types.has(type)) errors.push(`${route}: missing ${type} structured data`);
  }
  if (/^\/(en|ar)\/(services|industries|locations|blog)$/.test(route) && !types.has('ItemList')) {
    errors.push(`${route}: missing ItemList structured data`);
  }
}

console.log(`SEO audit checked ${urls.length} sitemap URLs.`);
console.log(`Technical errors: ${errors.length}`);
errors.forEach((message) => console.error(`  ERROR ${message}`));
console.log(`Metadata length recommendations: ${recommendations.length}`);
recommendations.forEach((message) => console.log(`  NOTE  ${message}`));

process.exit(errors.length ? 1 : 0);
