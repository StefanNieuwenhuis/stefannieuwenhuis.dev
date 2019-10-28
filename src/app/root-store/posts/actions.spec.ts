import { Post } from "../../models";
import { PostsActions } from '.';

describe('Posts Actions', () => {
    describe('Loading all Posts', () => {
        it('should return a load all the posts action', () => {
            const action = PostsActions.loadAllPosts();

            expect({ ...action }).toEqual({ type: '[Posts] Load All Posts' });
        });

        it('should return a load all the posts successfully action', () => {
            const posts: Post[] = [
                { id: 1, categoryId: null, title: 'A fake title #1', body: 'A fake body #1', publishDate: '22-05-1987' },
                { id: 2, categoryId: null, title: 'A fake title #2', body: 'A fake body #2', publishDate: '22-05-1987' },
            ];

            const action = PostsActions.loadAllPostsSuccess({ posts });
            expect({ ...action }).toEqual({
                type: '[Posts] Load All Posts Success',
                posts
            });
        });

        it('should return a load all the posts failure action', () => {
            const error = {
                message: 'Posts failed to load'
            };

            const action = PostsActions.loadAllPostsFailure({ error });
            expect({ ...action }).toEqual({
                type: '[Posts] Load All Posts Failure',
                error
            });
        });
    });
});