import { Car } from './car';

describe('Car', () => {
  it('should create an instance', () => {
    expect(new Car("Ford", "F150", 4, 20000, 2023)).toBeTruthy();
  });
});
