import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { authActions } from '@jv/shared/data-access/auth';

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
    email: ['', [Validators.required]],
    password: ['', Validators.required],
  })

  login() {
    const email = this.form.value.email;
    const password = this.form.value.password;

    if (email && password) {
      this.store.dispatch(authActions.login({ email, password}))
    }
  }

}
