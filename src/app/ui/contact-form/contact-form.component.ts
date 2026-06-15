import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BUDGET_RANGES, CONTACT, SERVICES } from '../../core/content';
import { TranslationService } from '../../core/translation.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  protected t = inject(TranslationService);
  private fb = inject(FormBuilder);

  protected services = SERVICES;
  protected budgets = BUDGET_RANGES;
  protected submitted = signal(false);

  protected form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    company: [''],
    service: ['', [Validators.required]],
    budget: [''],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  get whatsappLink(): string {
    const number = CONTACT.whatsapp.replace(/[^\d]/g, '');
    const text = encodeURIComponent(
      this.t.lang() === 'ar'
        ? 'مرحباً فيلورا، أودّ مناقشة مشروع.'
        : "Hi Veloura, I'd like to discuss a project."
    );
    return `https://wa.me/${number}?text=${text}`;
  }

  invalid(control: string): boolean {
    const c = this.form.get(control);
    return !!c && c.invalid && (c.touched || this.attempted());
  }

  private attempted = signal(false);

  submit(): void {
    this.attempted.set(true);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      // Move focus to the first invalid field for accessibility.
      const firstInvalid = Object.keys(this.form.controls).find((k) =>
        this.form.get(k)?.invalid
      );
      if (firstInvalid) {
        document.getElementById(firstInvalid)?.focus();
      }
      return;
    }
    // Frontend-only: no backend wired up, so we simply confirm receipt.
    this.submitted.set(true);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: window.scrollY - 80, behavior: 'smooth' });
    }
  }

  reset(): void {
    this.form.reset();
    this.attempted.set(false);
    this.submitted.set(false);
  }
}
