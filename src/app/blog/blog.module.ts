import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsRoutingModule } from './blog-routing.module';
import { PostsComponent } from './containers/posts/posts.component';
import { PostsOverviewComponent } from './components/posts-overview/posts-overview.component';


@NgModule({
  declarations: [PostsComponent, PostsOverviewComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
  ]
})
export class BlogModule { }
