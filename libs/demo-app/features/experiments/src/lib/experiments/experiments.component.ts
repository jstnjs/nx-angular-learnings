import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorComponent } from './error.component';

@Component({
  selector: 'jv-experiments',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ErrorComponent],
  templateUrl: 'experiments.component.html',
  styles: [],
})
export class ExperimentsComponent {
  fb = inject(FormBuilder);

  testForm = this.fb.nonNullable.group({
    firstName: ['', [Validators.required]],
    lastName: ['', Validators.minLength(4)],
    initials: ['', Validators.required],
  });

  validateForm() {
    console.log(this.testForm.value);
    // this.testForm.markAllAsTouched();
  }
}
