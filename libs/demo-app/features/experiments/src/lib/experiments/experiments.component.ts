import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ControlErrorsDirective } from './form-error.directive';

@Component({
  selector: 'jv-experiments',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ControlErrorsDirective],
  templateUrl: 'experiments.component.html',
  styles: [],
})
export class ExperimentsComponent {
  fb = inject(FormBuilder);

  testForm = this.fb.nonNullable.group({
    firstName: ['', [Validators.required]],
    lastName: ['', Validators.minLength(4)],
  });

  validateForm() {
    console.log(this.testForm.value);
    this.testForm.markAllAsTouched();
  }
}
