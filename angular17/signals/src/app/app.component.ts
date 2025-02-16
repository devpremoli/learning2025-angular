import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { NameListComponent } from './components/name-list/name-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterComponent, ToggleComponent, NameListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'signals';
}
