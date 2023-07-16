import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarListComponent } from './car-list.component';

describe('CarListComponent', () => {
  let component: CarListComponent;
  let fixture: ComponentFixture<CarListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a table', ()=> {
    const pageComponentDomElement = fixture.debugElement.nativeElement;
    const table = pageComponentDomElement.querySelector('table');
    //We expect the table to have three rows, including the header
    expect(table.rows.length).toBe(3);
    expect(table.rows[2].cells[0].textContent).toBe("Honda");
    expect(table.rows[1].cells[2].textContent).toBe("4");
  })
});
