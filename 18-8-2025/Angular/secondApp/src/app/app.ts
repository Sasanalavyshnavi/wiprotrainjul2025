import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('secondApp');
  name: string = 'vyshnavi';

  greet() {
    console.log(`${this.name} says Hello!`);
  }
}