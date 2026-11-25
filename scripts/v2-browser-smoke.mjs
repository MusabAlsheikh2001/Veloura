import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const origin = 'http://127.0.0.1:4250';
const out = path.resolve('v2-browser-evidence');
await mkdir(out, { recursive: true });
const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
const failures = [];

const cases = [
  ['home-en', '/', 1440, 900],
  ['services-en', '/services', 1440, 900],
  ['work-en', '/work', 1440, 900],
  ['about-en', '/about', 1440, 900],
  ['contact-en', '/contact', 1440, 900],
  ['home-ar', '/ar', 1440, 900],
  ['services-ar', '/ar/services', 1440, 900],
  ['work-ar', '/ar/work', 1440, 900],
  ['contact-ar', '/ar/contact', 1440, 900],
  ['home-mobile-en', '/', 390, 844],
  ['home-mobile-ar', '/ar', 390, 844],
  ['services-mobile-en', '/services', 390, 844],
  ['work-mobile-en', '/work', 390, 844],
  ['contact-mobile-ar', '/ar/contact', 390, 844],
];

try {
  for (const [name, route, width, height] of cases) {
    const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    const response = await page.goto(origin + route, { waitUntil: 'networkidle', timeout: 45_000 });
    if (!response?.ok()) failures.push(name + ': HTTP ' + (response?.status() ?? 'none'));
    await page.locator('h1').first().waitFor({ timeout: 15_000 });
    const direction = await page.locator('html').getAttribute('dir');
    if (direction !== (route.startsWith('/ar') ? 'rtl' : 'ltr')) failures.push(name + ': wrong dir=' + direction);
    const size = await page.evaluate(() => ({
      pageWidth: document.documentElement.scrollWidth,
      viewportWidth: document.documentElement.clientWidth,
    }));
    if (size.pageWidth > size.viewportWidth + 2) failures.push(name + ': horizontal overflow ' + JSON.stringify(size));
    if (errors.length) failures.push(name + ': page errors ' + errors.join('; '));
    await page.screenshot({ path: path.join(out, name + '.png'), fullPage: true, animations: 'disabled' });
    console.log('SCREENSHOT', name, route, width + 'x' + height, 'h1=' + (await page.locator('h1').first().innerText()).slice(0, 80));
    await page.close();
  }

  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(origin + '/', { waitUntil: 'networkidle' });
  const before = await page.locator('.v-lab__summary h2').innerText();
  await page.locator('.v-lab__tab').nth(1).click();
  // Angular signal updates can flush on a later microtask after the browser click.
  // Test the rendered state, not a synchronous DOM snapshot.
  try {
    await page.locator('.v-lab__stage.is-engineering').waitFor({ state: 'visible', timeout: 8_000 });
    await page.waitForFunction((text) => document.querySelector('.v-lab__summary h2')?.textContent?.trim() !== text, before, { timeout: 8_000 });
  } catch (error) {
    failures.push('Interactive lab did not update within 8s: ' + String(error));
  }
  const after = await page.locator('.v-lab__summary h2').innerText();
  if (before === after) failures.push('Interactive engineering lab did not change headline');
  await page.locator('.vs-header__nav a[href="/work"]').click();
  await page.waitForURL('**/work', { timeout: 12_000 });
  if (!(await page.locator('#work-title').count())) failures.push('Work navigation arrived without work page');
  await page.locator('.vs-header__language').click();
  await page.waitForURL('**/ar/work', { timeout: 12_000 });
  if (await page.locator('html').getAttribute('dir') !== 'rtl') failures.push('Language switch did not set RTL');
  console.log('INTERACTIONS', { before, after, route: page.url() });
  await page.close();

  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await mobile.goto(origin + '/', { waitUntil: 'networkidle' });
  await mobile.locator('.vs-header__menu').click();
  await mobile.locator('.vs-header__drawer a[href="/services"]').waitFor({ state: 'visible', timeout: 8_000 });
  await mobile.locator('.vs-header__drawer a[href="/services"]').click();
  await mobile.waitForURL('**/services', { timeout: 12_000 });
  if (!(await mobile.locator('#services-title').count())) failures.push('Mobile navigation did not reach services');
  await mobile.close();
} catch (error) {
  failures.push(error.stack || String(error));
} finally {
  await browser.close();
}
if (failures.length) {
  console.error('SMOKE FAILURES:\n' + failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log('PASS: all primary routes, browser interactions, mobile navigation, RTL and overflow checks');
}
