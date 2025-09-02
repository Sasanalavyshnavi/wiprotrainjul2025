import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlightDTO } from './models/flight.dto';
import { BookingRequest } from './models/booking-request.dto';
import { SearchDTO } from './models/search.dto';

@Injectable({
  providedIn: 'root'
})
export class Booking {
  private baseUrl = 'http://localhost:8080/api/bookings';
  private flightUrl = 'http://localhost:8081/api/flights';

  constructor(private http: HttpClient) {}

  searchFlights(dto: SearchDTO): Observable<FlightDTO[]> {
    const params = `?source=${dto.source}&destination=${dto.destination}&date=${dto.date}`;
    return this.http.get<FlightDTO[]>(`${this.flightUrl}/search${params}`);
  }

  bookFlight(req: BookingRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}/book`, req);
  }

  getBookingStatus(bookingId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/status?bookingId=${bookingId}`);
  }

  getFlightById(flightId: string): Observable<FlightDTO> {
    return this.http.get<FlightDTO>(`${this.flightUrl}/${flightId}`);
  }
}
