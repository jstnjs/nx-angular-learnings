import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ArticlesEntity } from './articles.models';

export const ArticlesActions = createActionGroup({
  source: 'Articles/API',
  events: {
    'Init Articles': emptyProps(),
    'Load Articles Success': props<{ articles: ArticlesEntity[] }>(),
    'Load Articles Failure': props<{ error: Error }>(),
    'Load Single Article': props<{ id: number }>(),
    'Load Single Article Success': props<{ article: ArticlesEntity }>(),
    'Load Single Article Failure': props<{ error: Error }>(),
    'Select Article': props<{ id: string }>(),
  },
});
