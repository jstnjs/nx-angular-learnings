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
    ]),
  ),
);

export const handlers = [articlesHandler];
