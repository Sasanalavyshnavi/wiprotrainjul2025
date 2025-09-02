import { Component } from '@angular/core';
import { SearchDTO } from '../models/search.dto';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-flight',
  imports: [CommonModule,FormsModule],
  templateUrl: './flight.html',
  styleUrl: './flight.css'
})
export class Flight {
  search: SearchDTO = { source: '', destination: '', date: '' };
  swap(): void {
  const temp = this.search.source;
  this.search.source = this.search.destination;
  this.search.destination = temp;
}

  constructor(private router: Router) {}

  submitSearch() {
    this.router.navigate(['/results'], { state: this.search });
  }


}
