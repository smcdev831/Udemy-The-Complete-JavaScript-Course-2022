////////////////////////////////////
//linking Javascript file
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

//Values and variables
console.log('Jonas');
console.log(23);

let firstName = 'Matilda'
console.log(firstName);
console.log(firstName);
console.log(firstName);

////////////////////////////////////
//Variable name conventions

let jonas_matilda = 'JM';
let $function = 27;

let person = 'jonas';
let PI = 3.14415; //constant is all caps

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

let job1 = 'Programmer';
let job2 = 'Teacher';

console.log(myFirstJob);

// LECTURE: Values and Variables 
// 1. Declare variables called 'country', 'continent' and 'population' and 
// assign their values according to your own country (population in millions) 
// 2. Log their values to the console

const country = 'United States of America';
let continent = 'North America';
let population = 329;

console.log(country);
console.log(continent);
console.log(population);

////////////////////////////////////
//Data Types

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

// LECTURE: Data Types 
// 1. Declare a variable called 'isIsland' and set its value according to your 
// country. The variable should hold a Boolean value. Also declare a variable 
// 'language', but don't assign it any value yet 
// 2. Log the types of 'isIsland', 'population', 'country' and 'language' 
// to the console

let isIsland = false;
let language;
console.log(isIsland);
console.log(population);
console.log(country);
console.log(language);

////////////////////////////////////
//Let, Const, Var

let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1990;

var job = 'programmer';
job = 'teacher';

lastName = 'Schmedtmann';
console.log(lastName);

// LECTURE: let, const and var 
// 1. Set the value of 'language' to the language spoken where you live (some 
// countries have multiple languages, but just choose one) 
// 2. Think about which variables should be const variables (which values will never 
// change, and which might change?). Then, change these variables to const. 
// 3. Try to change one of the changed variables now, and observe what happens

language = 'English';
//country = Russia;

////////////////////////////////////
//Basic operators

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstNames = 'Jonas';
const lastNames = 'Schmedtmann';
console.log(firstNames + ' ' + lastNames);

let x = 10 + 5; //15
x += 10; //25
x *= 4; //100
x ++; //101
x --; // 99
console.log(x);

console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now -2018);

let xx, y;
xx = y = 25 - 10 - 5;
console.log(xx, y);

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);

// LECTURE: Basic Operators 
// 1. If your country split in half, and each half would contain half the population, 
// then how many people would live in each half? 
// 2. Increase the population of your country by 1 and log the result to the console 
// 3. Finland has a population of 6 million. Does your country have more people than 
// Finland? 
// 4. The average population of a country is 33 million people. Does your country 
// have less people than the average country? 
// 5. Based on the variables you created, create a new variable 'description' 
// which contains a string with this format: 'Portugal is in Europe, and its 11 million 
// people speak portuguese'

let countrySplit = population / 2;
population ++
console.log(population);

let finlandPopulation = 6;
population > finlandPopulation;

let averagePopulation = 33;
population < averagePopulation;

let description = 'Portugal is in Europe, and its 11 million people speak portuguese'

////////////////////////////////////
// Coding Challenge #1 
// Mark and John are trying to compare their BMI (Body Mass Index), which is 
// calculated using the formula: 
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
// and height in meter). 
// Your tasks: 
// 1. Store Mark's and John's mass and height in variables 
// 2. Calculate both their BMIs using the formula (you can even implement both 
// versions) 
// 3. Create a Boolean variable 'markHigherBMI' containing information about 
// whether Mark has a higher BMI than John. 
// Test data: 
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
// m tall. 
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
// m tall. 
 
// GOOD LUCK 😀

//Test Data 1
let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;

let bmiMark = markWeight / markHeight ** 2;
let bmiJohn = johnWeight / johnHeight ** 2;
console.log(bmiMark);
console.log(bmiJohn);

let markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);

//Test Data 2
markWeight = 95;
markHeight = 1.88;
johnWeight = 85;
johnHeight = 1.76;

bmiMark = markWeight / markHeight ** 2;
bmiJohn = johnWeight / johnHeight ** 2;
console.log(bmiMark);
console.log(bmiJohn);

markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);

////////////////////////////////////
//Strings and Template Literals

let firstNameJ = 'Jonas';
let jobJ = 'teacher';
const birthYearJ = 1991;
let yearJ = 2037;

const jonas = "I'm " + firstNameJ + ', a ' + (yearJ - birthYearJ) + ' years old ' + jobJ + '!';
console.log(jonas);

const jonasNew = `I'm ${firstNameJ}, a ${yearJ - birthYearJ} years old ${jobJ}!`
console.log(jonasNew);

console.log('Just a regular string...');

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`); //must use backticks

// LECTURE: Strings and Template Literals 
// 1. Recreate the 'description' variable from the last assignment, this time 
// using the template literal syntax

let countryP = 'Portugal';
let continentP = 'Europe';
let populationP = 11;
let languageP = 'portuguese'

let descriptionP = `A ${countryP} is in ${continentP}, and its ${populationP} million people speak ${languageP}`;

console.log(descriptionP);

////////////////////////////////////
//If/Else Statements