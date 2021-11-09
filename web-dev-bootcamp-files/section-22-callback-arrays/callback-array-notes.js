// ======================================================
// The "forEach" code was used more frequently before "for..each" loop was introduced. It works the same by getting each element from an array.
//

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

numbers.forEach(print = (el) => console.log(el));

// Prints even numbers from array in console.

// numbers.forEach(function (el) { 
//     if (el % 2 === 0) {
//     console.log(el);
// }
// })

// Below is a condensed way to write the above anonymous function.
numbers.forEach(print = (el) => { if (el % 2 === 0) { console.log(el) } });


const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

// Displays "Movie title - ##/100"
movies.forEach(function (mov) {
    console.log(`${mov.title} - ${mov.score}/100`);
})

// Condensed version with arrow function:
movies.forEach((mov) => {
    console.log(`${mov.title} - ${mov.score}/100`);
})



// ======================================================
// "Map" function: Creates a new array with the results of calling a callback on every element in the array, generating a new array that can be saved to a variable.
//
// Usually a good method for if you need to create a new array with some or all of the data from an original source.
//

const doubles = numbers.map(function (num) {
    return num * 2;
})

const movieTitles = movies.map(function (mov) {
    return mov.title.toUpperCase();
})


// ======================================================
// Arrow functions: a way to simplify syntax for simple function expressions.
//

const square = function (x) {
    return x * x;
}
// Same as the above, but condensed in an arrow function. When has a single argument, you don't have to use parentheses.
//const square = (x) => {
const square = x => {
    return x * x;
}

// For more than one parameter, you must include the parentheses.
const add = (x, y) => {
    return x + y;
}

// If you have no arguments, you also must include the parentheses.
// const rollDie = () => {
//     return Math.floor(Math.random() * 10) + 1;
// }

// ======================================================
// You can utilize implicit return with arrow functions only, by replacing the braces with parentheses. This automatically returns the code within it.
//
// Implicit returns only work if the function has one value to return.
const rollDie = () => {
    return Math.floor(Math.random() * 10) + 1;
}

// Another example of a function condensed into and arrow function with implicit return.
const isEven = function (num) {
    return num % 2 === 0;
}
// ^ This can convert to that v
const isEven = num => num % 2 === 0;

// Shortening previous code with arrow functions: 
//
// const movieTitles = movies.map(function (mov) {
//     return mov.title.toUpperCase();
// })
const moviesData = movies.map(mov =>
    `${mov.title} - ${mov.score}/100`);

// ======================================================
