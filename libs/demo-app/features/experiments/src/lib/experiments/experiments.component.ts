import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'jv-experiments',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: 'experiments.component.html',
  styles: [],
})
export class ExperimentsComponent {
  fb = inject(FormBuilder);

  testForm = this.fb.nonNullable.group({
    firstName: [''],
    lastName: [''],
  });

  validateForm() {
    console.log(this.testForm.value);
  }
}
