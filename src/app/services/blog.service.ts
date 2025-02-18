import { Injectable } from '@angular/core';
import { Post } from '../models/interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor() {}

  async getPosts(): Promise<Post[]> {
    return [
      {
        id: 1,
        title: 'Hello World',
        content: 'This is my first post!',
        author: 'John Doe',
        createdAt: new Date(),
        updatedAt: new Date(),
        isPublished: true,
      },
      {
        id: 2,
        title: 'Learning Angular',
        content:
          'Angular is a powerful framework for building web applications.',
        author: 'Jane Smith',
        createdAt: new Date(),
        updatedAt: new Date(),
        isPublished: true,
      },
      {
        id: 3,
        title: 'Advanced TypeScript',
        content: 'TypeScript brings strong typing to JavaScript.',
        author: 'Alice Johnson',
        createdAt: new Date(),
        updatedAt: new Date(),
        isPublished: false,
      },
      {
        id: 4,
        title: 'RxJS Observables',
        content:
          'RxJS is a library for reactive programming using Observables.',
        author: 'Bob Brown',
        createdAt: new Date(),
        updatedAt: new Date(),
        isPublished: true,
      },
    ];
  }
}
