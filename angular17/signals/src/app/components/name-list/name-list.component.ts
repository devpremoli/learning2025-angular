import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-name-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './name-list.component.html',
  styleUrl: './name-list.component.css'
})
export class NameListComponent {
  names = signal<string[]>(["Alice"]);

  addName() {
    this.names.update(list => [...list, "Bob"]);
  }
}
