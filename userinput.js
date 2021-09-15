
//add this to html file above script line
/*
    <label>Type your name : </label><br>
    <input type ="text" id="myText"><br>
    <button type ="button" id="myButton">submit</button>
*/

//******************************//

/*var text = window.prompt("what's your name :");
console.log("hello "+text);*/

document.getElementById("myButton").onclick = function(){
    var name = document.getElementById("myText").value;
    console.log("hello",name);

}







/*

//html file content

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <h1>hello there!</h1>

    <label>Type your name : </label><br>
    <input type ="text" id="myText"><br>
    <button type ="button" id="myButton">submit</button>


    <script src = "userinput.js"></script>

</body>
</html>


*/
