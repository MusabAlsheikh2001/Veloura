import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  Renderer2,
} from '@angular/core';

/**
 * Fade-and-rise an element into view as it enters the viewport.
 * Usage: <div appReveal>…</div> or <div [appReveal]="120"> (delay in ms).
 * Falls back to instantly visible when reduced motion is requested or
 * IntersectionObserver is unavailable.
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  /** Stagger delay in milliseconds. */
  @Input() appReveal: number | '' = 0;

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const node = this.el.nativeElement;
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    this.renderer.addClass(node, 'reveal');

    const delay = Number(this.appReveal) || 0;
    if (delay > 0) {
      this.renderer.setStyle(node, '--reveal-delay', `${delay}ms`);
    }

    if (reduced || typeof IntersectionObserver === 'undefined') {
      this.renderer.addClass(node, 'is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.renderer.addClass(node, 'is-visible');
            this.observer?.unobserve(node);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
