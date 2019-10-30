import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../../models';

@Component({
  selector: 'app-posts-overview',
  templateUrl: './posts-overview.component.html',
  styleUrls: ['./posts-overview.component.scss']
})
export class PostsOverviewComponent implements OnInit {
  @Input() posts: Post[];

  constructor() { }

  ngOnInit() {
  }

}
