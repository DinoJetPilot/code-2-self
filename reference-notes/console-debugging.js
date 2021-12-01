// =========================================
// =========================================
// Console commands and methods.

console.log("Prints this output to the console")
// Best practice is to use .log() to track changes to variables at various stages to help with debugging your code.

console.clear() // Clears the console screen.

console.dir() // Displays the properties of the JS element.


// =========================================
// The "typeof" syntax will return a variable's type, with possible options being: string, number, object.

let example1 = "Hi";
console.log(typeof example1); // Returns "string".
let example2 = 99;
console.log(typeof example2); // Returns "number";

// Primative data types in JS: Boolean, Null, Undefined, Number, String, Symbol, and object (the only mutable data type).
// Note: Arrays are technically a type of object. 

// =========================================
// Miscellaneous Notes:

// Changing between single '' and double "" quotes will avoid syntax errors.
const quote = "He said 'Way to go, man!' before he ran off.";

// Alternately, you can use the backslash to "escape" closing the quote the same was as the original.
const quoteAlt = "He said \"Way to go, man!\" before he ran off.";

// Template literals use the back ticks `` and are a way to use any reserved characters in a string including variables (using ${} as the syntax).
const amt = 99;
const message = `You owe "exactly" $ ${amt}!!`
// Returns "You owe "exactly" $ 99!!""