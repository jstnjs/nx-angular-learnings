import { AsyncPipe } from '@angular/common';
import { Component, ChangeDetectionStrategy, Input, OnInit, Inject, OnDestroy, Optional } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { FORM_ERRORS } from './form.token';
import { BehaviorSubject, Subscription, merge } from 'rxjs';

@Component({
  standalone: true,
  selector: 'jv-error',
  imports: [AsyncPipe],
  template: '<p class="mt-2 text-sm text-red-600" id="email-error">{{ message$ | async }}</p>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();
  message$ = new BehaviorSubject<string>('');

  @Input() controlName!: string;

  constructor(@Inject(FORM_ERRORS) private errors: any, @Optional() private formGroupDirective: FormGroupDirective) {}

  ngOnInit(): void {
    // Add accessibility
    // Add localization

    if (this.formGroupDirective) {
      const control = this.formGroupDirective.control.get(this.controlName);

      if (control) {
        this.subscription = merge(control.valueChanges, this.formGroupDirective.ngSubmit).subscribe(() => {
          const controlErrors = control.errors;

          if (controlErrors) {
            const firstKey = Object.keys(controlErrors)[0];
            const getError = this.errors[firstKey];
            const text = getError(controlErrors[firstKey]);

            this.setError(text);
          } else {
            this.setError('');
          }
        });
      } else {
        const message = this.controlName
          ? `Control "${this.controlName}" not found in the form group.`
          : `Input controlName is required`;
        console.error(message);
      }
    } else {
      console.error(`ErrorComponent must be used within a FormGroupDirective.`);
    }
  }

  setError(text: string) {
    this.message$.next(text);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
