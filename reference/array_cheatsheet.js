// Making an array (uses cont, let, or var)
const colors = ["red", "orange", "yellow"];

// Arrays are indexed like strings:
colors[0]; // "red"

// They have a length:
colors.length; //3

// Important array methods:
//push(value) - adds value to the END of an array
colors.push('green');
//pop() - removes and returns last value in array
colors.pop();


//unshift(value) - adds value to START of an array
colors.unshift('purple');
//shift() - removes and returns first element in an array
colors.shift();

const colors2 = ["green", "blue", "indigo", "violet"];
// concat(value) - merges arrays
const colorsRainbow = colors.concat(colors2);

// join - creates a string from an array (by concatenating all the elements in the array)
colors.join(); // returns "red,orange,yellow"
colors.join(''); // returns "redorangeyellow"
colors.join('-'); // returns "red-orange-yellow"
colors.join(', '); // returns "red, orange, yellow"

// includes - looks for a value, then returns a boolean (true or false)
colors.includes('red'); //returns true, in this case
colors.includes('Red'); // returns false, in this case

// indexOf - (like string.indexOf) returns index location of the FIRST element in that array
colors.indexOf('red'); //returns 0
colors.indexOf('orange'); //returns 1
colors.indexOf('yellow'); //returns 2
colors.includes('RED'); // returns -1
colors.includes('aqua'); // returns -1

// reverse - reverses an array (destructive method; rewrites/replaces the original array)
colorsRainbow.reverse();

// slice - copies a portion of an array
// splice - removes/replaces elements
// sort - sorts an array