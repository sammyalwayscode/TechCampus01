// Type Conversion

// Coverting String to Number
// let a = 10;
// let b = "15";
// let c = a + b;
// let newB = parseInt(b);
// let newC = parseInt(c);
// let newAdd = 342;

// console.log(typeof c, c);
// console.log(typeof c, c + newAdd);
// console.log(typeof a, a);
// console.log(typeof b, b);
// console.log(typeof newB, newB);
// console.log(typeof newC, newC);
// console.log(newC + newAdd);

//Converting number to string

// console.log("\n Number to string \n");
// let numOne = 234;
// let newNumOne = numOne.toString();
// console.log(typeof numOne, numOne);
// console.log(typeof newNumOne, newNumOne);

//Alerts, Prompt and Docunment.write

// const myName = prompt("What is your name?");
// alert("Hello " + myName);
// console.log("The user name is", myName);

// const age = prompt("What is your Age");
// const newAge = parseInt(age);
// console.log(typeof age, age);
// console.log(typeof newAge, newAge);

//[Task One]
//Write a program that adds any two numbers entered by a user

// const firstNum = parseInt(prompt("Enter Your first Number"));
// const secondNum = parseInt(prompt("Enter you second Number"));
// const add = firstNum + secondNum;
// const performOperation = parseInt(firstNum + secondNum);
// alert("Your total number is: " + add);

//[Task Two]
//Write a code that accepts two values from the user and indicats the highest number

// const valueOne = parseInt(prompt("Enter your first number"));
// const valueTwo = parseInt(prompt("Enter your Second number"));

// valueOne > valueTwo
//   ? alert(valueOne + " Is the higher number")
//   : alert(valueTwo + " Is the higher number");

// [String Object]

let myName = "Olorunda Samuel";
let myProfile = "rememberance";
let myNameLenght = myName.length;
let makeLower = myName.toLowerCase();
let makeUpper = myName.toUpperCase();
let myIndex = myName.indexOf("o");
let myTrim = myName.trim();
let myConcat = myName.concat(" Is a good boy");
let mySplit = myProfile.split("e", 4);

console.log(myNameLenght);
console.log(makeLower);
console.log(makeUpper);
console.log(myIndex);
console.log(myTrim);
console.log(myConcat);
console.log(mySplit);
