

//add - <h1 id="myrectangle"></h1> in html file

var symbol =window.prompt("Enter a symbol");
var rows = window.prompt("enter # of rows");
var columns = window.prompt("enter # of columns");

for(let i=0;i < rows;i++){

    for(let j=0;j<columns;j++){
        document.getElementById("myrectangle").innerHTML += symbol;
    }
    document.getElementById("myrectangle").innerHTML += "<br>";
}