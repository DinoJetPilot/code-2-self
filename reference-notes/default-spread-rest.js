// =========================================
// Default parameter: uses a default value if the function is called without any parameter given.
//

// The "new way" is to add the default parameter in the argument.
// "= 6" if the default value unless a number is passed through.
function rollDie(numSides = 6) {

    // This is the "old way" of creating a default value:
    // if (numSides === undefined) {
    //  numSides = 6;
    //}

    return Math.floor(Math.random() * numSides) + 1;
}

// Can have multiple default parameters, but make sure to note that the order matter. Keep default parameters last, so if not enough argurments are passed, you won't get "undefined" as a paramenter.
function greet(msg = "Hi", name = "John Doe", punc = "!!") {
    return `${msg}, ${name}${punc}`
}


// =========================================
// =========================================
// Spread syntax allows something iterable (like an array) to be expanded where none or more arguments/elements are expected. Also in object expressions that have none or more key-value pairs.
//
// Basically it "spreads" (expands) an array/string/etc. into a list of arguments. It makes a copy of the original objects (doesn't alter the originals).
//
// Syntax usese an ellipse before the name of the object/array.

// Example:
Math.max(13, 2, 55, 99, 1, 0, 500, 100, 1000, 86, 32, 3);
// Accepts any number of arguments to find the maximum numerical value.
// The above example would return 1000 as the max value.
Math.min(num1, num2, num3, num4); // As many arguments as needed.
// Same as "max", but finds the lowest numerical values in a list of arguments.

const nums = [13, 2, 55, 99, 1, 0, 500, 100, 1000, 86, 32, 3];
Math.max(nums);
// The above would return "NaN" because it's looking for separate arguments, not an array. To remedy this, use the spread function:
Math.max(...nums);

// Another example with console.log:
console.log(nums);
// Displays the array: [13, 2, 55, 99, 1, 0, 500, 100, 1000, 86, 32, 3]
console.log(...nums);
// Displays each element: 13, 2, 55, 99, 1, 0, 500, 100, 1000, 86, 32, 3
// It would be the equivalent of doing this:
console.log(13, 2, 55, 99, 1, 0, 500, 100, 1000, 86, 32, 3);

// Also works with strings:
console.log("hello"); // Hello
console.log(..."hello"); // H e l l o
// ^ Above is the same as below v
console.log("h", "e", "l", "l", "o") // H e l l o

// =========================================
// More on spread syntax and how it can be spread into an array literals using arrays.

const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];

const numsBoth = [...nums1, ...nums2];
// [1, 2, 3, 4, 5, 6]
const numsEtc = [0, ...nums1, "Hi"];
// [0, 1, 2, 3, "Hi"]

// =========================================
// More on spread syntax and how it can be spread into object literals.

const warrior = { hp: 10, sp: 4, weapon: "Axe", alive: true };
const ranger = { hp: 6, sp: 10, weapon: "Bow & Arrows", alive: true };

const rankUp = { ...warrior, crit: 1 };
// {hp: 10, sp: 4, weapon: "Axe", alive: true, crit: 1}

// If there is a conflict, the last poperty will overwrite any pervious ones. For example:
const notDualClass = { ...warrior, ...ranger, hp: 15, crit: 5 };
// { hp: 15, sp: 10, weapon: "Bow & Arrows", alive: true, crit:5}

// If (for whatever odd reason) you spread a direct array or string, it will use the indecies as the key for the key-value pairs.
const stuff1 = { ...[2, 4, 6] }; // {0:2, 1:4, 2:6}
const stuff2 = { ..."Hello" }; // {0:"H", 1:"e", 2:"l", 3:"l", 4:"o"}

// A common use is to use an array or object from user input that needs more data added to it. For example:
const dataFromForm = {
    email: "my-email@somewhere.com",
    username: "awesome-sauce123",
    password: "legit45"
};

const newUser = { ...dataFromForm, id: 235, isAdmin: false };

// You'll use it frequently in tools/frameworks like React.


// =========================================
// =========================================
// Rest syntax is available in every function, is an array-like object (without push/pop/reduce), contains all arguments passed to a function, but is NOT available in arrow functions. It collects all the rest of the parameters from something.
// 
// Syntax is similar to "spread" because it also uses elipses.

// v This function below returns a syntax error because "reduce" is an array function and "arguments" isn't an array.
function sum() {
    return arguments.reduce((total, el) => total + el);
}

// A correct syntax would be using rest:
function sum(...nums) {
    return nums.reduce((total, el) => total + el);
}

raceResults("Roland", "Jessica", "Bob", "Tina", "Warren");
// Using rest to create an array of the rest of the values:
function raceResults(gold, silver, ...everyoneElse) {
    console.log(`Gold medal goes to: ${gold}`)
    console.log(`Silver medal goes to: ${silver}`)
    console.log(`Thanks to everyone else: ${everyoneElse}`)
}
// Whensubmitting an amount of arguments, "gold" is first value, "silver" is second value, and "everyoneElse" becomes an array with all the rest of the arguments.

