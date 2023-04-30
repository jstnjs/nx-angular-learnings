import { rest } from 'msw';

const articles = [
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
  {
    id: 3,
    slug: 'show-article-from-mock',
    title: 'How to get Cypress working with MSW',
  },
];

export const getArticles = rest.get('/api/articles', (req, res, ctx) => res(ctx.status(200), ctx.json(articles)));

export const getArticle = rest.get('/api/articles/:articleId', (req, res, ctx) => {
  const { articleId } = req.params;
  const article = articles.find((article) => article.id === Number(articleId));
  return res(ctx.status(200), ctx.json(article));
});
