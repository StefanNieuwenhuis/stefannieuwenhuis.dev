import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AppState } from '../../../root-store/state';
import { Post } from '../../../models';
import { PostsSelectors, PostsActions } from './../../../root-store/posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();

  posts$: Observable<Post[]>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(PostsActions.loadAllPosts());
    this.posts$ = this.store.pipe(
      select(PostsSelectors.selectAllPosts),
      takeUntil(this.unsubscribe$)
    );

  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
