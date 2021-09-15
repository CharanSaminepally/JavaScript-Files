

var text = ("hi there this is charan");
var text1 = ("i am 18 years old");
var text2 = ("i am learning cse*");
var number = "123-123-123";

console.log(text.length);
console.log(text.charAt(4));
console.log(text.indexOf("c"));
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.trim()); //removes spaces before/after text


var firsttext = text.slice(0,9);//(0,text.indexOf("i"))
console.log(firsttext);

var lasttext = text.slice(0,text.lastIndexOf(" ")+1);
console.log(lasttext);

var finaltext = text1.concat(" ",text2);
console.log(finaltext);

number = number.replaceAll("-","");
console.log(number);