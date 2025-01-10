// Conditions
// if (15 > 10) {
//   console.log("Na 15 big pass");
// }

// if (15 > 10) {
//   console.log("15 is the gratest");
// } else {
//   console.log("Na Lie");
// }

// if (10 > 20) {
//   console.log("The first condition is correct");
// } else if (10 == 20) {
//   console.log("The second condition is correct");
// } else if (10 === 20) {
//   console.log("The Third condition is correct");
// } else {
//   console.log("This is an invalid Number");
// }

// let numOne = parseInt(prompt("Enter your first Value"));
// let numTwo = parseInt(prompt("Enter your second value"));
// let numThree = parseInt(prompt("Enter your second value"));
// let numFour = parseInt(prompt("Enter your second value"));

// if (numOne > numTwo) {
//   alert(`${numOne} 1 is the greatest number`);
// } else {
//   alert(`${numTwo} 2 is the greatest Number`);
// }

// if (
//   numOne === Number &&
//   numOne > numTwo &&
//   numOne > numThree &&
//   numOne > numFour
// ) {
//   alert(`${numOne} 1 is the greatest number`);
// } else if (numTwo > numOne) {
//   alert(`${numTwo} 2 is the greatest Number`);
// } else if (numOne === numTwo) {
//   alert("You have equal values");
// } else {
//   alert("Invalid value");
// }

// 1. Write a javascript program to tell a user the highest of four numbers

// 2. Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.

3; //Write a program to tell a student his Grade once the student enters his score: 75 - 100 should be Grade A, 60 - 74 = Grade B, 50 - 59 = Grade C, 40 - 49 = Grade D, 35 - 39 = Grade E 0 - 34 = Olodo 🥲 You failed

// 4. Write a Program that caculate the body mass index and categorise it the formular for the BMI weight is: Weight / (height * height)

//Loops
// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

// for (let j = 300; j <= 500; j++) {
//   console.log(j);
// }

// for (let k = 1; k <= 12; k++) {
//   console.log(`2 x ${k} = ${2 * k}`);
// }

// for (let i = 1; i <= 12; i++) {
//   console.log(`Mutiples for No ${i}`);
//   for (let k = 1; k <= 12; k++) {
//     console.log(`${i} x ${k} = ${i * k} `);
//   }
// }

// let i = 0;

// while (i < 10) {
//   console.log(i);
//   i++;
// }

// for (var i = 1; i <= 45; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 == 0) {
//     console.log("Fizz");
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   }
// }

// Function

//Asyncronous Javascript

// let p = new Promise((resolve, reject) => {
//   let a = 1 + 3;
//   if (a == 2) {
//     resolve("Success");
//   } else {
//     reject("Failed");
//   }
// });

// p.then((message) => {
//   console.log("This is the THEN Message", message);
// }).catch((error) => {
//   console.log("This is the CATCH Message", error);
// });

// setTimeout(() => {
//   console.log("This is task 1");
// }, 2000);
// console.log("Task 2");
// console.log("Task 3");
// console.log("Task 4");

// async function fetchData() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await response.json();
//   return data; // Returns a promise that resolves with `data`
// }

// // Usage
// fetchData().then((result) => {
//   console.log(result); // Logs the resolved value of `data`
// })

// Fetch data from an API
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     // Convert the response to JSON
//     return response.json();
//   })
//   .then((data) => {
//     // Handle the data from the response
//     console.log("Data received:", data);
//   })
//   .catch((error) => {
//     // Handle any errors that occur
//     console.error("Error:", error);
//   });

//Teach Fetch
// fetch("c")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// const getData = () => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log("An Error Occoured", error));
// };

// const getData = async () => {
//   const responce = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await responce.json();
//   return data;
// };

// getData().then((res) => {
//   console.log(res[0].name);
// });

// const getData = async () => {
//   const responce = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = responce.json();
//   return data;
// };

// getData().then((res) => {
//   console.log(res);
// });

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => console.log(data[6]));

const myArray = ["Jide", "Kola", "Bisi", "Shade", "Ruth"];
// console.log(myArray[0]);
// console.log(myArray[2]);

// const [a, , b] = myArray;
// console.log(a, b);

// const newArray = [...myArray, "Bola", "James", "Seun", "Akin"];
// console.log(newArray);

// const testFun = (a, b) => {
//   return [a + b, a * b, a / b];
// };

// const [add, sub, divide = "No Value"] = testFun(2, 3);
// console.log(add);
// console.log(sub);
// console.log(divide);

const me = {
  name: "Jide",
  dob: "20 oct 2024",
  add: "Juba Street",
  loc: {
    lat: 2333,
    lont: 733,
  },
};

const { name } = me;

console.log(name);
