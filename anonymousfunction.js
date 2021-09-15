
//anonymous fucntion is a func. which has no name and can be used only once.

/*
(function(){
document.getElementById("h1").innerHTML = "hola !!!";
})();
*/

//**********

let task = function(){
    document.getElementById("h1").innerHTML = "hola !!!";
    }

//setTimeout(task,1000);

//************ */

setTimeout(function(){
    document.getElementById("h1").innerHTML = "Bonjour!!!";
    },1000);