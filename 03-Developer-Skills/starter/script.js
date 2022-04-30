// Remember, we're gonna use strict mode in all scripts now!
"use strict";

////////////////////////////////////
//Setting up Prettier and VS Code

let x = 23;
if (x === 23) console.log(23);

let calcAge = (birthYear) => 2037 - birthYear;

console.log(calcAge(1991));
console.log(calcAge(1950));

////////////////////////////////////
//Using Google, Stackoverflow, and MDN

//We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

let temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

function calcTempAmplitude(arr) {
  let maxTemp = 0;
  let minTemp = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      continue;
    } else if (arr[i] > maxTemp) {
      maxTemp = arr[i];
    } else if (arr[i] < minTemp) {
      minTemp = arr[i];
    }
  }
  console.log(minTemp, maxTemp, minTemp - maxTemp);
}

calcTempAmplitude(temperatures);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

let temps1 = [3, 5, 1];
let temps2 = [9, 0, 5];

let temperatures1 = temps1.concat(temps2);
console.log(temperatures1);

calcTempAmplitude(temperatures1);

////////////////////////////////////
// Coding Challenge #1
// Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]
// GOOD LUCK 😀

let data1 = [17, 21, 23];
let data2 = [12, 5, -5, 0, 4];

function printForecase(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]}ºC in ${i + 1} days`);
  }
}

printForecase(data1);
printForecase(data2);
