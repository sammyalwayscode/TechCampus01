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
