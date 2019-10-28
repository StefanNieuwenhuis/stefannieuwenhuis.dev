import { createAction, props } from '@ngrx/store';
import { Post } from '../../models';

export const loadAllPosts = createAction('[Posts] Load All Posts');
export const loadAllPostsSuccess = createAction('[Posts] Load All Posts Success', props<{ posts: Post[] }>());
// TODO: Update error type
export const loadAllPostsFailure = createAction('[Posts] Load All Posts Failure', props<{ error: any }>());