// function sayHello(name) {
//   let userName = name;
//   return userName;
// }

// console.log(sayHello("Samel"), sayHello("Jaco"));

// let yourName = function (enterYourName) {
//   let userEnter = `My Name is ${enterYourName}`;
//   return userEnter;
// };

// console.log(yourName("Kunle"));

// let myAdd = (numOne, numTwo) => {
//   let addtion = numOne + numTwo;
//   return addtion;
// };

// console.log(myAdd(33, 45));

// // let valueOne = parseInt(prompt("Enrtt yout value"));
// // let valueTwo = parseInt(prompt("Enrtt yout second value"));

// // alert(myAdd(valueOne, valueTwo));

// const userNumber = (userNum) => {
//   if (userNum > 0) {
//     return "Positive";
//   } else if (userNum < 0) {
//     return "Negative";
//   } else {
//     return "Zero";
//   }
// };

// // const enterNum = parseInt(prompt("Enter an Num"));
// // userNumber(enterNum);
// console.log(userNumber(33));

// console.log(userNumber(98));

// // write a function that return the heighest of three numbers

// const heightNum = (num1, num2, num3) => {
//   if (num1 > num2 && num1 > num3) {
//     return alert(`${num1} is the highest Number`);
//   } else if (num2 > num1 && num2 > num3) {
//     return alert(`${num2} is the highest Number`);
//   } else {
//     return alert(`${num3} is the highest`);
//   }
// };

// const promptOne = parseInt(prompt("Enter Your first Number"));
// const promptTwo = parseInt(prompt("Enter Your Second Number"));
// const promptThree = parseInt(prompt("Enter Your Third Number"));

// heightNum(promptOne, promptTwo, promptThree);

// const addThreeNum = (num1, num2, num3 = 0) => {
//   let performAddition = num1 + num2 + num3;
//   console.log(num1, num2, num3);
//   return performAddition;
// };

// console.log(addThreeNum(23, 54, 53));

//Methods

const aboutMe = {
  name: "Peter Obi",
  age: 30,
  gender: "male",
  placesLived: {
    state1: "Ondo",
    state2: "Lagos",
    state3: "Abuja",
  },
  vot: (yourName) => {
    let greet = `Thanks For Watching ${yourName}`;
    return greet;
  },
};

// console.log(aboutMe.placesLived.state1.toUpperCase());

// console.log(aboutMe.vot("Sammy"));

// a JavaScript function that takes two integers: one representing minutes and the other representing hours. The function will convert both values to seconds and return the total number of seconds.

const secondsConverter = (hours, minutes) => {
  if (hours > 24 || minutes > 60) {
    alert("Invalid Input: You time should not exceed 24 hours");
  }

  const convertHourToSec = hours * 3600;
  const convertMinToSec = minutes * 60;
  const totalSec = convertHourToSec + convertMinToSec;

  return alert(
    `Hours In Sec: ${convertHourToSec} and hours i n minutes: ${convertMinToSec} threrfore your total seconds is: ${totalSec}`
  );
};

const userHourPrompt = parseInt(prompt("Hours:"));
const userMinPrompt = parseInt(prompt("Minutes:"));

secondsConverter(userHourPrompt, userMinPrompt);
