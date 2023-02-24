import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ArticlesEntity } from './articles.models';

export const ArticlesActions = createActionGroup({
  source: 'Articles/API',
  events: {
    'Init Articles' : emptyProps(),
    'Load Articles Success': props<{ articles: ArticlesEntity[] }>(),
    'Load Articles Failure': props<{ error: any }>(),
    'Load Article': props<{id: number}>(),
    'Load Article Success': props<{ article: ArticlesEntity }>(),
    'Load Article Failure': props<{ error: any }>(),
    'Select Article': props<{id: string}>(),
  }
})
