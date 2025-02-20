import {
  Component,
  computed,
  effect,
  input,
  model,
  output,
} from '@angular/core';

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
  randomOutput = output<number>();

  private loggingEffect = effect(() => {
    console.log(`Current value of ${this.label} is ${this.count()}`);
  });

  increment() {
    this.count.update((value) => value + 1);
  }

  randomOutputHandler() {
    this.randomOutput.emit(Math.random());
  }
}
