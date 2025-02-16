import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.css'
})
export class ToggleComponent {
  isActive = signal(false);

  toggle() {
    this.isActive.update(active => !active);
  }

}
