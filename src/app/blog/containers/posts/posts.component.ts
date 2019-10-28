import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../../root-store/state';
import { Post } from '../../../models';
import { PostsSelectors } from './../../../root-store/posts';
import { PostsActions } from './../../../root-store/posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts$: Observable<Post[]>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.posts$ = this.store.pipe(select(PostsSelectors.selectAllPosts));

    this.store.dispatch(PostsActions.loadAllPosts());
  }
}
