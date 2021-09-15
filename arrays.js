var cars = ["mustang","jaguar","bmw","porsche","ferrari"];

console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);
console.log(cars[4]);

var numberofcars = cars.length;
var lastcar = cars[cars.length-1];

cars.sort(); //sorts alphabetically
//cars.reverse(); 

cars.push("tesla"); //adds an element
//cars.pop(); //removes an element

console.log(cars);
console.log(numberofcars);
console.log(lastcar);