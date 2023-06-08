import { getArticle, getArticles } from './data/articles';
import { getTasks } from './data/task';

export const handlers = [getArticles, getArticle, getTasks];
