import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import * as PostsActions from './actions';

import { FirebaseService } from './../../services/firebase.service';
import { Post } from '../../models';

@Injectable()
export class PostsEffects {
    constructor(private actions$: Actions, private firebaseService: FirebaseService) { }

    loadAllPosts$ = createEffect(() => this.actions$.pipe(
        ofType(PostsActions.loadAllPosts),
        switchMap(() => this.firebaseService.getAllPosts().pipe(
            map((posts: Post[]) => PostsActions.loadAllPostsSuccess({ posts })),
            catchError(error => of(PostsActions.loadAllPostsFailure({ error })))
        ))
    ));
}