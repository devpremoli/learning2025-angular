import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  count = signal(0); // Create a signal with an initial value

  increment() {
    this.count.set(this.count() + 1); // Replacing the value
  }

  reset() {
    this.count.set(0); // Reset counter to zero
  }
}
