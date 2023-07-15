import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { WizardService } from './wizard.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { combineLatest, switchMap } from 'rxjs';

@Component({
  selector: 'jv-wizard-step',
  imports: [ReactiveFormsModule, JsonPipe, AsyncPipe],
  standalone: true,
  templateUrl: 'wizard-step.component.html',
})
export class WizardStepComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  wizardService = inject(WizardService);
  currentId = this.activatedRoute.snapshot.paramMap.get('itemId')!;
  fb = inject(FormBuilder);

  currentStep$ = this.activatedRoute.paramMap.pipe(
    switchMap((params) => {
      const id = params.get('itemId')!;
      return this.wizardService.getCodeById(id);
    }),
  );

  form = this.fb.nonNullable.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
  });
  ngOnInit() {}
}
