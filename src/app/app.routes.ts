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
  { path: '', pathMatch: 'full', redirectTo: 'en' },
  {
    path: 'en',
    children: localizedRoutes,
  },
  {
    path: 'ar',
    children: localizedRoutes,
  },
  { path: 'about', pathMatch: 'full', redirectTo: 'en/about' },
  { path: 'services', pathMatch: 'full', redirectTo: 'en/services' },
  { path: 'brand-identity', pathMatch: 'full', redirectTo: 'en/services/brand-identity' },
  { path: 'ui-ux-design', pathMatch: 'full', redirectTo: 'en/services/ui-ux-design' },
  { path: 'website-development', pathMatch: 'full', redirectTo: 'en/services/website-development' },
  { path: 'landing-pages', pathMatch: 'full', redirectTo: 'en/services/landing-pages' },
  { path: 'campaign-creatives', pathMatch: 'full', redirectTo: 'en/services/ad-designs-campaign-creatives' },
  { path: 'seo-growth', pathMatch: 'full', redirectTo: 'en/services/basic-seo' },
  { path: 'services/:slug', redirectTo: 'en/services/:slug' },
  { path: 'industries', pathMatch: 'full', redirectTo: 'en/industries' },
  { path: 'industries/:slug', redirectTo: 'en/industries/:slug' },
  { path: 'locations', pathMatch: 'full', redirectTo: 'en/locations' },
  { path: 'locations/:slug', redirectTo: 'en/locations/:slug' },
  { path: 'blog', pathMatch: 'full', redirectTo: 'en/blog' },
  { path: 'blog/:slug', redirectTo: 'en/blog/:slug' },
  { path: 'contact', pathMatch: 'full', redirectTo: 'en/contact' },
  { path: 'privacy-policy', pathMatch: 'full', redirectTo: 'en/privacy-policy' },
  { path: 'terms-and-conditions', pathMatch: 'full', redirectTo: 'en/terms-and-conditions' },
  { path: 'faqs', pathMatch: 'full', redirectTo: 'en/faqs' },
  { path: '**', redirectTo: 'en' },
];
