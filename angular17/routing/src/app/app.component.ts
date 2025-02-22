import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'routing';

  login() {
    localStorage.setItem('user', 'admin');
    alert('Logged in as Admin!');
  }

  logout() {
    localStorage.removeItem('user');
    alert('Logged out!');
  }
}
