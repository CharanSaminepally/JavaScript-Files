

class car{

    static numberofcars = 0;

    static beginrace(){
        console.log("the race is being started ***");
    }

    constructor(model){
    this.model = model;
    car.numberofcars += 1;
    }
}

let car1 = new car("BMW");
let car2 = new car("Corvette");

console.log(car.numberofcars);
car.beginrace();