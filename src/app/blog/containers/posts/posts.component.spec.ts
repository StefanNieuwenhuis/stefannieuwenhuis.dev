import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';

import { PostsComponent } from './posts.component';
import { RootStoreState } from '../../../root-store';
import { Post } from '../../../models';
import { PostsActions } from '../../../root-store/posts';

/**
 * Stubbed data
 */
const postsStateMock = {
  posts: {
    entities: {
      '1': { id: '1', categoryId: null, title: 'A fake title #1', body: 'A fake body #1', publishDate: '22-05-1987' },
      '2': { id: '2', categoryId: null, title: 'A fake title #2', body: 'A fake body #2', publishDate: '22-05-1987' },
    },
    ids: ['1', '2']
  }
};

/**
 * Stubbed viewer components
 */
@Component({ selector: 'app-posts-overview', template: '' })
class PostsOverviewStubComponent {
  @Input('posts') posts: Post[];
}

fdescribe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let store: MockStore<RootStoreState.AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostsComponent, PostsOverviewStubComponent],
      providers: [
        provideMockStore({ initialState: postsStateMock }),
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch an LoadAllPosts Action in ngOnInit lifecycle', () => {
    const action = PostsActions.loadAllPosts();

    expect(store.dispatch).toHaveBeenCalledWith(action);
    component.posts$.subscribe((posts: Post[]) => expect(posts.length).toBe(2));
  });
});
