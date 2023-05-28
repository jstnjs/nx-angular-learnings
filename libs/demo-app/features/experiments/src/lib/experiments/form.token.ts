import { InjectionToken } from '@angular/core';

const defaultErrors: {
  [key: string]: any;
} = {
  required: () => `This field is required`,
  minlength: ({ requiredLength, actualLength }: any) => `Expected ${requiredLength} but got ${actualLength} `,
  forbiddenName: () => 'Name cannot be Bob.',
};

export const FORM_ERRORS = new InjectionToken('FORM_ERRORS', {
  providedIn: 'root',
  factory: () => defaultErrors,
});
