

var randomnum;

//randomnum = Math.random()*10;
//randomnum = Math.floor(Math.random() * 10) + 1;

function random(min,max){
    return Math.floor(Math.random() * (min-max+1)+min)
}

randomnum = random(1,5);
console.log(randomnum);
randomnum = random(1,5);
console.log(randomnum);
randomnum = random(1,5);
console.log(randomnum);