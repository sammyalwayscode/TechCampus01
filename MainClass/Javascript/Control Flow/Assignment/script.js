//Writa a program to tell if a number is an Odd or even Number

// const userInput = parseInt(prompt("Enter your value"));

// if (userInput % 2 === 0) {
//   alert(userInput + "This is an Even Number");
// } else {
//   alert(userInput + "This is an Odd number");
// }

// Write a program that greets the user based on the time of the day

let userInput = parseFloat(prompt("What is the time of the Day"));

if (userInput < 12) {
  alert("Good Morning");
} else if (userInput < 16 && userInput >= 12) {
  alert("Good Afternoon");
} else if (userInput >= 16 && userInput < 23.59) {
  alert("Good Evening");
} else alert("enter a valid time");

2;
