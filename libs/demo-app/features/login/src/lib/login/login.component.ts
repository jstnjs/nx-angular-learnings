import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'jv-demo-app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent {
  fb = inject(FormBuilder);

  form = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required],
  })

  login() {
    console.log('login');
  }

}
