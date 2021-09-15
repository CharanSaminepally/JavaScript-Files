

//setter ***
/*
let user = {
    
    firstname : " ",
    lastname : " ",
    set first(value){
        this.firstname = value.toUpperCase();
    },
    set last(value){
        this.lastname = value.toUpperCase();
    },
    fullname : function(){
        return this.firstname+" "+this.lastname;
    }
};

user.first = "ben";
user.last = "tennyson";

console.log(user.fullname());
*/
// getter and setter

class user  {
    constructor(first,last){
        this.first = first;
        this.last = last; 
    }
    
    set first(value){
        this.firstname = value.toUpperCase();
    }
    set last(value){
        this.lastname = value.toUpperCase();
    }
    get fullname(){
        return this.firstname+" "+this.lastname;
    }
};

let user1 = new user("cedric","diggory");
let user2 = new user("emma","watson");

console.log(user1.fullname);
console.log(user2.fullname);
