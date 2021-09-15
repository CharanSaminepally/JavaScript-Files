
/*
for(let i=0;i<=10;i++){
    console.log(i)
}
for(let i=10;i>=0;i--){
    console.log(i)
}
console.log("happy new year");
*/

//for in loop

let letters = ["H","E","L","l","O"];

for (let i in letters){
    console.log(letters[i]);
}
//******//
let car = {             //object
    name:"bmw",
    model:"i8",
    price:10000000,
    year:2020
};
for (let pro in car){
    console.log(car[pro]);
}