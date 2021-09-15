
//Math functions 
var num;

num = Math.round(3.89);
num = Math.floor(3.89);
num = Math.ceil(2.89);
num = Math.pow(4,4);
num = Math.sqrt(256);
num = Math.abs(-4);
num = Math.min(1,10,67,45,2);
num = Math.max(1,10,67,45,2);
num = Math.PI;
num = Math.E;

console.log(num);

//Hypotenuse 

var a = window.prompt("enter number for a");
var b = window.prompt("enter number for b");
var c;

c = Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
console.log("side c is",c);