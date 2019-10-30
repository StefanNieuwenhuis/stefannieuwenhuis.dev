import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './state';
import { postsReducer } from './posts/reducer';

export const appReducer: ActionReducerMap<AppState> = {
    posts: postsReducer
};