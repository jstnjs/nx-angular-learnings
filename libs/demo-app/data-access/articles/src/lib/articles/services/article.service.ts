import { inject, Injectable } from "@angular/core";
import { ApiService } from "@jv/shared/core/http-client";
import { Observable } from "rxjs";
import { ArticlesEntity } from "../+state/articles.models";

type ArticlesResponse = {
    articles: ArticlesEntity[];
}

@Injectable({providedIn: 'root'})
export class ArticleService {
    apiService = inject(ApiService);

    getArticles(): Observable<ArticlesResponse> {
        return this.apiService.post('/articles');
    }
}