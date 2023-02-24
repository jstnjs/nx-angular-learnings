import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '@jv/shared/core/http-client';
import { Store } from '@ngrx/store';
import { ArticlesActions, selectAllArticles } from '@jv/demo-app/data-access/articles';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'jv-demo-app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  apiService = inject(ApiService);
  store = inject(Store);
  articles$ = this.store.select(selectAllArticles);

  aTestRequest() {
    this.apiService.get('/profile').subscribe((testingg) => {
      console.log(testingg);
    });
  }

  ngOnInit(): void {
    this.store.dispatch(ArticlesActions.initArticles());
  }
}
