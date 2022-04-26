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