import { rest } from 'msw';

const flags = {
  fastLogin: true,
};

export const getFeatureFlags = rest.get('/api/flags', (req, res, ctx) => res(ctx.status(200), ctx.json(flags)));
