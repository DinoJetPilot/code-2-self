// =========================================
// Making an array (uses cont, let, or var)
const emptyArray = [];
const colors = ["red", "orange", "yellow"];

// Arrays are indexed like strings, but start at the zeroth position:
colors[0]; // "red"
colors[1]; // "orange"
colors[2]; // "yellow"

// Array indecies can be updated with bracket notation as well.
colors[2] = "gold";

// They have a length:
colors.length; // Returns 3

// =========================================
// Important array methods:
// push(value) - adds value to the END of an array
colors.push('green');
// pop() - removes and returns last value in array (and can only remove a single element at a time)
colors.pop();
const removeLast = colors.pop(); // It also can be stored in a variable.


// unshift(value) - adds value to START of an array
colors.unshift('purple');
// shift() - removes and returns first element in an array (and can only remove a single element at a time)
colors.shift();
const removeFirst = colors.shift(); // Can also be stored in a variable.

const colors2 = ["green", "blue", "violet"];
// concat(value) - merges arrays
const colorsRainbow = colors.concat(colors2);

// join(value) - creates a string from an array (by concatenating all the elements in the array)
colors.join(); // returns "red,orange,yellow"
colors.join(''); // returns "redorangeyellow"
colors.join('-'); // returns "red-orange-yellow"
colors.join(', '); // returns "red, orange, yellow"

// includes - looks for a value, then returns a boolean (true or false)
colors.includes('red'); //returns true, in this case
colors.includes('Red'); // returns false, in this case

// indexOf(value) - (like string.indexOf) returns index location of the FIRST element in that array
colors.indexOf('red'); //returns 0
colors.indexOf('orange'); //returns 1
colors.indexOf('yellow'); //returns 2
colors.indexOf('RED'); // returns -1
colors.indexOf('aqua'); // returns -1

// reverse() - reverses an array (destructive method; rewrites/replaces the original array)
colorsRainbow.reverse();

// slice(start, end) - copies a portion of an array
colorsRainbow.slice(); // returns a copy of the full array
colorsRainbow.slice(2); // returns a copy of index[2] until the end of the array
colorsRainbow.slice(2, 5); // returns a copy of index[2] to index[4] (it STOPS at index[5])
colorsRainbow.slice(-2); // returns a copy of the last two index elements in the array

// splice(indexNumber, deleteCount, valueToInsert) - removes/replaces elements in an array
colorsRainbow.splice(5, 0, 'indigo'); // cuts array at index[5] and adds indigo without deleting anything
colorsRainbow.splice(5, 1); // cuts array at index[5] AND deletes 1 index (violet), returns value that was cut
colorsRainbow.splice(5, 1, 'indigo'); // cuts array at index[5] and adds indigo AND deletes 1 index (violet)

// sort() - sorts an array (default way converts everything to strings and compares UTF-16 values to order them)
// Eventually it's better to use a function to pass as an argument to better sort than the default way
const numbers = [100, 99, 1, 32, -15, 2500];
numbers.sort(); // returns array as: [-15, 0, 1, 100, 2500, 32, 99] or based on the INITIAL value, not the numerical value


// ========================================= 
// The spread operator is an ES6 syntax that copies all of an array's elements and you use it with an elipse ... before the array name.

let thisArray = [1, 2, undefined, false, null];
let sameArray = [...thisArray];
// Both variables contain the same array now.

const nums = [13, 4, 5, 21, 3, 3, 1, 2, 7, 6, 4, 2, 53456];
// Spread in funcions:
Math.max(nums) // NaN (Because the max/min method is only looking for a single argument)
Math.max(...nums) // 53456

Math.min(...nums) // 1


// Sread in syntax:
const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

const allPets = [...cats, ...dogs];


// Spread in objects:
const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Caninae' };

const catDog = { ...feline, ...canine };


const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke'
}
const newUser = { ...dataFromForm, id: 2345, isAdmin: false }
