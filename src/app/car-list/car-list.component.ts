import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  CarList:Car[] = [{
    make: "Toyota",
    model: "Hilux",
    doors: 4,
    price: 10000,
    year: 2023
  }, {
    make: "Honda",
    model: "Accord",
    doors: 4,
    price: 5000,
    year: 2008
  }]


  constructor() { }

  ngOnInit(): void {
  }

}
