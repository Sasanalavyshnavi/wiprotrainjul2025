import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ivechile } from './ivehicle';

@Injectable({
  providedIn: 'root'
})
export class Vechileservice {
   private apiUrl = 'http://localhost:3000/vehicles';

  constructor(private http: HttpClient) {}

  getVehicles(): Observable<Ivechile[]> {
    return this.http.get<Ivechile[]>(this.apiUrl);
  
}
}
