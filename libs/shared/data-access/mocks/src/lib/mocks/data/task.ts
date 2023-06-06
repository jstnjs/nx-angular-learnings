import { rest } from 'msw';

const tasks = [
  {
    code: 1,
    data: 'lorem',
  },
  {
    id: 33,
    data: 'ipsum',
  },
  {
    id: 96,
    data: 'dolor',
  },
];

export const getTasks = rest.get('/api/tasks', (req, res, ctx) => res(ctx.status(200), ctx.json(tasks)));

// export const getArticle = rest.get('/api/articles/:articleId', (req, res, ctx) => {
//   const { articleId } = req.params;
//   const article = articles.find((article) => article.id === Number(articleId));
//   return res(ctx.status(200), ctx.json(article));
// });
