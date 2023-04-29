import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'jv-button',
  standalone: true,
  imports: [CommonModule],
  template: `<button class="bg-red-100 m-4">Test</button>`,
  styles: [],
})
export class ButtonComponent {}
