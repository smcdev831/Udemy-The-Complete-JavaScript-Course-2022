// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order recieved. ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}.`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

////////////////////////////////////
//Destructuring Arrays

let arr = [2, 3, 4];
let a = arr[0];
let b = arr[1];
let c = arr[2];

let [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [first, second] = restaurant.categories;
console.log(first, second);

[first, , second] = restaurant.categories;
console.log(first, second);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

let temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

let [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

let nested = [2, 4, [5, 6]];
// let [i, , j] = nested;
// console.log(i, j);

let [i, , [j, k]] = nested;
console.log(i, j, k);

let [p, q, r] = [8, 9];
console.log(p, q, r);

[p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

////////////////////////////////////
//Destructuring Objects

let { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

let {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

let { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

a = 111;
b = 999;
let obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

let { fri } = openingHours;
console.log(fri);

let {
  fri: { open: o, close: cl },
} = openingHours;
console.log(o, cl);

restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: "Via del Sole, 21",
  starterIndex: 1,
});

////////////////////////////////////
//The Spread Operator

arr = [7, 8, 9];
let badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

let goodNewArray = [1, 2, ...arr];
console.log(goodNewArray);

console.log(...goodNewArray);

let newMenu = [...restaurant.mainMenu, "Gnocchi"];
console.log(newMenu);

let mainMenuCopy = [...restaurant.mainMenu];

menu = [...restaurant.mainMenu].concat([...restaurant.starterMenu]);
console.log(menu);

menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

let str = "Jonas";
let letters = [...str, " ", "S."];
console.log(letters);
console.log(...str);
// console.log(`${...str} Schmedtmann`); --will not work as a template literal

// let ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Let's make pasta! Ingredient 2?"),
//   prompt("Let's make pasta! Ingredient 3?"),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

let newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };
console.log(newRestaurant);

let restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);

////////////////////////////////////
//Rest pattern and parameters

arr = [1, 2, ...[3, 4]];
console.log(arr);

[a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

let [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

let { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

let add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

x = [23, 5, 7];
add(...x);

restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
restaurant.orderPizza("mushrooms");

////////////////////////////////////
//Short circuiting && and ||

console.log("---- OR ----");
console.log(3 || "Jonas"); //3
console.log("" || "Jonas"); //"Jonas"
console.log(true || 0); //true
console.log(undefined || null); //null

console.log(undefined || 0 || "" || "Hello" || 23 || null); //"Hello"

restaurant.numGuests = 23;
let guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

let guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log("---- AND ----");
console.log(0 && "Jonas"); //0
console.log(7 && "Jonas"); //Jonas
console.log("Hello" && 23 && null && "Jonas"); //null

if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");

////////////////////////////////////
//The Nullish Coalescing Operator

restaurant.numGuests1 = 0;
let guests = restaurant.numGuests1 || 10;
console.log(guests);

let guestCorrect = restaurant.numGuests1 ?? 10;
console.log(guestCorrect);

////////////////////////////////////
//Logistical Assignment Operators

let rest1 = {
  name: "Capri",
  numGuests: 0,
};

let rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};

rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;

rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

rest1.owner = rest1.owner && "<Anonymous>";
rest2.owner = rest2.owner && "<Anonymous>";

rest1.owner &&= "<Anonymous>";
rest2.owner &&= "<Anonymous>";

console.log(rest1);
console.log(rest2);

////////////////////////////////////
// Coding Challenge #1
// We're building a football betting app (soccer for my American friends 😅)!
// Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data.
// Your tasks:
// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored
// GOOD LUCK 😀

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...players) {
    console.log(`${players.length} goals were scored by`, ...players);
  },
};

// let players1 = game.players[0];
// let players2 = game.players[1];
// let gk = players1[0];
// let fieldPlayers = [...players1];
// let allPlayers = [...players1, ...players2];
// let players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

//Class answers
let [players1, players2] = game.players;
let [gk, ...fieldPlayers] = players1;
let allPlayers = [...players1, ...players2];
let players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

let {
  odds: { team1, x: draw, team2 },
} = game;

game.printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
game.printGoals(...game.scored);

team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 2 is more likely to win");

////////////////////////////////////
//Looping Arrays: The For Of Loop

menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  console.log(item);
}

console.log([...menu.entries()]);

for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

////////////////////////////////////
//Enhanced Object Literals

weekdays = ["mon", "tues", "weds", "thurs", "fri", "sat", "sun"];

openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant2 = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order recieved. ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}.`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

console.log(restaurant2);

////////////////////////////////////
//Optional Chaining
if (restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

if (restaurant.openingHours.fri) {
  console.log(restaurant.openingHours.fri.open);
}

if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

let days = ["mon", "tues", "weds", "thurs", "fri", "sat", "sun"];
for (let day of days) {
  console.log(day);
  let open = restaurant.openingHours[day]?.open || "closed";
  console.log(`On ${day}, we open at ${open}`);
}

console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");

let users = [{ name: "Jonas", email: "hello@jonas.io" }];
console.log(users[0]?.name ?? "User array empty");

if (users.length > 0) {
  console.log(users[0].name);
} else {
  console.log("User array empty");
}

////////////////////////////////////
// Looping Objects: Object Keys, Values, and Entries

let properties = Object.keys(openingHours);
console.log(properties);

console.log(`We are open on ${properties.length} days`);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr);

let values = Object.values(openingHours);
console.log(values);

let entries = Object.entries(openingHours);
console.log(entries);

for (const x of entries) {
  console.log(x);
}

for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}.`);
}

////////////////////////////////////
// Coding Challenge #2
// Let's continue with our football betting app! Keep using the 'game' variable from before.
// Your tasks:
// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names 😉
// 4. Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this: {Gnarby: 1, Hummels: 1, Lewandowski: 2 }
// GOOD LUCK 😀

for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

let average = 0;
let odds = Object.values(game.odds);
for (const score of odds) {
  average += score;
}

average /= odds.length;
console.log(average);

for (const [team, odds] of Object.entries(game.odds)) {
  names = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odds of ${names} ${odds}`);
}

let scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

////////////////////////////////////
// Sets

let ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
console.log(ordersSet);

console.log(new Set("Jonas"));

console.log(ordersSet.size);
console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("Bread"));

ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");

console.log(ordersSet);

ordersSet.delete("Risotto");
console.log(ordersSet);

// ordersSet.clear();
// console.log(ordersSet);

for (order of ordersSet) console.log(order);

let staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

let staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
);

console.log(new Set("jonasschmedtmann").size);

////////////////////////////////////
// Maps: Fundamentals

let rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon, Portugal"));

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open!")
  .set(false, "We are closed!");

console.log(rest);
console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

let time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);
console.log(rest);
console.log(rest.size);
// console.log(rest.clear);

rest.set([1, 2], "test");
console.log(rest.get([1, 2]));
rest.set(document.querySelector("h1"), "Heading");

arr = [1, 2];
rest.set(arr, "test");
console.log(rest.get(arr));

////////////////////////////////////
// Maps: Iteration

let question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "Javascript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try again!"],
]);

console.log(question);

//How to convert an object to a map
console.log(Object.entries(openingHours));
let hoursMap = new Map(Object.entries(openingHours));

console.log(hoursMap);

console.log(question.get("question"));

for ([key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}

// let answer = Number(prompt("Your answer"));
// console.log(answer);

// if (answer === 3) {
//   console.log(question.get(true));
// } else {
//   console.log(question.get(false));
// }

// console.log(question.get(question.get("correct") === answer));

console.log([...question]);
console.log(question.entries());
console.log(question.keys());
console.log(question.values());

////////////////////////////////////
// Coding Challenge #3
// Let's continue with our football betting app! This time, we have a map called 'gameEvents' (see below) with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
// Your tasks:
// 1. Create an array 'events' of the different game events that happened (no duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// 3. Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this: [FIRST HALF] 17: ⚽ GOAL
// GOOD LUCK 😀

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

// let events = Array.from(gameEvents.values());
// console.log(events);
// events.splice(4, 1);
// console.log(events);

// console.log("An event happened, on average, every 9 minutes");

// for ([key, value] of gameEvents) {
//   if (key <= 45) {
//     console.log(`[FIRST HALF] ${key}: ${value}`);
//   } else {
//     console.log(`[SECOND HALF] ${key}: ${value}`);
//   }
// }

let events = [...new Set(gameEvents.values())];
console.log(events);
gameEvents.delete(64);
console.log(
  `An event happened, on average, every ${Math.floor(
    (gameEvents.size / 90) * 100
  )} minutes`
);

for ([min, eventt] of gameEvents) {
  let half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${min}: ${eventt}`);
}

////////////////////////////////////
// Working with strings - Part 1

let airline = "TAP Air Portugal";
let plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("B737"[0]);

console.log(airline.length);
console.log("B737".length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("Portugal")); //case sensitive

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

let checkMiddleSeat = function (seat) {
  //B and E are the middle seats
  let s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log("You got the middle seat!");
  } else {
    console.log("You got lucky!");
  }
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(new String("jonas"));
console.log(typeof new String("jonas"));
console.log(typeof new String("jonas").slice(1));

////////////////////////////////////
// Working with strings - Part 2

console.log(airline.toUpperCase());
console.log(airline.toLowerCase());

let passenger = "jOnAS";
let passengerLower = passenger.toLowerCase();
let passengerCorrect =
  passengerLower[0].toLocaleUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

let email = "hello@jonas.io";
let loginEmail = "  Hello@Jonas.Io \n";
// let lowerEmail = loginEmail.toLowerCase();
// let trimmedEmail = lowerEmail.trim();
let normalizedEmail = loginEmail.toLowerCase().trim();
console.log(email === normalizedEmail);

let priceGB = "288,97£";
let priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);

let announcement = "All passengers come to boarding door 23. Boarding door 23!";

console.log(announcement.replace("door", "gate"));

console.log(announcement.replace(/door/g, "gate"));

plane = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Boeing"));
console.log(plane.startsWith("Air"));
console.log(plane.startsWith("Aib"));

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the NEW Airbus family");
}

let checkBaggage = function (items) {
  let baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are NOT allowed on board");
  } else {
    console.log("Welcome aboard");
  }
};

checkBaggage("I have a laptop, some Food, and a pocket Knife");
checkBaggage("Socks and a camera");
checkBaggage("Got some snacks and a gun for protection");

////////////////////////////////////
// Working with strings - Part 3

console.log("a+very+nice+string".split("+"));
console.log("Jonas Scmedtmann".split(" "));

let [firstName, lastName] = "Jonas Scmedtmann".split(" ");

newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

let capitalizeName = function (name) {
  let names = name.split(" ");
  let namesUpper = [];

  for (const n of names) {
    //namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};

capitalizeName("jessica ann smith davis");
capitalizeName("jonas schmedtmann");

let message = "Go to gate 23!";
console.log(message.padStart(25, "+").padEnd(30, "+"));
console.log("Jonas".padStart(20, "+").padEnd(30, "+"));

const maskCreditCard = function (number) {
  let str = number + "";
  let last = str.slice(-4);
  console.log(last.padStart(str.length, "*"));
};

maskCreditCard(64637836);
maskCreditCard(43378463864647384);
maskCreditCard("334859493847755774747");

////////////////////////////////////
// Coding Challenge #4
// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed.
// Test data (pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure

// Should produce this output (5 separate console.log outputs):
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅

// Hints:
// § Remember which character defines a new line in the textarea 😉
// § The solution only needs to work for a variable made out of 2 words, like a_b
// § Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
// § This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
// Afterwards, test with your own test data!
// GOOD LUCK 😀

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
