
//add <h1 id="h1"></h1> - this to index.html file

/*
function hello(){
    console.log("hello , hi this is charan!");
}
hello();
*/
let text = function(){console.log("anyways !!! , Hi! ");}
let car = function(){document.getElementById("h1").innerHTML = "hola ! , bonjour !"}
//car();

output(car);
output(text);

function output(func){
    func();
}