import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslationService } from '../../core/translation.service';

const FORM_NAME = 'veloura-contact';

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

  protected submitted = signal(false);
  protected submitting = signal(false);
  protected submitFailed = signal(false);
  private attempted = signal(false);

  protected form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  invalid(control: string): boolean {
    const field = this.form.get(control);
    return !!field && field.invalid && (field.touched || this.attempted());
  }

  async submit(): Promise<void> {
    this.attempted.set(true);
    this.submitFailed.set(false);

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      const firstInvalid = Object.keys(this.form.controls).find((key) =>
        this.form.get(key)?.invalid
      );
      if (firstInvalid && typeof document !== 'undefined') {
        document.getElementById(firstInvalid)?.focus();
      }
      return;
    }

    this.submitting.set(true);
    const body = new URLSearchParams({
      'form-name': FORM_NAME,
      ...this.form.getRawValue(),
    });

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      if (!response.ok) throw new Error(`Form submission failed: ${response.status}`);

      this.submitted.set(true);
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: window.scrollY - 80, behavior: 'smooth' });
      }
    } catch {
      this.submitFailed.set(true);
    } finally {
      this.submitting.set(false);
    }
  }

  reset(): void {
    this.form.reset();
    this.attempted.set(false);
    this.submitFailed.set(false);
    this.submitted.set(false);
  }
}
