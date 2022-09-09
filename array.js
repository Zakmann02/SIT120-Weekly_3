/*String Array*/
console.log("String Array")
const crew = ["Luffy", "Zolo", "Nami", "Usopp", "Sanji"];
console.log(crew);

console.log("");

/*Number Array*/
console.log("Numbers Array");
const numbers = [59, 23, 2];
console.log(numbers);

console.log("");

/*To string method*/
console.log("Below will display the 'to string method', which returns an array as a comma seperated string")
console.log(crew.toString());

console.log("");

/*Pop method*/
const crewdemo = ["Luffy", "Zolo", "Nami", "Usopp", "Sanji"];
console.log(crewdemo);
console.log("Below will display the pop method, which removes the last element from an array")
console.log(crewdemo.pop());

console.log("");

/*Push method*/
const numbersdemo = [59, 23, 2];
console.log(numbersdemo);
console.log("Below will demonstrate the push method, which adds a new element at the end of an array");
console.log(numbersdemo.push(1005));

console.log("");

/*Merging Arrays*/
const join = crew.concat(numbers);
console.log("Below demonstrates merging arrays, which joins two together into a new array.")
console.log(join);

console.log("");

/*Array Slice Method*/
const slice = [crew.slice(2)];
console.log("Below demonstrates the array slice method, which creates a new array "  
+ "by slicing an existing starting from a specific element");
console.log(slice);
