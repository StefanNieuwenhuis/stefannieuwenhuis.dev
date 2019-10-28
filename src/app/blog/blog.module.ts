import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsRoutingModule } from './blog-routing.module';
import { PostsComponent } from './containers/posts/posts.component';



@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class BlogModule { }
