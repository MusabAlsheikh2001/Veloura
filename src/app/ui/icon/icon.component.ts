import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconName } from '../../core/content';

/**
 * Thin-line icon set used across services, process, and value cards.
 * Inherits color via currentColor and scales to its container.
 */
@Component({
  selector: 'app-icon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.4"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      @switch (name) {
        @case ('uiux') {
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 9h18M9 9v11" />
        }
        @case ('ads') {
          <path d="M4 9v6h3l8 4V5L7 9H4z" />
          <path d="M18 9a4 4 0 0 1 0 6" />
        }
        @case ('branding') {
          <path d="M12 3l8 6-8 12L4 9z" />
          <path d="M4 9h16M12 3v18" />
        }
        @case ('mockup') {
          <rect x="6" y="3" width="12" height="18" rx="2" />
          <path d="M10 6h4M9 18h6" />
        }
        @case ('whatsapp') {
          <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7A8.38 8.38 0 0 1 4 11.5 8.5 8.5 0 0 1 12.5 3 8.38 8.38 0 0 1 21 11.5z" />
        }
        @case ('wordpress') {
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
        }
        @case ('vibe') {
          <path d="M12 3l1.7 4.6L18.3 9l-4.6 1.4L12 15l-1.7-4.6L5.7 9l4.6-1.4z" />
          <path d="M18 14l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z" />
        }
        @case ('landing') {
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 8h18" />
          <circle cx="12" cy="14" r="3" />
        }
        @case ('seo') {
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" />
        }
        @case ('analysis') {
          <path d="M3 20h18" />
          <path d="M6 20v-5M11 20V7M16 20v-9" />
        }
        @case ('discover') {
          <circle cx="12" cy="12" r="9" />
          <path d="M15.5 8.5l-2.2 5.3-5.3 2.2 2.2-5.3z" />
        }
        @case ('position') {
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
        }
        @case ('design') {
          <path d="M4 20l4-1L19 8l-3-3L5 16z" />
          <path d="M14 7l3 3" />
        }
        @case ('launch') {
          <path d="M12 3c3 2.2 4.2 6 4.2 9.2L12 15l-4.2-2.8C7.8 9 9 5.2 12 3z" />
          <circle cx="12" cy="9" r="1.6" />
          <path d="M8 16l-2 4 4-2M16 16l2 4-4-2" />
        }
        @case ('clarity') {
          <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
          <circle cx="12" cy="12" r="3" />
        }
        @case ('presence') {
          <circle cx="12" cy="12" r="2" />
          <path d="M7.8 7.8a6 6 0 0 0 0 8.4M16.2 7.8a6 6 0 0 1 0 8.4M5 5a9 9 0 0 0 0 14M19 5a9 9 0 0 1 0 14" />
        }
        @case ('performance') {
          <path d="M3 17l5-5 4 4 8-8" />
          <path d="M17 8h4v4" />
        }
        @case ('social') {
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="3.6" />
          <circle cx="17.2" cy="6.8" r="1" />
        }
        @case ('video') {
          <rect x="3" y="5" width="18" height="14" rx="3" />
          <path d="M11 9.3l4 2.7-4 2.7z" />
        }
        @case ('paidads') {
          <circle cx="11" cy="13" r="7" />
          <circle cx="11" cy="13" r="3" />
          <path d="M15.6 8.4L21 3M21 3h-3.6M21 3v3.6" />
        }
        @case ('analytics') {
          <path d="M4 15a8 8 0 0 1 16 0" />
          <path d="M12 15l3.6-3" />
          <circle cx="12" cy="15" r="1.1" />
        }
        @case ('comms') {
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <path d="M9 8h6M9 12h6M9 16h4" />
        }
        @case ('automation') {
          <circle cx="6" cy="6" r="2.2" />
          <circle cx="18" cy="6" r="2.2" />
          <circle cx="12" cy="18" r="2.2" />
          <path d="M8 6h8M8 7.4l3 8.6M16 7.4l-3 8.6" />
        }
      }
    </svg>
  `,
  styles: [
    `:host { display: inline-flex; width: 100%; height: 100%; }
     svg { width: 100%; height: 100%; }`,
  ],
})
export class IconComponent {
  @Input({ required: true }) name!: IconName;
}
