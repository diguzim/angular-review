import { Component } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Post } from '../../models/interfaces/post.interface';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  posts: Post[] = [];

  constructor(private blogService: BlogService) {}
}
