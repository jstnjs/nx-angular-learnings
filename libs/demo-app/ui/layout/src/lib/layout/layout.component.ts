import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'jv-demo-app-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './layout.component.html',
  styles: [],
})
export class LayoutComponent {
  title = 'home';
  routes = [
    { link: '', title: 'Home' },
    { link: 'all-files', title: 'All files' },
    { link: 'photos', title: 'Photos' },
    { link: 'experiments', title: 'Experiments' },
    { link: 'albums', title: 'Albums' },
    { link: 'settings', title: 'Settings' },
  ];
}
