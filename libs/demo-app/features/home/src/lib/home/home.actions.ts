import { createActionGroup, emptyProps } from '@ngrx/store';

export const homePageActions = createActionGroup({
    source: 'Home Page',
    events: {
        'Opened': emptyProps(),
    }
});