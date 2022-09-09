/*Prints "Hello World!" onto the console*/
console.log("Hello World!");

console.log("");

/*Length Method*/
let text = "The fox jumped over the lazy dog";

console.log(text);
console.log("This string method returns the length of the string above: " + text.length);

console.log("");

/*Slice Method*/
let meat = "Steak, Pork, Lettuce, Sausage"

console.log(meat);
console.log("The slice method extracts a string and returns it in a new string like this: " + meat.slice(13,20));

console.log("");

/*Replace Method*/
let energy = "I currently feel energised!";

console.log("The replace method takes a specificed value and replaces it with another value")
console.log(energy);

function replace() {
    console.log(energy.replace("energised!","sleepy..."));
}

console.log("");