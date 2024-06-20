//Writ a javascript program that tells a user if he/she is legible to drive
// (condition) ? (if true show this block) : (if false show this block)

const userAge = 11;

// const driveCheck =
//   userAge >= 18 ? "You are legible to vote" : "You cannot Vote";
// console.log(driveCheck);

// if (condition) {
//   ("If True");
// } else {
//   ("If False");
// }

if (userAge >= 18) {
  //   console.log("You are ledigible to vote");
} else {
  //   console.log("You are not legible to vote");
}

// write a program to log a user in if the user is logged in and is an admin

// const isLoggedIn = false;
// const isAdmin = false;

// if (isLoggedIn || isAdmin) {
//   console.log("You can access the admin panell");
// } else {
//   console.log("Sorry you cannot access the admin panell");
// }
// if (isLoggedIn && isAdmin) {
//   console.log("You can access the admin panell");
// } else {
//   console.log("Sorry you cannot access the admin panell");
// }

// const userPassword = "bestMe";
// const userConfirmPassword = "bestMe";

// if (userPassword === userConfirmPassword) {
//   console.log("You can proceed with your registeration");
// } else {
//   console.log("Password Do not Match");
// }

// Write a program to determine the greater of two numbers.

// const numOne = 74;
// const numTwo = 40;

// if (numOne > numTwo) {
//   console.log(numOne + "Is The greatest Number");
// } else {
//   console.log(numTwo + "Is the greatest Number");
// }

// Write a program to determine the highest of three numbers.

// const numOne = 12;
// const numTwo = 54;
// const numThree = 23;

// if (numOne > numTwo && numOne > numThree) {
//   console.log(numOne + "Is the highest number");
// } else if (numTwo > numOne && numTwo > numThree) {
//   console.log(numTwo + "Is the Highest Number");
// } else if (numThree > numTwo && numThree > numOne) {
//   console.log(numThree + "Is the Highest Number");
// } else {
//   ("All Numbers are equal");
// }

// 1. Write a program that determines whether a given number is positive or negative.
// 2. Write a program that checks if a number is even or odd.
// 3. Write a program to determine the greater of two numbers.
// 4. Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.
// 5. Write a program that calculates a discount based on the purchase amount.Prices equal or over 100 discount have a discount of 20. Prices equal or over 50 have a discount of 10. Otherwise discount is 0

// console.log("We are ready");

// Prompt: Accept value from a user, Accepts only string values
// Alert: Sends a message to the user

// const userName = prompt("What is your age ");
// alert("Your name is " + userName);

// const testNum = "500";
// const convertValue = parseInt(testNum);
// console.log(typeof testNum);
// console.log(typeof convertValue);
// console.log(typeof testNum + " " + testNum);

// const myNumOne = parseInt(prompt("Enter your first Number"));
// const muNumTwo = parseInt(prompt("Enter Your second Number"));

// console.log(myNumOne + muNumTwo);

// 1. Write a program that determines whether a given number is positive or negative.

// const userNumber = parseInt(prompt("Enter You Number"));

// if (userNumber > 0) {
//   alert(userNumber + "Is a Postive Number");
// } else {
//   alert(userNumber + "Is a Negative number");
// }

// 2. Write a program that checks if a number is even or odd.'

// const myUserNmber = parseInt(prompt("Enter you number value"));

// if (myUserNmber % 2 === 0) {
//   alert(myUserNmber + " " + "Is an Even Number");
// } else {
//   alert(myUserNmber + " " + "Is an Odd Number");
// }

// 5. Write a program that calculates a discount based on the purchase amount.Prices equal or over 100 user have a discount of 20. Prices equal or over 50 user have a discount of 10. Otherwise discount is 0

// const cashierPrice = parseInt(prompt("How much Item was purchase"));

// if (cashierPrice >= 100) {
//   alert("You have a 20% Discount");
// } else if (cashierPrice >= 50) {
//   alert("You have a 10% Discount");
// } else {
//   alert("You have not discount for this amount");
// }

// 4. Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.

// 3. Write a program to determine the greater of two numbers.

// Objects in Javascript

// const myObject = {
//   obj1: {
//     name: "Shade Williams",
//     age: 20,
//     dob: "20th of January 2010",
//     admissionNo: 6467383,
//   },
//   obj2: {
//     name: "Shade Williams",
//     age: 20,
//     dob: "20th of January 2010",
//     admissionNo: 6467383,
//   },
//   obj3: {
//     name: "Shade Williams",
//     age: 20,
//     dob: "20th of January 2010",
//     admissionNo: 6467383,
//   },
// };

// console.log(myObject.obj2.age);

// function addTwo(numOne, numTwo) {
//   const addition = numOne + numTwo;
//   return addition;
// }

// console.log(addTwo(3, 5));
// console.log(addTwo(23, 96));

// const myFunction = function(){

// }
const myFunction = (mYnumOne, myNumTwo) => {
  if (mYnumOne > myNumTwo) {
    console.log("NumOne is the Gratest");
  } else {
    console.log("Num Two is the graters");
  }
};

console.log(myFunction(12, 3));
