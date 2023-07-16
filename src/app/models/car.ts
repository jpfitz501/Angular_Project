export class Car {

    public make: string;
    public model: string;
    public doors: number;
    public price: number;
    public year: number;
    
    constructor( make: string, model: string, doors: number, price: number, year: number){
        this.make = make;
        this.model = model;
        this.doors = doors;
        this.price = price;
        this.year = year;
    }

}
