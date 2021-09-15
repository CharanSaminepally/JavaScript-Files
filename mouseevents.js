
//add - <div id="myDiv"></div> - to html file above script line


const div = document.querySelector("#myDiv");


div.style.backgroundColor = "yellow";
div.style.width = "200px";
div.style.height = "200px";
/*
div.addEventListener("click", e=> {
    console.log("you clicked the mouse!");
    div.style.backgroundColor = "brown";
})
*/

div.addEventListener("mousedown", e=> {
    console.log("you clicked the mouse!");
    div.style.backgroundColor = "orange";
})

div.addEventListener("mouseup", e=> {
    console.log("you released the mouse!");
    div.style.backgroundColor = "pink";
})

div.addEventListener("dblclick", e=> {
    console.log("you doubleclicked the mouse!");
    div.style.backgroundColor = "red";
})

div.addEventListener("contextmenu", e=> {
    console.log("you opened the menu!");
    div.style.backgroundColor = "blue";
})

div.addEventListener("mouseover", e=> {
    console.log("you entered the square!");
    div.style.backgroundColor = "grey";
})

div.addEventListener("mouseleave", e=> {
    console.log("you left the square!");
    div.style.backgroundColor = "black";
})

div.addEventListener("mousemove", e=> {
    console.log("you are in the square!");
    div.style.backgroundColor = "green";
})


