

class car{

    constructor(company,model,price,year){
        this.company = company;
        this.model = model;
        this.year = year;
        this.price = price;

    }

    drive(){
        console.log(this.company+" "+this.model+" you are driving");
    }
    brake(){
        console.log(this.company+" "+this.model+" you applied brakes!!!");
    }
}

let car1 = new car("bmw","i8",200000,2020);
let car2 = new car("audi","a4",100000,2021);

console.log(car1.company);
console.log(car1.model);
console.log(car1.price);
console.log(car1.year);

console.log(car2.company);
console.log(car2.model);
console.log(car2.price);
console.log(car2.year);

car1.drive();
car2.brake();