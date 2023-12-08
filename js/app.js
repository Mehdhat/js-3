function addNumbers(a, b) {
    return a + b;
  }
  let num1 = 5;
  let num2 = 7;
  let result1 = addNumbers(num1, num2);
  console.log("Result of addition is:", result1);
  let num3 = 10;
  let num4 = 3;
  let result2 = addNumbers(num3, num4);
  console.log("Result of addition is:", result2);

let descriptiveWords = ["calm", "joyful", "energetic", "attractive", "gentle"];
function describeName() {
  let userName = prompt("Enter your good name:");
  if (userName) {
    let randomIndex = Math.floor(Math.random() * descriptiveWords.length);
    let randomAdjective = descriptiveWords[randomIndex];
    console.log(`The name ${userName} is ${randomAdjective}!`);
  } else {
    console.log("You didn't enter a name. Try again!");
  }
}
describeName();

let number1 = 10;
let number2 = 5;

let operator = "add";
function calculate(number1, number2, operator = "add") {
  if (operator === "add") {
    return number1 + number2;
  } else if (operator === "subtract") {
    return number1 - number2;
  } else {
    console.log("Invalid operator. Defaulting to addition.");
    return number1 + number2;
  }
}
console.log(`Result of ${number1} ${operator} ${number2}:`, calculate(number1, number2, operator));

let resultsArray = [];

for (let i = 0; i < 10; i++) {
  let value1 = i * 5;
  let value2 = i * i;
  function addValues(value1, value2) {
    return value1 + value2;
  }
  let result = addValues(value1, value2);
  resultsArray.push(result);
}
console.log("Final array:", resultsArray);


// let value = 1000;
// (function () {
//   let value = "Inside IIFE";
//   console.log("Local value inside IIFE:", value);
// })();
// let result = (function () {
//   let value = "Inside IIFE Expression";
//   return value;
// })();
// console.log("Result from IIFE Expression:", result);
// (function (paramValue) {
//   let value = "Inside Anonymous Function";
//   value = paramValue; // Assign the passed-in value
//   console.log("Value inside Anonymous Function:", value);
// })("Passed-in Value");


function calculateFactorial(num) {
    if (num === 0) {
      return 1;
    } else {
      return num * calculateFactorial(num - 1);
    }
  }
  let result = calculateFactorial(4);

  console.log(`Factorial result: ${result}`);
  
let start = 10;
function countdown(value) {
  console.log("Countdown:", value);
  if (value < 1) {
    return;
  }
  countdown(value - 1);
}

function countdown2(value) {
  if (value > 0) {
    console.log("Countdown 2:", value);
    return countdown2(value - 1);
  }
}

countdown(start);
countdown2(start);
let printArgument = function (arg) {
  console.log("Argument:", arg);
};
printArgument("Hello!");
function printArgumentDeclaration(arg) {
  console.log("Argument (Declaration):", arg);
}
printArgumentDeclaration("Hi!");
function countUpToTen(valuee) {
  if (valuee > 10) {
    return;
  }
  console.log("Count up:", valuee);
  countUpToTen(valuee + 1);
}
countUpToTen(1);
countUpToTen(5);

let maxValue = 5;
let solution = Math.floor(Math.random() * maxValue) + 1;
console.log("Solution:", solution);
let isCorrect = false;
while (!isCorrect) {
  let userGuess = Number(prompt(`Enter a number between 1 and ${maxValue}:`));
  if (userGuess === solution) {
    isCorrect = true;
    console.log("Congratulations! You guessed correctly!");
  } else {
    console.log(userGuess > solution ? "Too high!" : "Too low!");
  }
}

let counter = 0;
let step = 5;

do {
  console.log("Counter:", counter);
  counter += step;
} while (counter < 100);

let myWork = [];

for (let i = 1; i <= 10; i++) {
  let lesson = {
    name: `Lesson ${i}`,
    status: i % 2 === 0 ? true : false,
  };
  myWork.push(lesson);
}

console.log("Array of Objects:", myWork);

let myTable = [];
let rows = 10;
let cols = 3;
let a = 1;

for (let i = 0; i < rows; i++) {
  let tempTable = [];
  for (let j = 0; j < cols; j++) {
    tempTable.push(a++);
  }
  myTable.push(tempTable);
}

console.table("Table Generator:", myTable);

let table = [];
let numRows = 10;
let numCols = 3;
let count = 1;

for (let i = 0; i < numRows; i++) {
  let tempTable = [];
  for (let j = 0; j < numCols; j++) {
    tempTable.push(count++);
  }
  myTable.push(tempTable);
}

console.table("Table Generator:", table);


// let arrayis = [];
// for (let x = 0; x < 10; x++) {
//   arrayis.push(x);
// }
// console.log("Array:", arrayis);
// for (let z = 0; i < arrayis.length; z++) {
//   console.log("Using for loop:", arrayis[z]);
// }
// for (let item of arrayis) {
//   console.log("Using for...of loop:", item);
// }


// let objObject = {
//     prop1: "item1",
//     prop2: "item2",
//     prop3: "item3",
//   };
  
//   for (let key in objObject) {
//     console.log(`Property: ${key}, Item: ${objObject[key]}`);
//   }
  
//   let objArray = ["item1", "item2", "item3"];
  
//   for (let item of objArray) {
//     console.log("Array Item:", item);
//   }


//   let res = "";
// let skipnum = 3;
// for (let i = 0; i < 10; i++) {
//   if (i === skipnum) {
//     continue; 
//   }
//   res += i + " ";
// }
// console.log("Result with Continue:", res);
// res = "";
// for (let i = 0; i < 10; i++) {
//   if (i === skipnum) {
//     break; 
//   }
//   res += i + " ";
// }
// console.log("Result with Break:", res);

// let multiplicationTable = [];

// let valuesToMultiply = 5;

// for (let k = 1; k <= valuesToMultiply; k++) {
//   let tempRow = [];
//   for (let j = 1; j <= valuesToMultiply; j++) {
//     tempRow.push(i * j);
//   }
//   multiplicationTable.push(tempRow);
// }

// console.table("Multiplication Table:", multiplicationTable);


  
  