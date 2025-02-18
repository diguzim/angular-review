import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { PostComponent } from './components/post/post.component';
import { BlogService } from './services/blog.service';

@Component({
  selector: 'app-root',
  providers: [BlogService],
  imports: [RouterOutlet, CounterComponent, PostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-review';
}
