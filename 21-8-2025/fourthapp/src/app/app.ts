import { Component, signal } from '@angular/core';
import { VehicleComp } from './vehiclecomp/vehiclecomp';



@Component({
  selector: 'app-root',
  imports:[VehicleComp],
    
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('fourthapp');

}
