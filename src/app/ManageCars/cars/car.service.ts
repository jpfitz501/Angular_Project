import { Injectable } from '@angular/core';
import { Car } from 'src/app/models/car';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { MockCars } from '../mock-cars';
import { CarListComponent } from 'src/app/car-list/car-list.component';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  getCars(): Observable<Car[]> {
    return of(Car);
  }

  const mockCars;
  constructor() { }
}
