
let letters = ["H","O","L","A"];

function combine(total,lastletter){
    return total+lastletter;
}
let word = letters.reduce(combine);
console.log(word);