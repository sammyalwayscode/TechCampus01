// Operators in Javascript
console.log("Javascript Operators \n");
// 1. Arithemtic Operators
console.log("Arithemetic Operators \n");
let x = 22;
let y = 57;
let answer = x + y;

console.log(answer);

// 2. Assignment Operators
let ab = 10;
ab += 30; //ab = 10 + 30
console.log(ab);

// 3. Comparsion Operators
let valueOne = "Jide";
let valueTwo = "Jide";
let compersion = valueOne === valueTwo;
console.log(compersion);

// 4. Logical Operators
let isStudent = true;
let isRegistered = !false;

let allowStudent = isStudent && isRegistered;
console.log(allowStudent);

// Unary Operator

let myCounter = 2;
myCounter++;
console.log(myCounter);

// Ternary Operator

let num = 6;
let numTest = num > 10 ? "Yes" : "No";
console.log(numTest);

// Write a program to test if a person is legible to drive

let age = 16;
let notAge = age < 18 ? "No" : "Yes";
console.log("Your answer is:", notAge);

let myAge = 18;

myAge >= 18
  ? console.log("You are legible to drive")
  : console.log("You are not legible to drive");

let myAge2 = 12;
let checkAge =
  myAge2 >= 18 ? "You are legible to drive" : "You are not legible to drive";
console.log("The test Says:", checkAge);

// write a program to log a user in if the user is logged in and is an admin

const isLoggedIn = false;
const isAdmin = true;
const DOB = "April";

(!isLoggedIn && isAdmin) || DOB === "May"
  ? console.log("You can access the Admin Panell")
  : console.log("Sorry! You cannot access the admin pannel");

// Conditions

// Logical Operator

// const isUnifom = true;
// const isBooks = false;
// const isSchoolFee = !true;

// console.log((isUnifom && isSchoolFee) || isBooks);

//Unary Operator

// let a = 3;
// a++;
// console.log(a);

// Tunary Operator

// condition ? true : false
// console.log(12 > 5);

//Write a javascript program that tell the user if he/she is liable to vote in nigeria

// let age = 20;
// let votersCard = false;
// let check =
//   age >= 18 && votersCard ? "You are liable to vote" : "Try again next year";

// console.log(check);

// let age = parseInt(prompt("Enter Your Age"));
// let voterCard = prompt("Do you have a voters card").toLowerCase();
// const ceckCondition =
//   age >= 18 && voterCard === "yes" ? "You can vote" : "Go your mama house";

// alert(ceckCondition);

// const specialCharacter =  "!" || "@" || "." || "#"

// Write a program that tells a user if a number is Positive or Negative
// Write a program to tell if a number is even or odd

// let num = parseInt(prompt("Enter Your Number"));
// alert(num > 0 ? "Postive" : "Negative");

// let num = parseInt(prompt("Enter Your Number"));
// alert(num % 2 === 1 ? "Odd" : "Even");

// for (let i = 0; i < 101; i++) {
//   console.log("I is:", i);
// }

// let i = 0;

// while (i < 10) {
//   console.log("While", i);
//   i++;
// }

// for (let i = 0; i < 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// let i = 0;

// while (i <= 20) {
//   if (i % 2 === 0) {
//     console.log("While", i);
//   }
//   i++;
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(`3 x ${i} = ${3 * i}`);
// }
