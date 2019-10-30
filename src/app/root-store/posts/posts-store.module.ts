import { PostsEffects } from './effects';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { postsReducer } from './reducer';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature('posts', postsReducer),
    EffectsModule.forFeature([PostsEffects])
  ]
})
export class PostsStoreModule { }
