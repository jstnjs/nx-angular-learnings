import { Directive, HostListener } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { take } from 'rxjs/operators';

@Directive({
  selector: 'form',
  standalone: true,
})
export class FormSubmitDirective {
  private submittedSubject = new Subject<void>();
  private submitted$: Observable<void>;

  constructor() {
    this.submitted$ = this.submittedSubject.asObservable().pipe(take(1));
  }

  @HostListener('ngSubmit')
  onSubmit() {
    this.submittedSubject.next();
  }

  getFormSubmitted(): Observable<void> {
    return this.submitted$;
  }
}
