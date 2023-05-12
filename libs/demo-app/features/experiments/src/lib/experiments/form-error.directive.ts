import { ComponentFactoryResolver, ComponentRef, Directive, Inject, Self, ViewContainerRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { FORM_ERRORS } from './form.token';
import { ControlErrorComponent } from './control-error.component';

@Directive({
  standalone: true,
  selector: '[formControl], [formControlName]',
})
export class ControlErrorsDirective {
  //@ts-ignore
  ref: ComponentRef<ControlErrorComponent>;
  constructor(
    private resolver: ComponentFactoryResolver,
    private vcr: ViewContainerRef,
    @Self() private control: NgControl,
    @Inject(FORM_ERRORS) private errors: any,
  ) {}

  ngOnInit() {
    if (this.control !== null) {
      this.control.valueChanges?.subscribe(() => {
        const controlErrors = this.control.errors;
        if (controlErrors) {
          const firstKey = Object.keys(controlErrors)[0];
          const getError = this.errors[firstKey];
          const text = getError(controlErrors[firstKey]);
          this.setError(text);
        } else if (this.ref) {
          // @ts-ignore
          this.setError('');
        }
      });
    }
  }

  setError(text: string) {
    if (!this.ref) {
      const factory = this.resolver.resolveComponentFactory(ControlErrorComponent);
      this.ref = this.vcr.createComponent(factory);
    }

    this.ref.instance.text = text;

    console.log(this.ref);
  }
}
