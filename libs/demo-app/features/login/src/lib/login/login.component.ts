import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as authActions from '@jv/shared/data-access/auth';

@Component({
  selector: 'jv-demo-app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent {
  store = inject(Store);
  fb = inject(FormBuilder);

  form = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required],
  })

  login() {
    this.store.dispatch(authActions.login({username: 'hi', password: 'test'}))
  }

}
