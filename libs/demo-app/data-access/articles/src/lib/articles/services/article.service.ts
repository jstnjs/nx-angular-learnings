import { inject, Injectable } from "@angular/core";
import { ApiService } from "@jv/shared/core/http-client";
import { Observable } from "rxjs";
import { ArticlesEntity } from "../+state/articles.models";

@Injectable({providedIn: 'root'})
export class ArticleService {
    apiService = inject(ApiService);

    getArticles(): Observable<ArticlesEntity[]> {
        return this.apiService.get('/articles');
    }

    getArticle(id: number): Observable<ArticlesEntity> {
        return this.apiService.get(`/articles/${id}`);
    }
}