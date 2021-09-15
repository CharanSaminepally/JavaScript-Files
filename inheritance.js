


class animal{

    constructor(){
        this.alive = true;
    }

    eat(){
        console.log("the animal is eating***");
    }
}
class Rabbit extends animal{
    run(){
        console.log("the rabbit is running!");
    }
}
class Fish extends animal{
    swim(){
        console.log("the fish is swimming!");
    }
}
class Hawk extends animal{
    fly(){
        console.log("the hawk is flying!");
    }
}
let rabbit = new Rabbit();
let fish = new Fish();
let hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();
rabbit.run();
fish.swim();
hawk.fly();
