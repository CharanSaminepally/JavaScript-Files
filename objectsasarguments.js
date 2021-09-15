

class car{

    constructor(model,color){
        this.model = model;
        this.color = color;
    }
}
function changecolor(car, newcolor){
    car.color = newcolor;
}

let car1 = new car("corvette","brown");
let car2 = new car("audi","maroon");

changecolor(car1,"purple");
changecolor(car2,"yellow");

console.log(car1.color,car1.model);
console.log(car2.color,car2.model);