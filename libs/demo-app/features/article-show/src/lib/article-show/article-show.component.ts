import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';

import { selectCurrentArticle } from '@jv/demo-app/data-access/articles';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'jv-article-show',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './article-show.component.html',
  styles: [],
})
export class ArticleShowComponent {
  store = inject(Store);
  article$ = this.store.select(selectCurrentArticle);
}
