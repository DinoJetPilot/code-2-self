// =========================================
// Number basics:
1;
-99;
0.345345;

// Making variables with let:
let numberOfFriends = 1;

// Incrementing:
numberOfFriends += 3; // numberOfFriends is now 4
numberOfFriends++; // numberOfFriends is now 5

// Decrementing:
numberOfFriends -= 4; // numberOfFriends is now 1
numberOfFriends-- // numberOfFriends is now 0 and you are sad...

// Variables with const
const minimumAge = 21; //CANNOT REASSIGN!

// Booleans - true or false values
true;
false;
let isHappy = true;

// Naming Conventions
// Use camel-cased names:
let numberOfChickens = 6; //GOOD
// NOT this way (but CAN be done, you anarchist):
// let number_of_chickens = 6;

// =========================================
// =========================================
// Math functions:

let rng = Math.random();
// Generates a number between 
// 0 and 0.999999999999999 
// (a 16-decimal place number)

// Takes our random number, basically 0-1, and multiplies by six (sides on a die), then floors the number to round it down and add 1 (otherwise our range is 0-5, not 1-6)
dieRoll = Math.floor(rng * 6) + 1;
// Or you could use ceil to round it up
dieRoll = Math.ceil(rng * 6);

// This function rounds based on if the number should mathematically round up or down (i.e. 0.5 or greater rounds up [or down in negatives])
pizzaSlices = Math.round(rng * 8) + 1;

// This function removes the decimal or fractional part.
noRemainders = Math.trunc(rng);
// This will always return "0" because Math.random() only returns 0-0.999... and any fraction/decimal is truncated (shortened)

// =========================================
// =========================================
// Variable comparisons

// Strict equality (triple equal signs):
if (variableA === variableB) {
    console.log("Checks if each variable AND datatype are equal");
    // 3 === 3 returns true.
    // 3 === "three" returns false.
    // 3 === "3" (a string) returns false.
}

// Equality (double equal signs):
if (variableA == variableB) {
    console.log("Checks ONLY if each variable is equal (converts if it can)");
    // 3 == 3 returns true.
    // 3 == "three" returns false.
    // 3 == "3" (a string) returns true.
}

// Strict inequality:
if (variableA !== variableB) {
    console.log("Checks if each variable and/or datatype are NOT equal");
    // 3 !== 3 returns false.
    // 3 !== "three" returns true.
    // 3 !== "3" (a string) returns true.
}

// Inequality:
if (variableA != variableB) {
    console.log("Checks ONLY if each variable is NOT equal (converts if it can)");
    // 3 != 3 returns false.
    // 3 != "three" returns true.
    // 3 != "3" (a string) returns false.
}

if (variableA < variableB) {
    // Checks if A is less than B.
} else if (variableA >= variableB) {
    // Checks if A is greater than or equal to B.
}

// Combining comparisons:
if (variableA > variableB || variableA > variableC) {
    // Checks if A is greater than B -or- C.
    // If first check returns false, doesn't run second check.
} else if (variableA > variableB && variableA > variableC) {
    // Checks if A is greater than B -and- C.
    // Both conditions must be met.
}