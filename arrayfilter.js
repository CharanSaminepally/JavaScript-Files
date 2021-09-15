

let students = [16,17,18,19,20];

function checkage(age){
    if(age >= 18){
        return age;
    }
}

let adults = students.filter(checkage);

console.log(adults);
