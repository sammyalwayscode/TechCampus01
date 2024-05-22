console.log("Up and Running");

//Declear an objects that contains the data of students in pry 5. Data needed is Surname, Other Name, State, Date Of Birth, Age, Address, Adminsin No, PhoneNo

const pryFiveStudent = {
  surname: "Olorunda",
  otherName: "Samuel Oluwaseyi",
  state: "Kwara",
  dateOfBirth: "10th May 2020",
  age: 4,
  address: "232 Muritala Way, Yaba",
  adminNo: 23552,
  phoneNo: 9032676595,
  textBook: {
    english: "Lantern",
    math: "New General Math",
  },
};

let surname = pryFiveStudent.surname;
let other = pryFiveStudent.otherName;

let allName = pryFiveStudent.surname + " " + pryFiveStudent.otherName;
// let allName = surname + " " + other;
// console.log(allName);
// console.log(pryFiveStudent.phoneNo);

const pre = 234;
const phoneNo = pryFiveStudent.phoneNo;
const join = pre.toString() + phoneNo;
const conv = parseInt(join);
// console.log("+", conv);

// pryFiveStudent.state = "Lagos";
// console.log(pryFiveStudent.textBook.math);

pryFiveStudent.state = pryFiveStudent.state.concat(" State");
const myState = pryFiveStudent.state;
console.log(myState);
console.log(pryFiveStudent);
