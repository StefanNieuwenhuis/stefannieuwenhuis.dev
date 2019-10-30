import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from './../../environments/environment';

import { PostsStoreModule } from './posts';

import { appReducer } from './reducer';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    PostsStoreModule
  ]
})
export class RootStoreModule { }
