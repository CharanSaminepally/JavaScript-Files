

class car{
    constructor(model,color){
        this.model = model;
        this.color = color;
    }
    drive(){
        console.log("you are driving the ",this.model);
    }
}

let car1 = new car("porsche","red");
let car2 = new car("maserati","purple");
let car3 = new car("bugatti","chiron");

let garage = [car1,car2,car3];

//console.log(garage[0].model);
//console.log(garage[1].model);
//console.log(garage[2].model);

for(i = 0;i < garage.length;i++){
    //console.log(garage[i].model);
    garage[i].drive();
}