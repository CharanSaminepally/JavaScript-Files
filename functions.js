
/*function hellofunction (name,age){

    console.log("hello i am",name);
    console.log("i am ",age,"years old");

};
hellofunction("charan",18);
console.log("Fine, Bye!");
*/


function tocelsius(f){

    return (f-32) * (5/9);
}

function tofaren(c){

    return (c * 9/5) + 32;
}

var temp = tofaren(100);

console.log("the temp is",temp,"degrees");