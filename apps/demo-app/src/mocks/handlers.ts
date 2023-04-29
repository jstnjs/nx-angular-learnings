import { rest } from 'msw';

const articlesHandler = rest.get('/api/articles', (req, res, ctx) =>
  res(
    ctx.status(200),
    ctx.json([
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
    ]),
  ),
);

export const handlers = [articlesHandler];
