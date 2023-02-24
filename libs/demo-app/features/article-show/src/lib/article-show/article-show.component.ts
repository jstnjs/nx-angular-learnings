import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectSelectedArticle } from '@jv/demo-app/data-access/articles';

@Component({
  selector: 'jv-article-show',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-show.component.html',
  styles: [],
})
export class ArticleShowComponent {
  store = inject(Store);
  article$ = this.store.select(selectSelectedArticle);
}
