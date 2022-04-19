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
//Taking Decisions: if / else Statements

const ageI = 15;

if (ageI >= 18) {
    console.log('Sarah can start drivng license 🚗');
} else {
    let yearsLeft = 18 - ageI;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

let century;
let birthYearI = 2012;
if (birthYearI <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);

// LECTURE: Taking Decisions: if / else Statements 
// 1. If your country's population is greater that 33 million, log a string like this to the 
// console: 'Portugal's population is above average'. Otherwise, log a string like 
// 'Portugal's population is 22 million below average' (the 22 is the average of 33 
// minus the country's population) 
// 2. After checking the result, change the population temporarily to 13 and then to 
// 130. See the different results, and set the population back to original

if (population < averagePopulation ) {
    let populationDifference = (averagePopulation - population)
    console.log(`${country}'s population is ${populationDifference} million below average`);
} else {
    let populationDifference = (population - averagePopulation)
    console.log(`${country}'s population is ${populationDifference} million above average`);
}



////////////////////////////////////
// Coding Challenge #2 
// Use the BMI example from Challenge #1, and the code you already wrote, and 
// improve it. 
// Your tasks: 
// 1. Print a nice output to the console, saying who has the higher BMI. The message 
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!" 
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's 
// BMI (28.3) is higher than John's (23.9)!" 
// Hint: Use an if/else statement 😉 
 
// GOOD LUCK 😀

//Test Data 1
markWeight = 78;
markHeight = 1.69;
johnWeight = 92;
johnHeight = 1.95;

bmiMark = markWeight / markHeight ** 2;
bmiJohn = johnWeight / johnHeight ** 2;
console.log(bmiMark);
console.log(bmiJohn);

markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})`);
} else {
    console.log(`John's BMI (${bmiJohn}) is higher than Marks's (${bmiMark})`);
}

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

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})`);
} else {
    console.log(`John's BMI (${bmiJohn}) is higher than Marks's (${bmiMark})`);
}

////////////////////////////////////
//Type Conversion and Coercion

let inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

console.log('I am ' + 23 + 'years old.');
console.log('23' - '10' - 3);
console.log('23' * '2');

let n = '1' + 1;
n = n - 1
console.log(n);

2+3+4+'5' //95
'10' - '4' - '3' - 2 + '5' //15

// LECTURE: Type Conversion and Coercion 
// 1. Predict the result of these 5 operations without executing them: 
// '9' - '5'; 
// '19' - '13' + '17'; 
// '19' - '13' + 17; 
// '123' < 57; 
// 5 + 6 + '4' + 9 - 4 - 2; 
// 2. Execute the operations to check if you were right

console.log('9' - '5'); //4
console.log('19' - '13' + '17'); //617
console.log('19' - '13' + 17); //23
console.log('123' < 57); //false
console.log(5 + 6 + '4' + 9 - 4 - 2); //1143

////////////////////////////////////
//Truthy and Falsy Values

//falsy = 0, '', undefined, null, NaN, false

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

let money = 100;

if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job');
}

let height = 0;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}

////////////////////////////////////
//Equality Operators: == vs. ===

let age1 = 18;

if (age1 === 18) console.log('You just became an adult:D');

// LECTURE: Equality Operators: == vs. === 
// 1. Declare a variable 'numNeighbours' based on a prompt input like this: 
// prompt('How many neighbour countries does your country 
// have?'); 
// 2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality 
// == for now) 
// 3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours' 
// is greater than 1 
// 4. Use an else block to log 'No borders' (this block will be executed when 
// 'numNeighbours' is 0 or any other value) 
// 5. Test the code with different values of 'numNeighbours', including 1 and 0. 
// 6. Change == to ===, and test the code again, with the same values of 
// 'numNeighbours'. Notice what happens when there is exactly 1 border! Why 
// is this happening? 
// 7. Finally, convert 'numNeighbours' to a number, and watch what happens now 
// when you input 1 
// 8. Reflect on why we should use the === operator and type conversion in this 
// situation