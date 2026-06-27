import { Routes } from '@angular/router';

const localizedRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Veloura — Premium Digital Growth Studio',
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
    title: 'About — Veloura',
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./pages/services/services.component').then((m) => m.ServicesComponent),
    title: 'Services — Veloura',
  },
  {
    path: 'services/:slug',
    loadComponent: () =>
      import('./pages/service-detail/service-detail.component').then(
        (m) => m.ServiceDetailComponent
      ),
    title: 'Service — Veloura',
  },
  {
    path: 'industries',
    loadComponent: () =>
      import('./pages/industries/industries.component').then((m) => m.IndustriesComponent),
    title: 'Industries — Veloura',
  },
  {
    path: 'industries/:slug',
    loadComponent: () =>
      import('./pages/industry-detail/industry-detail.component').then(
        (m) => m.IndustryDetailComponent
      ),
    title: 'Industry — Veloura',
  },
  {
    path: 'locations',
    loadComponent: () =>
      import('./pages/locations/locations.component').then((m) => m.LocationsComponent),
    title: 'Locations — Veloura',
  },
  {
    path: 'locations/:slug',
    loadComponent: () =>
      import('./pages/location-detail/location-detail.component').then(
        (m) => m.LocationDetailComponent
      ),
    title: 'Location — Veloura',
  },
  {
    path: 'blog',
    loadComponent: () =>
      import('./pages/blog/blog.component').then((m) => m.BlogComponent),
    title: 'Blog — Veloura',
  },
  {
    path: 'blog/:slug',
    loadComponent: () =>
      import('./pages/blog-detail/blog-detail.component').then(
        (m) => m.BlogDetailComponent
      ),
    title: 'Article — Veloura',
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then((m) => m.ContactComponent),
    title: 'Contact — Veloura',
  },
  {
    path: 'privacy-policy',
    loadComponent: () =>
      import('./pages/legal/legal-page.component').then((m) => m.LegalPageComponent),
    data: { legalPage: 'privacy-policy' },
    title: 'Privacy Policy — Veloura',
  },
  {
    path: 'terms-and-conditions',
    loadComponent: () =>
      import('./pages/legal/legal-page.component').then((m) => m.LegalPageComponent),
    data: { legalPage: 'terms-and-conditions' },
    title: 'Terms & Conditions — Veloura',
  },
  {
    path: 'faqs',
    loadComponent: () =>
      import('./pages/legal/legal-page.component').then((m) => m.LegalPageComponent),
    data: { legalPage: 'faqs' },
    title: 'FAQs — Veloura',
  },
];

export const routes: Routes = [
  { path: 'en', pathMatch: 'full', redirectTo: '' },
  { path: 'en/about', pathMatch: 'full', redirectTo: 'about' },
  { path: 'en/services', pathMatch: 'full', redirectTo: 'services' },
  { path: 'en/services/:slug', redirectTo: 'services/:slug' },
  { path: 'en/industries', pathMatch: 'full', redirectTo: 'industries' },
  { path: 'en/industries/:slug', redirectTo: 'industries/:slug' },
  { path: 'en/locations', pathMatch: 'full', redirectTo: 'locations' },
  { path: 'en/locations/:slug', redirectTo: 'locations/:slug' },
  { path: 'en/blog', pathMatch: 'full', redirectTo: 'blog' },
  { path: 'en/blog/:slug', redirectTo: 'blog/:slug' },
  { path: 'en/contact', pathMatch: 'full', redirectTo: 'contact' },
  { path: 'en/privacy-policy', pathMatch: 'full', redirectTo: 'privacy-policy' },
  { path: 'en/terms-and-conditions', pathMatch: 'full', redirectTo: 'terms-and-conditions' },
  { path: 'en/faqs', pathMatch: 'full', redirectTo: 'faqs' },
  {
    path: 'ar',
    children: localizedRoutes,
  },
  { path: 'brand-identity', pathMatch: 'full', redirectTo: 'services/brand-identity' },
  { path: 'ui-ux-design', pathMatch: 'full', redirectTo: 'services/ui-ux-design' },
  { path: 'website-development', pathMatch: 'full', redirectTo: 'services/website-development' },
  { path: 'landing-pages', pathMatch: 'full', redirectTo: 'services/landing-pages' },
  { path: 'campaign-creatives', pathMatch: 'full', redirectTo: 'services/ad-designs-campaign-creatives' },
  { path: 'seo-growth', pathMatch: 'full', redirectTo: 'services/basic-seo' },
  ...localizedRoutes,
  { path: '**', redirectTo: '' },
];
