import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Post } from '../../models';

export interface State extends EntityState<Post> {
    selectedPostId: number;
    loading: boolean;
    error: any;
}

export const postsAdapter: EntityAdapter<Post> = createEntityAdapter<Post>();

export const initialState: State = postsAdapter.getInitialState(
    {
        selectedPostId: null,
        loading: false,
        error: null
    }
);