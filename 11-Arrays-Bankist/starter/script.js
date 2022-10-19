"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// Simple Array Methods

let arr = ["a", "b", "c", "d", "e"];

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// console.log(arr.splice(2));
arr.splice(-1);
arr.splice(1, 2);
console.log(arr);

arr = ["a", "b", "c", "d", "e"];
let arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr2);

let letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

console.log(letters.join("-"));

/////////////////////////////////////////////////
// The new at Method

arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));
console.log(arr.at(-2));

console.log("jonas".at(0));
console.log("jonas".at(-1));

/////////////////////////////////////////////////
// Looping Arrays: For each

console.log("---- For Loop ----");
for (let movement of movements) {
  if (movement > 0) {
    console.log(`You deposited $${movement}`);
  } else {
    console.log(`You withdrew $${Math.abs(movement)}`);
  }
}

console.log("---- Constant For Of Loop ----");
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited $${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew $${Math.abs(movement)}`);
  }
}

console.log("---- For Each Loop ----");
movements.forEach((movement) => {
  if (movement > 0) {
    console.log(`You deposited $${movement}`);
  } else {
    console.log(`You withdrew $${Math.abs(movement)}`);
  }
});

console.log("---- For Each+ Loop ----");
movements.forEach((movement, index, array) => {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited $${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew $${Math.abs(movement)}`);
  }
});

/////////////////////////////////////////////////
// forEach with Maps and Sets

currencies.forEach((currentValue, key, map) => {
  console.log(`${key} ${currentValue}`);
});

let currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);

currenciesUnique.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

/////////////////////////////////////////////////
// PROJECT: Bankist App

/////////////////////////////////////////////////
// Creating DOM Elements

let displayMovements = function (movements) {
  containerMovements.innerHTML = "";

  movements.forEach((mov, i) => {
    let type = mov > 0 ? "deposit" : "withdrawal";
    let html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

// displayMovements(account1.movements);

/////////////////////////////////////////////////
// Coding Challenge #1
// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
// Your tasks:
// Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
// 1. Julia found out that the owners of the first and the last two dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
// 2. Create an array with both Julia's (corrected) and Kate's data
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
// 4. Run the function for both test datasets
// Test data:
// § Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
// Hints: Use tools from all lectures in this section so far 😉
// GOOD LUCK 😀

function checkDogs(dogsJulia, dogsKate) {
  let actualDogs = dogsJulia.slice(1, -2);
  let totalDogs = dogsKate.concat(actualDogs);
  totalDogs.forEach((age, index) => {
    console.log(
      age >= 3
        ? `"Dog number ${index + 1} is an adult, and is ${age} years old"`
        : `Dog number ${index + 1} is still a puppy 🐶`
    );
  });
}

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

/////////////////////////////////////////////////
// Data Transformations: map, filter, reduce

/////////////////////////////////////////////////
// The map Method

let eurToUsd = 1.1;

let movementsUSD = movements.map((movement) => {
  return movement * eurToUsd;
});
//refactoring
// let movementsUSD = movements.map((movement) => movement * eurToUsd);
console.log(movements);
console.log(movementsUSD);

let movementsUSDfor = [];
for (let mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

let movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} $${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);

/////////////////////////////////////////////////
// Computing Usernames

let user = "Steven Thomas Williams";
let username = user
  .toLowerCase()
  .split(" ")
  .map((name) => name[0])
  .join("");
console.log(username);

let createUsernames = (user) => {
  let username = user
    .toLowerCase()
    .split(" ")
    .map((name) => name[0])
    .join("");
  return username;
};
console.log(createUsernames("Steven Thomas Williams"));

createUsernames = accounts.forEach((account) => {
  account.username = account.owner
    .toLowerCase()
    .split(" ")
    .map((name) => name[0])
    .join("");
});
console.log(movements);
console.log(accounts);

/////////////////////////////////////////////////
// The filter Method

let deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);

let depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

let withdrawals = movements.filter((mov) => mov < 0);
console.log(withdrawals);

/////////////////////////////////////////////////
// The reduce Method

let balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);
console.log(balance);

//refactoring
balance = movements.reduce((acc, cur) => acc + cur);
console.log(balance);

let balance2 = 0;
for (let mov of movements) balance2 += mov;
console.log(balance2);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};
// calcDisplayBalance(account1.movements);

let max = movements.reduce((acc, mov) => {
  return acc > mov ? acc : mov;
}, movements[0]);
console.log(max);

/////////////////////////////////////////////////
// Coding Challenge #2
// Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.
// Your tasks:
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
// 1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4
// 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
// 4. Run the function for both test datasets
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]
// GOOD LUCK 😀

let calcAverageHumanAge = function (ages) {
  let humanAge = [];
  for (let i = 0; i < ages.length; i++) {
    if (ages[i] <= 2) {
      humanAge.push(ages[i] * 2);
    } else {
      humanAge.push(16 + ages[i] * 4);
    }
  }
  let over18 = humanAge.filter((age) => age >= 18);
  let averageBase = over18.reduce((acc, cur) => acc + cur);
  let average = averageBase / over18.length;
  console.log(average);
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

//teacher
calcAverageHumanAge = function (ages) {
  let humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  let adults = humanAges.filter((age) => age >= 18);
  let average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  console.log(humanAges);
  console.log(adults);
  console.log(average);
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

/////////////////////////////////////////////////
// The Magic of Chaining Methods

let totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);

totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  .map((mov, i, arr) => {
    console.log(arr);
    return mov * eurToUsd;
  })
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);

let calcDisplaySummary = function (acc) {
  let incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  let withdrawals = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(withdrawals)}€`;

  let interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};
// calcDisplaySummary(account1.movements);

/////////////////////////////////////////////////
// Coding Challenge #3
// Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time as an arrow function, and using chaining!
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]
// GOOD LUCK 😀

calcAverageHumanAge = (ages) =>
  ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
let avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
let avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);

/////////////////////////////////////////////////
// The find Method

let firstWithdrawl = movements.find((mov) => mov < 0);
console.log(movements);
console.log(firstWithdrawl);

let account = accounts.find((acc) => acc.owner === "Jessica Davis");
console.log(account);

/////////////////////////////////////////////////
// Implementing Login

let currentAccount;

btnLogin.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Login");

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log("Login");
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;

    containerApp.style.opacity = 100;

    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();
    updateUI(currentAccount);
  }
});

let updateUI = function (acc) {
  displayMovements(acc.movements);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
};

/////////////////////////////////////////////////
// Implementing Transfers

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  let amount = Number(inputTransferAmount.value);
  let receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  console.log(amount, receiverAcc);
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    amount <= currentAccount.balance &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    console.log("Transfer Valid");

    updateUI(currentAccount);
  }
});

/////////////////////////////////////////////////
// The findIndex Method

/////////////////////////////////////////////////
// some and every

/////////////////////////////////////////////////
// flat and flatMap

/////////////////////////////////////////////////
// Sorting Arrays

/////////////////////////////////////////////////
// More Ways of Creating and Filling Arrays

/////////////////////////////////////////////////
// Summary: Which Method to Use?

/////////////////////////////////////////////////
// Array Methods Practice

/////////////////////////////////////////////////
// Coding Challenge #4
// Julia and Kate are still studying dogs, and this time they are studying if dogs areeating too much or too little. Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite. Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).
// Your tasks:
// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do not create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. Hint: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
// 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
// 5. Log to the console whether there is any dog eating exactly the amount of food that is recommended (just true or false)
// 6. Log to the console whether there is any dog eating an okay amount of food (just true or false)
// 7. Create an array containing the dogs that are eating an okay amount of food (try to reuse the condition used in 6.)
// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects 😉)
// Hints:
// § Use many different tools to solve these challenges, you can use the summarylecture to choose between them 😉
// § Being within a range 10% above and below the recommended portion means:current > (recommended * 0.90) && current < (recommended *
// 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

// Test data:
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// GOOD LUCK 😀
