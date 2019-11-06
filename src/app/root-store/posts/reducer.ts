import { createReducer, on, Action } from '@ngrx/store';
import { initialState, postsAdapter } from './state';
import * as PostsActions from './actions';
import { State } from './state';

const reducer = createReducer(initialState,
    on(
        PostsActions.loadAllPosts,
        state => ({ ...state, loading: true, error: null })
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

export function postsReducer(state: State | undefined, action: Action) {
    return reducer(state, action);
}