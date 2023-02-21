import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { ArticlesActions, selectArticlesEntitiesById, selectEntity } from '@jv/demo-app/data-access/articles';

@Component({
  selector: 'jv-article-show',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-show.component.html',
  styles: [],
})
export class ArticleShowComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  store = inject(Store);
  oldArticle$ = this.store.select(selectArticlesEntitiesById({id: 1}));
  article$ = this.store.select(selectEntity);

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    
    if(id) {
      this.store.dispatch(ArticlesActions.selectArticle({id}))
    }
  }
}
