import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { firestore } from 'firebase';

import { PostsOverviewComponent } from './posts-overview.component';
class MockedTimestamp {
  seconds: 12345;
  nanoseconds: 0;

  now = () => Date.now()

  toDate = () => Date.now()

  toMillis = () => null;

  toEqual = () => true;
}

describe('PostsOverviewComponent', () => {
  let component: PostsOverviewComponent;
  let fixture: ComponentFixture<PostsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [PostsOverviewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get a list of 2 posts from the container component', () => {
    component.posts = [
      { id: '1', categoryId: null, title: 'A fake title #1', body: 'A fake body #1', publishDate: firestore.Timestamp.now() },
      { id: '2', categoryId: null, title: 'A fake title #2', body: 'A fake body #2', publishDate: firestore.Timestamp.now() },
    ];

    expect(component.posts.length).toBe(2);
  });
});
