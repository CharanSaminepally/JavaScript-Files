

let user = "charan";

/*
let firstletter = user.charAt(0);
firstletter = firstletter.toUpperCase();
user = firstletter + user.slice(1);
*/

user = user.charAt(0).toUpperCase()+user.slice(1);
console.log(user);