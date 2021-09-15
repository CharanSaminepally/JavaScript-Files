var human1 = {
    name: "anakin",
    age: 25,

    eat : function(){
        console.log("anakin is eating!");
    },
    fight : function(){
        console.log("anakin is fighting with storm troopers!!!");
    },
    sleep : function(){
        console.log("anakin is sleeping*");
    }
};

var human2 = {
    name: "obiwan",
    age: 40,

    eat : function(){
        console.log("obiwan is eating!");
    },
    fight : function(){
        console.log("obiwan is fighting with Darthvader!!!");
    },
    sleep : function(){
        console.log("obiwan is sleeping*");
    }
};

human1.name //dot notation
human1['name'] //bracket notation

console.log(human1.name);
console.log(human1.age);
human1.eat();
human1.fight();
human1.sleep();

console.log(human2.name);
console.log(human2.age);
human2.eat();
human2.fight();
human2.sleep();