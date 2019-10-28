import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsRoutingModule } from './blog-routing.module';
import { PostsComponent } from './containers/posts/posts.component';
import { PostsOverviewComponent } from './components/posts-overview/posts-overview.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [PostsComponent, PostsOverviewComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    MatGridListModule,
    MatCardModule
  ]
})
export class BlogModule { }
