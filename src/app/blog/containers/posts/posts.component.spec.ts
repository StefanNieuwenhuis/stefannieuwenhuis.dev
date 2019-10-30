
import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { cold } from 'jasmine-marbles';

import { PostsComponent } from './posts.component';
import { RootStoreState } from '../../../root-store';
import { Post } from '../../../models';


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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch an LoadAllPosts Action in ngOnInit lifecycle', () => {
    const expected = cold('a', { a: posts });

    expect(component.posts$).toBeObservable(expected);
  });
});
