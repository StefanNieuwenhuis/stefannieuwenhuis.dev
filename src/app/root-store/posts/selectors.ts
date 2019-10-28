import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../state';
import { postsAdapter, State } from './state';

const {
    selectAll,
    selectEntities
} = postsAdapter.getSelectors();

export const selectPostsState = createFeatureSelector<AppState, State>('posts');

export const getError = (state: State) => state.error;
export const getLoadingState = (state: State) => state.loading;

export const selectLoadingState = createSelector(
    selectPostsState,
    getLoadingState
);

export const selectError = createSelector(
    selectPostsState,
    getError
);

export const selectAllPosts = createSelector(
    selectPostsState,
    selectAll
);

export const selectPostsEntities = createSelector(
    selectPostsState,
    selectEntities
);