import { Component } from '@angular/core';
import { ShellComponent } from '@jv/demo-app/features/shell'

@Component({
  standalone: true,
  imports: [ShellComponent],
  selector: 'jv-root',
  template: `<jv-demo-app-shell />`,
  styles: [],
})
export class AppComponent {
  title = 'demo-app';
}
