import { getArticle, getArticles } from './data/articles';
import { getFeatureFlags } from './data/feature-flag';
import { getTasks } from './data/task';

export const handlers = [getArticles, getArticle, getTasks, getFeatureFlags];
