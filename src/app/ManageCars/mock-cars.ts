import { Component } from "@angular/core";
import { TestBed, waitForAsync } from "@angular/core/testing";
import { AppComponent } from "../app.component";

@Component({
    selector: 'app-car-list',
    template: ''
})

export class MockCars {

}
describe('AppComponent', () => {
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                MockCars
            ],
    }).compileComponents();
}))});
