import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
} from '@angular/core';

/**
 * Counts a number up from zero when it first scrolls into view.
 *
 * Progressive enhancement: the target value lives as the element's own text
 * (e.g. `10+`, `100%`, `2`), so with no JS — or with reduced motion — the real
 * figure is shown immediately. Only the prefix/suffix around the first number
 * are preserved; the digits animate.
 */
@Directive({
  selector: '[appCountUp]',
  standalone: true,
})
export class CountUpDirective implements AfterViewInit, OnDestroy {
  /** Animation length in ms. */
  @Input() duration = 1500;

  private observer?: IntersectionObserver;
  private frame?: number;
  private started = false;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const node = this.el.nativeElement;
    const raw = (node.textContent ?? '').trim();
    const match = raw.match(/-?\d[\d,]*\.?\d*/);
    if (!match) return;

    const numStr = match[0];
    const target = parseFloat(numStr.replace(/,/g, ''));
    if (!isFinite(target)) return;

    const prefix = raw.slice(0, match.index);
    const suffix = raw.slice(match.index! + numStr.length);
    const decimals = (numStr.split('.')[1] ?? '').length;

    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduced || typeof IntersectionObserver === 'undefined') return;

    node.textContent = `${prefix}0${suffix}`;

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !this.started) {
            this.started = true;
            this.run(node, target, prefix, suffix, decimals);
            this.observer?.disconnect();
          }
        }
      },
      { threshold: 0.4 }
    );
    this.observer.observe(node);
  }

  private run(
    node: HTMLElement,
    target: number,
    prefix: string,
    suffix: string,
    decimals: number
  ): void {
    const start = performance.now();
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = (now: number) => {
      const p = Math.min((now - start) / this.duration, 1);
      const value = target * easeOutCubic(p);
      node.textContent = `${prefix}${value.toFixed(decimals)}${suffix}`;
      if (p < 1) {
        this.frame = requestAnimationFrame(tick);
      } else {
        node.textContent = `${prefix}${target.toFixed(decimals)}${suffix}`;
      }
    };
    this.frame = requestAnimationFrame(tick);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.frame) cancelAnimationFrame(this.frame);
  }
}
