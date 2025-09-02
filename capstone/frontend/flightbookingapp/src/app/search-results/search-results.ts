import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FlightDTO } from '../models/flight.dto';
import { Booking } from '../booking';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './search-results.html',
  styleUrl: './search-results.css'
})
export class SearchResults {
  flights: FlightDTO[] = [];
  filteredFlights: FlightDTO[] = [];
  airlines = ["Indigo", "Air India", "SpiceJet", "GoAir"];
  selectedAirlines: string[] = [];

  constructor(private bookingService: Booking, private router: Router) {
    const search = history.state;
    if (search.source && search.destination && search.date) {
      bookingService.searchFlights(search).subscribe(data => {
        this.flights = data;
        this.filteredFlights = data;
      });
    }
  }
  book(flightId: string) {
    this.router.navigate(['/booking', flightId]);
  }
  applyFilters() {
    this.filteredFlights = this.flights.filter(f =>
      this.selectedAirlines.length === 0 || this.selectedAirlines.includes(f.airline)
    );
  }
  onAirlineFilterChange(event: any, airline: string) {
    if (event.target.checked) {
      this.selectedAirlines.push(airline);
    } else {
      this.selectedAirlines = this.selectedAirlines.filter(a => a !== airline);
    }
    this.applyFilters();
  }
 
}
 
