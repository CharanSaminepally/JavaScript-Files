
//<h1 id="h1"></h1> - add this to html file above source

let message;

function displayconsole(output){
    console.log(output);
}
function displayonpage(output){
    document.getElementById("h1").innerHTML = output;
}

function setmessage(text ,callback){
    message = text;
    callback(message);
}
setmessage("hello dude!",displayonpage);
setmessage("hello dude!",displayconsole);