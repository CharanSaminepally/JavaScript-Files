


let numbers = [1,5,6,8,21];

numbers.sort(function(x,y){
    return y - x;
});

console.log(numbers);

//using arrow function

console.log(numbers.sort((x,y) => y - x));



