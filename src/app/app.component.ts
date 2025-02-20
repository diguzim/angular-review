import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { PostComponent } from './components/post/post.component';
import { BlogService } from './services/blog.service';
import { Post } from './models/interfaces/post.interface';

@Component({
  selector: 'app-root',
  providers: [BlogService],
  imports: [RouterOutlet, CounterComponent, PostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-review';
  count = signal(0);
}
