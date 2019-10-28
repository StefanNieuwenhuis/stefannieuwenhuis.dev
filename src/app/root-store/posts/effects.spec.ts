import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { hot, cold } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import { Post } from '../../models';
import { PostsActions } from '.';
import { PostsEffects } from './effects';

import { FirebaseService } from './../../services/firebase.service';

describe('Posts Effects', () => {
    let actions: Observable<any>;
    let effects: PostsEffects;
    let firebaseService: jasmine.SpyObj<FirebaseService>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PostsEffects,
                provideMockActions(() => actions),
                {
                    provide: FirebaseService,
                    useValue: { getAllPosts: jasmine.createSpy() }
                }]
        });

        effects = TestBed.get(PostsEffects);
        firebaseService = TestBed.get(FirebaseService);
    });

    describe('Loading all posts', () => {
        it('should return a stream with posts loaded successfull action', () => {
            const posts: Post[] = [
                { id: 1, categoryId: null, title: 'A fake title #1', body: 'A fake body #1', publishDate: '22-05-1987' },
                { id: 2, categoryId: null, title: 'A fake title #2', body: 'A fake body #2', publishDate: '22-05-1987' },
            ];
            const action = PostsActions.loadAllPosts();
            const outcome = PostsActions.loadAllPostsSuccess({ posts });

            actions = hot('-a', { a: action });
            const response = cold('-a|', { a: posts });
            firebaseService.getAllPosts.and.returnValue(response);

            const expected = cold('--b', { b: outcome });
            expect(effects.loadAllPosts$).toBeObservable(expected);
        });

        it('should return a stream with posts loaded failure action', () => {
            const error = new Error('Failed to load posts') as any;
            const action = PostsActions.loadAllPosts();
            const outcome = PostsActions.loadAllPostsFailure({ error });

            actions = hot('-a', { a: action });
            const response = cold('-#', {}, error);
            const expected = cold('--c', { c: outcome });
            firebaseService.getAllPosts.and.returnValue(response);

            expect(effects.loadAllPosts$).toBeObservable(expected);
        });
    });
});