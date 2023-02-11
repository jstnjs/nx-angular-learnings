import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '@jv/shared/core/http-client';
import { homePageActions } from './home.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'jv-demo-app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {

  apiService = inject(ApiService);
  store = inject(Store);

  aTestRequest() {
    console.log('works?')
    this.apiService.get('/profile').subscribe((testingg => {
      console.log(testingg);
    }))
  }

  ngOnInit(): void {
      this.store.dispatch(homePageActions.opened());
  }
}
