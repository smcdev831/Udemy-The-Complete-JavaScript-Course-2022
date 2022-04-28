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

function cutFruitPieces(fruit) {
    return fruit * 4
}

function fruitProcessor(apples, oranges) {
    let applePieces = cutFruitPieces(apples)
    let orangePieces = cutFruitPieces(oranges)
    let juice = `Juice with ${applePieces} pieces of apple, and ${orangePieces} pieces of orange.`
    return juice;
}

console.log(fruitProcessor(2, 3));

// LECTURE: Functions Calling Other Functions 
// 1. Create a function called 'describePopulation'. Use the function type you 
// like the most. This function takes in two arguments: 'country' and 
// 'population', and returns a string like this: 'China has 1441 million people, 
// which is about 18.2% of the world.' 
// 2. To calculate the percentage, 'describePopulation' call the 
// 'percentageOfWorld1' you created earlier 
// 3. Call 'describePopulation' with data for 3 countries of your choice

function describePopulation(country, population) {
    let populationPercent = percentageOfWorld1(population)
    return `${country} has ${population} million people, which is about ${populationPercent}% of the world`    
}

console.log(describePopulation('Finland', 6));
console.log(describePopulation('United States of America', 329.5));
console.log(describePopulation('Scotland', 5.454));

////////////////////////////////////
// Reviewing Functions

let calcAge = function (birthYear) {
    return 2037 - birthYear;
}

yearsUntilRetirement = function(birthYear, firstName) {
    let age = calcAge(birthYear)
    let retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement
    } else {
        console.log(`${firstName} has already retired`);
        return -1
    }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));

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

let calcAverage = (score1, score2, score3) =>  (score1 + score2 + score3) / 3

function checkWinner(scoreD1, scoreD2, scoreD3, scoreK1, scoreK2, scoreK3) {
    let avgDolphins = calcAverage(scoreD1, scoreD2, scoreD3)
    let avgKoalas = calcAverage(scoreK1, scoreK2, scoreK3)
    if (avgDolphins >= (avgKoalas * 2)) {
        console.log(`Dolphins win (${avgDolphins} - ${avgKoalas})`);
    } else if ((avgDolphins * 2) <= avgKoalas){
        console.log(`Koalas win (${avgKoalas} - ${avgDolphins})`);
    } else {
        console.log('No one wins!');
    }
}

//Test Data 1
checkWinner(44, 23, 71, 65, 54, 49)

//Test Data 2
checkWinner(85, 54, 41, 23, 34, 27)

////////////////////////////////////
//Intro to Arrays

let friend1 = 'Michael';
let friend2 = 'Steven';
let friend3 = 'Peter';

let friends = ['Michael', 'Steven', 'Peter']
console.log(friends);

let years = new Array(1991, 1984, 2000, 2020)
console.log(years);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length -1]);

friends[2] = 'Jay'
console.log(friends);

// friends = ['Bob', 'Alice']

let firstName = 'Jonas'
let jonas = [firstName, 'Schmedtmann', 2037-1991, 'teacher', friends]
console.log(jonas);
console.log(jonas.length);

//Exercise

years = [1990, 1967, 2002, 2010, 2018]

age1 = calcAge(years[0]);
age2 = calcAge(years[1]);
age3 = calcAge(years[years.length-1]);

console.log(age1, age2, age3);

let ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length-1])]
console.log(ages);

// LECTURE: Introduction to Arrays 
// 1. Create an array containing 4 population values of 4 countries of your choice. 
// You may use the values you have been using previously. Store this array into a 
// variable called 'populations' 
// 2. Log to the console whether the array has 4 elements or not (true or false) 
// 3. Create an array called 'percentages' containing the percentages of the 
// world population for these 4 population values. Use the function 
// 'percentageOfWorld1' that you created earlier to compute the 4 
// percentage values

let populations = [329.5, 5.454, 6, 38.01];
console.log(populations.length === 4);

let percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])]
console.log(percentages);

////////////////////////////////////
// Basic Array Operations

friends = ['Michael', 'Steven', 'Peter']
friends.push('Jay')
console.log(friends);

// LECTURE: Basic Array Operations (Methods) 
// 1. Create an array containing all the neighbouring countries of a country of your 
// choice. Choose a country which has at least 2 or 3 neighbours. Store the array 
// into a variable called 'neighbours' 
// 2. At some point, a new country called 'Utopia' is created in the neighbourhood of 
// your selected country. So add it to the end of the 'neighbours' array 
// 3. Unfortunately, after some time, the new country is dissolved. So remove it from 
// the end of the array 
// 4. If the 'neighbours' array does not include the country ‘Germany’, log to the 
// console: 'Probably not a central European country :D' 
// 5. Change the name of one of your neighbouring countries. To do that, find the 
// index of the country in the 'neighbours' array, and then use that index to 
// change the array at that index position. For example, you can search for 
// 'Sweden' in the array, and then replace it with 'Republic of Sweden'.

////////////////////////////////////
// Coding Challenge #2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
// 20%. 
// Your tasks: 
// 1. Write a function 'calcTip' that takes any bill value as an input and returns 
// the corresponding tip, calculated based on the rules above (you can check out 
// the code from first tip calculator challenge if you need to). Use the function 
// type you like the most. Test the function using a bill value of 100 
// 2. And now let's use arrays! So create an array 'bills' containing the test data 
// below 
// 3. Create an array 'tips' containing the tip value for each bill, calculated from 
// the function you created before 
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip 
// Test data: 125, 555 and 44 
// Hint: Remember that an array needs a value in each position, and that value can 
// actually be the returned value of a function! So you can just call a function as array 
// values (so don't store the tip values in separate variables first, but right in the new 
// array) 😉 
// GOOD LUCK 😀