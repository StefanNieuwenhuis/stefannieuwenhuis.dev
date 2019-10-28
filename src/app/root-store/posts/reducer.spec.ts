import { postsReducer } from './reducer';
import { initialState } from './state';
import { PostsActions } from '.';
import { Post } from '../../models';

describe('TicketsReducer', () => {
    describe('undefined actions', () => {
        it('should return the default state', () => {
            const action = { type: 'undefined action' };
            const state = postsReducer(initialState, action);

            expect(state).toBe(initialState);
        });
    });

    describe('defined actions', () => {
        it('should set the loading state to true while loading all tickets', () => {
            const action = PostsActions.loadAllPosts();
            const state = postsReducer(initialState, action);

            expect(state.loading).toBeTruthy();
        });

        it('should load all posts successfully', () => {
            const posts: Post[] = [
                { id: 1, categoryId: null, title: 'A fake title #1', body: 'A fake body #1', publishDate: '22-05-1987' },
                { id: 2, categoryId: null, title: 'A fake title #2', body: 'A fake body #2', publishDate: '22-05-1987' },
            ];
            const entities = {
                1: posts[0],
                2: posts[1]
            };

            const action = PostsActions.loadAllPostsSuccess({ posts });
            const state = postsReducer(initialState, action);

            expect(state.ids.length).toBe(2);
            expect(state.entities).toEqual(entities);
            expect(state.loading).toBeFalsy();
        });
        it('should fail at loading all posts', () => {
            const error = {
                message: 'Tickets failed to load'
            };
            const action = PostsActions.loadAllPostsFailure({ error });
            const state = postsReducer(initialState, action);

            expect(state.error).toEqual(error);
            expect(state.loading).toBeFalsy();
        });
    });
});