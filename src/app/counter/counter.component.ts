import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  count = signal(0);
  isEven = computed(() => this.count() % 2 === 0);

  private loggingEffect = effect(() => {
    console.log('Current count is', this.count());
  });

  increment() {
    this.count.update((value) => value + 1);
  }
}
