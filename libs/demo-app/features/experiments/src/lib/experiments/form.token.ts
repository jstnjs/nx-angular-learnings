import { InjectionToken } from '@angular/core';

export const defaultErrors = {
  required: (error: any) => `This field is required`,
  minlength: (error: any) => `Expect .. but got .. `,
};

export const FORM_ERRORS = new InjectionToken('FORM_ERRORS', {
  providedIn: 'root',
  factory: () => defaultErrors,
});
