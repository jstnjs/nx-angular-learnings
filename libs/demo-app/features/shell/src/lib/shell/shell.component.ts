import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import * as userActions from './+state/users.actions'

@Component({
  selector: 'jv-demo-app-shell',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `<router-outlet />`,
})
export class ShellComponent implements OnInit{
  store = inject(Store)
  ngOnInit(): void {
      // this.facade.init();
      this.store.dispatch(userActions.initUsers());
  }
}
