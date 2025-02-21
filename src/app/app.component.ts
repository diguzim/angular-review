import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogService } from './services/blog.service';
import { CounterComponent } from './components/counter/counter.component';
import { CardComponent } from './components/card/card.component';

@Component({
  selector: 'app-root',
  providers: [BlogService],
  imports: [RouterOutlet, CounterComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-review';
  count = signal(0);

  randomOutputHandler(value: number) {
    console.log('Random output:', value);
  }
}
