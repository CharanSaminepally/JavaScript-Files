

class vehicle{
    drive(){
        console.log("you are driving the vehicle");
    }
}

class car extends vehicle{
    drive(){
        console.log("you are driving the car");
    }
}
class racecar extends car{
    drive(){
        console.log("you are driving the racecar!");
    }
}
let car1 = new racecar();

car1.drive();