

var total = 0;
var cart = [5,6,7,8,9];

function checkout(element){
    total += element;
}

cart.forEach(checkout);

console.log(total);