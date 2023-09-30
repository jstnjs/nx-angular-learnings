import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ControlErrorComponent } from './control-error.component';
import { TaskDirective } from './task.directive';
import { TaskComponent } from './task.component';
import { FlagDirective } from './flag.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'jv-experiments',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ControlErrorComponent,
    TaskDirective,
    TaskComponent,
    FlagDirective,
    RouterLink,
  ],
  templateUrl: 'experiments.component.html',
  styles: [],
})
export class ExperimentsComponent {
  fb = inject(FormBuilder);

  testForm = this.fb.nonNullable.group({
    firstName: [''],
    lastName: ['', Validators.minLength(4)],
    initials: ['', Validators.required],
  });

  validateForm() {
    console.log(this.testForm.value);
  }

  checkInput(data: any) {
    console.log('yep...', data);
  }
}
