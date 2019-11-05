import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { cold, hot } from 'jasmine-marbles';

import { PostsComponent } from './posts.component';
import { RootStoreState } from '../../../root-store';
import { Post } from '../../../models';
import { PostsSelectors } from '../../../root-store/posts';


/**
 * Stubbed data
 */
const posts: Post[] = [
  { id: '1', categoryId: null, title: 'A fake title #1', body: 'A fake body #1', publishDate: '22-05-1987' },
  { id: '2', categoryId: null, title: 'A fake title #2', body: 'A fake body #2', publishDate: '22-05-1987' },
];

const postsStateMock: RootStoreState.AppState = {
  posts: {
    entities: {
      '1': { id: '1', categoryId: null, title: 'A fake title #1', body: 'A fake body #1', publishDate: '22-05-1987' },
      '2': { id: '2', categoryId: null, title: 'A fake title #2', body: 'A fake body #2', publishDate: '22-05-1987' },
    },
    ids: ['1', '2'],
    selectedPostId: null,
    error: null,
    loading: false
  },
};

/**
 * Stubbed viewer components
 */
@Component({ selector: 'app-posts-overview', template: '' })
class PostsOverviewStubComponent {
  @Input('posts') posts: Post[];
}

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let store: MockStore<RootStoreState.AppState>;
  let dispatchSpy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostsComponent, PostsOverviewStubComponent],
      providers: [
        provideMockStore({ initialState: postsStateMock })
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    store.setState(postsStateMock);
    dispatchSpy = spyOn(store, 'dispatch');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load all posts', () => {
    const expected = cold('a', { a: posts });

    expect(component.posts$).toBeObservable(expected);
  });

  it('should dispatch a load all posts action', () => {
    expect(dispatchSpy).toHaveBeenCalledTimes(1);
  });

});