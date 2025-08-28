import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports:[RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'palindrome-app';

  // Function to check palindrome
  isPalindrome(str: string): boolean {
    if (!str) return false;
    let reversed = str.split('').reverse().join('');
    return str === reversed;
  }
}
