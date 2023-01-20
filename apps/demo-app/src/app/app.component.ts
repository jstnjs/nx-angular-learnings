import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'jv-root',
  template: `<h1>hey</h1>`,
  styles: [],
})
export class AppComponent {
  title = 'demo-app';
}
