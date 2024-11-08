"use strict";
// Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.
// Sample Input 1:
// const car = new Car("Honda", "Civic", 2018);
// car.getCarAge();
// // Sample Output 1:
// 6 (assuming current year is 2024)
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getCarAge() {
        const currentYear = new Date().getFullYear();
        const year = currentYear - this.year;
        return `${year} (assuming current year is ${currentYear})`;
    }
}
// const car = new Car("Honda", "Civic", 2018);
// console.log(car.getCarAge())