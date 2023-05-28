import { AsyncPipe } from '@angular/common';
import { Component, ChangeDetectionStrategy, Input, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormGroupDirective, ValidationErrors } from '@angular/forms';
import { FORM_ERRORS } from './form.token';
import { BehaviorSubject, Subscription, distinctUntilChanged, merge } from 'rxjs';
import { inject } from '@angular/core';

@Component({
  standalone: true,
  selector: 'control-error',
  imports: [AsyncPipe],
  template: '<p class="mt-2 text-sm text-red-600" id="email-error">{{ message$ | async }}</p>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlErrorComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();
  private formGroupDirective = inject(FormGroupDirective);
  errors = inject(FORM_ERRORS);
  message$ = new BehaviorSubject<string>('');

  @Input() controlName!: string;
  @Input() customErrors?: ValidationErrors;

  ngOnInit(): void {
    if (this.formGroupDirective) {
      const control = this.formGroupDirective.control.get(this.controlName);

      if (control) {
        this.subscription = merge(control.valueChanges, this.formGroupDirective.ngSubmit)
          .pipe(distinctUntilChanged())
          .subscribe(() => {
            const controlErrors = control.errors;

            if (controlErrors) {
              const firstKey = Object.keys(controlErrors)[0];
              const getError = this.errors[firstKey];
              const text = this.customErrors?.[firstKey] || getError(controlErrors[firstKey]);

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
