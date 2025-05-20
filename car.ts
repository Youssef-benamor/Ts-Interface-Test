// 1. Define the interface
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

// 2. Create a class that implements the interface
class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // 3. Implement the start method
  start(): void {
    console.log("Car engine started");
  }
}

// 4. Create an instance and call the start method
const myCar = new Car("Toyota", "Corolla", 2022);
myCar.start(); // Should log: "Car engine started"
