
function jump(){
    console.log("you jump!");
}
function kick(){
    console.log("you kicked!");
}
function fight(){
    console.log("you are fighting!");
}
function punch(){
    console.log("you are punching!");
}

let actions = [jump,kick,fight,punch];


for (i = 0;i < actions.length;i++){
    actions[i]();
}

actions.forEach(func => func());