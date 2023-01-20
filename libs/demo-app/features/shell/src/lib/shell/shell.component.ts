import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'jv-demo-app-shell',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `<router-outlet />`,
})
export class ShellComponent {}
