import { setupWorker, rest } from 'msw';

const myResourceHandler = rest.get('/api/articles', (req, res, ctx) =>
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

const worker = setupWorker(myResourceHandler);

worker.start();
