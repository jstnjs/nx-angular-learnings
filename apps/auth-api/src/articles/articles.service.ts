import { User } from '@jv/shared/data-access/auth';
import { Injectable } from '@nestjs/common';

interface Article {
  id: number;
  slug: string;
  title: string;
}


@Injectable()
export class ArticlesService {
  private readonly articles: Article[] = [
    {
      id: 1,
      slug: 'how-to-do',
      title: 'How to do',
    },
    {
      id: 2,
      slug: 'best-practices',
      title: 'Best practices',
    },
  ];

  async findOne(id: number): Promise<Article | undefined> {
    return this.articles.find(article => article.id === id);
  }

  async findAll(): Promise<Article[] | undefined> {
    return this.articles;
  }
}