import { createReducer, on } from '@ngrx/store';
import { initialState, postsAdapter } from './state';
import * as PostsActions from './actions';

export const postsReducer = createReducer(initialState,
    on(
        PostsActions.loadAllPosts,
        state => ({ ...state, loading: true })
    ),
    on(
        PostsActions.loadAllPostsSuccess,
        (state, { posts }) => {
            state = { ...state, loading: false, selectedPostId: null };
            return postsAdapter.addMany(posts, state);
        }
    ),
    on(
        PostsActions.loadAllPostsFailure,
        (state, error) => ({ ...state, error: error.error, loading: false }))
);