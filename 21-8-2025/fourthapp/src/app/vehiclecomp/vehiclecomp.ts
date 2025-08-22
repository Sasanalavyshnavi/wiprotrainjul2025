import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ivechile } from '../ivehicle';
import { Vechileservice } from '../vehicleservice';

@Component({
  selector: 'app-vehiclecomp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehiclecomp.html',
  styleUrls: ['./vehiclecomp.css']
})
export class VehicleComp implements OnInit {
  vehicles: Ivechile[] = [];

  constructor(private vehicleService: Vechileservice) {}

  ngOnInit(): void {
    this.vehicleService.getVehicles().subscribe((data: Ivechile[]) => {
      this.vehicles = data;
    });
  }
}
