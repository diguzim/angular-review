import { Component, computed, effect, input, model } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  label = input('MyCounter');
  count = model(0);
  isEven = computed(() => this.count() % 2 === 0);

  private loggingEffect = effect(() => {
    console.log(`Current value of ${this.label} is ${this.count()}`);
  });

  increment() {
    this.count.update((value) => value + 1);
  }
}
