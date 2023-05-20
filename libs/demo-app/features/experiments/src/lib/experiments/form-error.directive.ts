import { ComponentRef, Directive, Host, Inject, Optional, Self, ViewContainerRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { FORM_ERRORS } from './form.token';
import { FormSubmitDirective } from './form-submit.directive';
import { merge } from 'rxjs';
import { ControlErrorComponent } from './control-error.component';

@Directive({
  standalone: true,
  selector: '[formControl], [formControlName]',
})
export class FormErrorsDirective {
  ref!: ComponentRef<ControlErrorComponent>;
  constructor(
    @Self() private control: NgControl,
    @Inject(FORM_ERRORS) private errors: any,
    private vcr: ViewContainerRef,
    private form: FormSubmitDirective,
  ) {}

  ngOnInit() {
    merge(this.control.valueChanges!, this.form.getFormSubmitted()).subscribe(() => {
      const controlErrors = this.control.errors;

      if (controlErrors) {
        const firstKey = Object.keys(controlErrors)[0];
        const getError = this.errors[firstKey];
        const text = getError(controlErrors[firstKey]);

        this.setError(text);
      } else if (this.ref) {
        this.setError('');
      }
    });
  }

  setError(text: string) {
    if (!this.ref) {
      this.ref = this.vcr.createComponent(ControlErrorComponent);
    }

    this.ref.instance.text = text;
  }
}
