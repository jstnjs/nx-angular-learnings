import { AsyncPipe, JsonPipe } from '@angular/common';
import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ChangeDetectorRef,
  OnInit,
  Inject,
  OnDestroy,
  Optional,
} from '@angular/core';
import { FormControl, FormGroupDirective, NgControl, ValidationErrors } from '@angular/forms';
import { FORM_ERRORS } from './form.token';
import { BehaviorSubject, Subscription } from 'rxjs';

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

  constructor(
    @Inject(FORM_ERRORS) private errors: any,
    private cdr: ChangeDetectorRef,
    @Optional() private formGroupDirective: FormGroupDirective,
  ) {}

  ngOnInit(): void {
    console.log(this.formGroupDirective);
    // Add error handling. Unknown keys?
    // Add accessibility
    // Add localization

    if (this.formGroupDirective) {
      const control = this.formGroupDirective.control.get(this.controlName);

      if (control) {
        this.subscription = control.valueChanges?.subscribe(() => {
          const controlErrors = control.errors;

          if (controlErrors) {
            console.log('controlErrors', controlErrors);
            const firstKey = Object.keys(controlErrors)[0];
            const getError = this.errors[firstKey];
            const text = getError(controlErrors[firstKey]);

            this.setError(text);
          } else {
            this.setError('');
          }
        });
      } else {
        console.error(`Control "${this.controlName}" not found in the form group.`);
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
