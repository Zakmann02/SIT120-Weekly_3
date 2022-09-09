/*Convert to upper case method*/
let voice = "this is my inside voice";

console.log("The function below will demonstrate conversion to upper case")
console.log(voice);

function upper() {
    console.log(voice.toUpperCase());
}

console.log("");

/*Trim Method*/
let example1 = "            Hello World!            ";
let example2 = example1.trim();

console.log("Below will demonstrate how trim method removes whitespace from a string");
console.log(example1);
console.log(example2)
console.log("Length text1 = " + example1.length);
console.log("Length text2 = " + example2.length);