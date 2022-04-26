////////////////////////////////////
// Functions

'use strict';

let hasDriversLicense = false;
let passTest = true;

if (passTest) {
    hasDriversLicense = true;
}

if (hasDriversLicense) {
    console.log('I can drive :D');
}

// let interface = 'Audio';
// let private = 534;

////////////////////////////////////
// Functions

function logger() {
    console.log('My name is Jones');
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    let juice = `Juice with ${apples} apples, and ${oranges} oranges.`
    return juice;
}

let appleJuice = fruitProcessor(5, 0)
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

let appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

let num = Number('23')


// LECTURE: Functions 
// 1. Write a function called 'describeCountry' which takes three parameters: 
// 'country', 'population' and 'capitalCity'. Based on this input, the 
// function returns a string with this format: 'Finland has 6 million people and its 
// capital city is Helsinki' 
// 2. Call this function 3 times, with input data for 3 different countries. Store the 
// returned values in 3 different variables, and log them to the console

function describeCountry(country, population, capitalCity) {
    console.log(`${country} has ${population} million people and it's capital city is ${capitalCity}`);
}

let finland = describeCountry('Finland', 6, 'Helsinki')
let usa = describeCountry('United States of America', 329.5, 'Washington D.C.')
let scotland = describeCountry('Scotland', 5.454, 'Edinburgh')

////////////////////////////////////
// Function Declarations vs Expressions

//declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

let age1 = calcAge1(1991);
console.log(age1);

//expression
let calcAge2 = function(birthYear) {
    return 2037 - birthYear;
}

let age2 = calcAge2(1991);
console.log(age1, age2);

// LECTURE: Function Declarations vs. Expressions 
// 1. The world population is 7900 million people. Create a function declaration 
// called 'percentageOfWorld1' which receives a 'population' value, and 
// returns the percentage of the world population that the given population 
// represents. For example, China has 1441 million people, so it's about 18.2% of 
// the world population 
// 2. To calculate the percentage, divide the given 'population' value by 7900 
// and then multiply by 100 
// 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, 
// store the results into variables, and log them to the console 
// 4. Create a function expression which does the exact same thing, called 
// 'percentageOfWorld2', and also call it with 3 country populations (can be 
// the same populations)

function percentageOfWorld1(population) {
    return (population / 7900) * 100
}

let finlandPercent = percentageOfWorld1(6);
let usaPercent = percentageOfWorld1(329.5);
let scotlandPercent = percentageOfWorld1(5.454)

console.log(finlandPercent);
console.log(usaPercent);
console.log(scotlandPercent);

let percentageOfWorld2 = function(population) {
    return (population / 7900) * 100
}

finlandPercent = percentageOfWorld2(6);
usaPercent = percentageOfWorld2(329.5);
scotlandPercent = percentageOfWorld2(5.454)

console.log(finlandPercent);
console.log(usaPercent);
console.log(scotlandPercent);

////////////////////////////////////
// Arrow Functions

let calcAge3 = birthYear => 2037 - birthYear;
let age3 = calcAge3(1991);
console.log(age3);

let yearsUntilRetirement = (birthYear, firstName) => {
    let age = 2037 - birthYear;
    let retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));

// LECTURE: Arrow Functions 
// 1. Recreate the last assignment, but this time create an arrow function called 
// 'percentageOfWorld3'

let percentageOfWorld3 = (population) => (population / 7900) * 100;

finlandPercent = percentageOfWorld3(6);
usaPercent = percentageOfWorld3(329.5);
scotlandPercent = percentageOfWorld3(5.454)

console.log(finlandPercent);
console.log(usaPercent);
console.log(scotlandPercent);

////////////////////////////////////
// Functions calling Functions

// LECTURE: Functions Calling Other Functions 
// 1. Create a function called 'describePopulation'. Use the function type you 
// like the most. This function takes in two arguments: 'country' and 
// 'population', and returns a string like this: 'China has 1441 million people, 
// which is about 18.2% of the world.' 
// 2. To calculate the percentage, 'describePopulation' call the 
// 'percentageOfWorld1' you created earlier 
// 3. Call 'describePopulation' with data for 3 countries of your choice

////////////////////////////////////
// Reviewing Functions

////////////////////////////////////
// Coding Challenge #1 
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
// gymnastics discipline, which works differently. 
// Each team competes 3 times, and then the average of the 3 scores is calculated (so 
// one average score per team). 
// A team only wins if it has at least double the average score of the other team. 
// Otherwise, no team wins! 
// Your tasks: 
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores 
// 2. Use the function to calculate the average for both teams 
// 3. Create a function 'checkWinner' that takes the average score of each team 
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
// to the console, together with the victory points, according to the rule above. 
// Example: "Koalas win (30 vs. 13)" 
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
// Data 2 
// 5. Ignore draws this time 
// Test data: 
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27 
// Hints: 
// § To calculate average of 3 values, add them all together and divide by 3 
// § To check if number A is at least double number B, check for A >= 2 * B. 
// Apply this to the team's average scores 😉 
// GOOD LUCK 😀