

//closure = a function with preservesed data
//          gives you access to the outer function's scope
//          from an inner function


let score = function(){

    let points = 0;

    return function(){
        points += 1;
        return points;
    }
}();

console.log(score());
console.log(score());
console.log(score());