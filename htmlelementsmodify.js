
/*

//add this to html file above the script line

<h1>hello there!</h1>
    <h1 id = "myH1">hello world!</h1>
    <p class = "myP">this is sentence 1</p>
    <p class = "myP">this is sentence 2</p>
    <button id="mybutton">click me 1</button>
    <button>click me 2</button>
    <button>click me 3</button>
*/


document.querySelector("#mybutton").onclick = function(){

    const h1 = document.querySelector("#myH1");
    const underline =document.createElement("u");
    underline.innerText= " bye world";
    h1.innerText = "";
    h1.append(underline);

    const p = document.querySelectorAll(".myP");
    //p[0].innerText = "whoooooa!!!";
    p.forEach(x => x.innerText = "bonjour!!!");

    const buttons = document.querySelectorAll("button");
    //buttons[0].remove();
    buttons.forEach(x => x.remove());
}