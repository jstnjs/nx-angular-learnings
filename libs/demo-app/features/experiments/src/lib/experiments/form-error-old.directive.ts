// import { ComponentFactoryResolver, ComponentRef, Directive, Inject, Self, ViewContainerRef } from '@angular/core';
// import { NgControl } from '@angular/forms';
// import { FORM_ERRORS } from './form.token';
// import { ControlErrorComponent } from './control-error.component';
// import { FormSubmitDirective } from './form-submit.directive';
// import { merge, take, tap } from 'rxjs';

// @Directive({
//   standalone: true,
//   selector: '[formControl], [formControlName]',
// })
// export class ControlErrorsDirective {
//   //@ts-ignore
//   ref: ComponentRef<ControlErrorComponent>;
//   constructor(
//     private resolver: ComponentFactoryResolver,
//     private vcr: ViewContainerRef,
//     private form: FormSubmitDirective,
//     @Self() private control: NgControl,
//     @Inject(FORM_ERRORS) private errors: any,
//   ) {}

//   ngOnInit() {
//     // this.form.getFormSubmitted().subscribe(() => console.log('submitttttt'));
//     this.form
//       .getFormSubmitted()
//       .pipe(take(1))
//       .subscribe(() => console.log('submit'));

//     if (this.control !== null) {
//       merge(this.control.valueChanges, this.form.getFormSubmitted()).pipe(tap(() => console.log('testing...')));
//     }

//     // if (this.control !== null) {
//     //   this.control.valueChanges?.subscribe(() => {
//     //     const controlErrors = this.control.errors;
//     //     if (controlErrors) {
//     //       const firstKey = Object.keys(controlErrors)[0];
//     //       const getError = this.errors[firstKey];
//     //       const text = getError(controlErrors[firstKey]);

//     //       console.log('firstkey', firstKey);
//     //       console.log('getError', getError);
//     //       console.log('text', text);
//     //       console.log('ctrlerror', controlErrors[firstKey]);
//     //       this.setError(text);
//     //     } else if (this.ref) {
//     //       // @ts-ignore
//     //       this.setError('');
//     //     }
//     //   });
//     // }
//   }

//   setError(text: string) {
//     if (!this.ref) {
//       const factory = this.resolver.resolveComponentFactory(ControlErrorComponent);
//       this.ref = this.vcr.createComponent(factory);
//     }

//     this.ref.instance.text = text;

//     console.log('ref', this.ref);
//   }
// }
