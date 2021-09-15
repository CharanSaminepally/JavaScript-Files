
/*
function test(){
    console.log("hola this is a text message!");
}
test();

let test1 = (test1 => console.log("hola!!!"))
test1();

test3 = () => console.log("hello world !");
test3();

test4 = () => "hello world this is text !";
console.log(test4());
*/

//******************//
/*
let hello;
let x = "yo";
let y = " hola hola";

//function expression

hello = function(x, y){
    return x + y + " hello world";
}
console.log(hello(x, y));

//arrow function

hello1 = x => console.log(x + y + " bruh!");
hello1(x , y);

*/
/////////////////////////////////

/*
let hello;
let x = "yo";
let y = "hola hola";

//function expression

hello = function(x, y){
    console.log(x);
    console.log(y);
}
hello(x, y);

//arrow function

hello1 = x => {
    console.log(x);
    console.log(y);
}
hello1(x , y);
*/
///////////////////////////////////////
//arraymap using arrow function
/*
let inr = [5,6,7,8,9];

let usd = inr.map(value => value *= 74);

console.log(inr);
console.log(usd);
*/
////////////////////////////////////
//array filter using arrow function

/*
let students = [16,17,18,19,20];

let adults = students.filter(age => age >= 18);

console.log(adults);
*/
//////////////////////////////
//array reduce using arrow function

let letters = ["H","O","L","A"];


let word = letters.reduce((total,lastletter) => total+lastletter);
console.log(word);
