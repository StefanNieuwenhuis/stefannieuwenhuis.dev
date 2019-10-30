import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsOverviewComponent } from './posts-overview.component';
import { MatCardModule } from '@angular/material/card';

describe('PostsOverviewComponent', () => {
  let component: PostsOverviewComponent;
  let fixture: ComponentFixture<PostsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule],
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
      { id: '1', categoryId: null, title: 'A fake title #1', body: 'A fake body #1', publishDate: '22-05-1987' },
      { id: '2', categoryId: null, title: 'A fake title #2', body: 'A fake body #2', publishDate: '22-05-1987' },
    ];

    expect(component.posts.length).toBe(2);
  });
});
