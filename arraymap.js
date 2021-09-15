
let inr = [5,6,7,8,9];

function tousd(value){

    value *= 74;
    return value;
}

let usd = inr.map(tousd);

console.log(inr);
console.log(usd);