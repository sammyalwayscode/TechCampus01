const myStringArray = ["James", "John", "Peter", "Kola"];
const myNumberArray = [32, 63, 41, 68, 23];

// To fecth a particular array data
console.log(myStringArray[1]);
console.log(myNumberArray[3]);

//To re-assign a value
myStringArray[2] = "Bimbo";
//To add to the array because the index position given do not exist
myStringArray[4] = "Jude";

// Array Methods
console.log(myNumberArray.length);
console.log(myNumberArray.push(75));
console.log(myStringArray.pop());
console.log(myNumberArray.shift());
console.log(myNumberArray.unshift(98));

console.log(myStringArray);
console.log(myNumberArray);
