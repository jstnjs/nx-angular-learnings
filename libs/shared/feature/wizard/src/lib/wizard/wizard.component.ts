import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardService } from './wizard.service';
import { RouterModule } from '@angular/router';
import { BehaviorSubject, Subject, combineLatest, map } from 'rxjs';

@Component({
  selector: 'jv-wizard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './wizard.component.html',
  styles: [],
})
export class WizardComponent implements OnInit {
  wizardService = inject(WizardService);
  codes$ = this.wizardService.getCodes();
  currentCode$ = new Subject();
  currentCodeAction = this.currentCode$.asObservable();

  // codes
  // currentCode
  // currentData

  navigateSubject$ = new BehaviorSubject('');
  navigateAction = this.navigateSubject$.asObservable();

  currentStep$ = combineLatest(this.codes$, this.navigateAction).pipe(
    map(([codes, action]) => {
      if (action === '') {
        return codes[0];
      }

      if (action === 'next') {
        return codes[1];
      }

      if (action === 'prev') {
        return codes[0];
      }
      return codes[0];
    }),
  );

  next() {
    this.navigateSubject$.next('next');
  }
  ngOnInit(): void {
    console.log('test');
  }
}
