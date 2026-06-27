import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslationService } from '../../core/translation.service';

const AUDIT_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbwcaPjai5s6F081ofKvOrSWdNbr3KtkTHGX7-AiZRGzs2YlpYTjqQhtFAhG-VLW9vWsAg/exec';
const FORM_SOURCE = 'Veloura Website - Strategic Audit Form';

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
    website: [''],
  });

  invalid(control: string): boolean {
    const field = this.form.get(control);
    return !!field && field.invalid && (field.touched || this.attempted());
  }

  async submit(): Promise<void> {
    if (this.form.controls.website.value.trim()) {
      return;
    }

    this.attempted.set(true);
    this.submitFailed.set(false);
    this.normalizeFields();

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
    const { name, email, message } = this.form.getRawValue();
    const payload = {
      fullName: name,
      email,
      message,
      source: FORM_SOURCE,
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
    };

    try {
      const response = await fetch(AUDIT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error(`Form submission failed: ${response.status}`);

      this.form.reset();
      this.attempted.set(false);
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

  private normalizeFields(): void {
    const { name, email, message } = this.form.getRawValue();
    this.form.patchValue({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    });
  }
}
