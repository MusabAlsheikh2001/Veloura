import { Routes } from '@angular/router';

const localizedRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Veloura — Marketing & Digital Growth',
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
  { path: 'services/:slug', redirectTo: 'en/services/:slug' },
  { path: 'industries', pathMatch: 'full', redirectTo: 'en/industries' },
  { path: 'industries/:slug', redirectTo: 'en/industries/:slug' },
  { path: 'locations', pathMatch: 'full', redirectTo: 'en/locations' },
  { path: 'locations/:slug', redirectTo: 'en/locations/:slug' },
  { path: 'blog', pathMatch: 'full', redirectTo: 'en/blog' },
  { path: 'blog/:slug', redirectTo: 'en/blog/:slug' },
  { path: 'contact', pathMatch: 'full', redirectTo: 'en/contact' },
  { path: '**', redirectTo: 'en' },
];
