import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '@jv/shared/core/http-client';

@Component({
  selector: 'jv-demo-app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent {

  apiService = inject(ApiService);

  aTestRequest() {
    console.log('works?')
    this.apiService.get('/profile').subscribe((testingg => {
      console.log(testingg);
    }))
  }
}
