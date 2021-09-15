

function makesize(size){

    return function(){
        document.body.style.fontSize = size + "px";
    }
}

function makefont(font){

    return function(){
        document.body.style.fontFamily = font ;
    }
}

let size20 = makesize(20);
let size30 = makesize(30);
let size40 = makesize(40);

let font1 = makefont("impact");
let font2 = makefont("helvetica neue");
let font3 = makefont("herculanum");

font1();
font2();
font3();
size40();

