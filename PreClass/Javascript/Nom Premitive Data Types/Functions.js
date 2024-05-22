function greet() {
  return "Hello";
}

let str = greet();
console.log(str);

let add = function (num1, num2) {
  let result = num1 + num2;
  return result;
};

let ddd = add(2, 3);
console.log(ddd);

function checkNum(num) {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

let result = checkNum(0);
console.log(result);
