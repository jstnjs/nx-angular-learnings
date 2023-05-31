import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ControlErrorComponent } from './control-error.component';
import { TaskDirective } from './task.directive';

@Component({
  selector: 'jv-experiments',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ControlErrorComponent, TaskDirective],
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
  }
}
