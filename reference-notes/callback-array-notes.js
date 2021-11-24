// =========================================
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
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going on 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Jingle All the Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
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



// =========================================
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


// =========================================
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

// =========================================
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

// =========================================
// "setTimeout" requires passing through two arguments - first, the callback function, second, the delay (in miliseconds)

console.log("This prints out first");

setTimeout(() => { console.log("This took 3,000 ms before pinting in the console...") }, 3000);

console.log("Then this prints out BEFORE the setTimeout function runs (but is AFTER tht code).");

// =========================================
// "setInterval" requires passing through two arguments - first, the callback function, second, the repeat interval (in miliseconds)

setInterval(() => { console.log(Math.floor(Math.random() * 10) + 1) }, 2000);
// Above interval should repeat indefinitely every 2 seconds, but to stop use the "clearInterval()" with a value, byt saving it to a variable.

const intId = setInterval(() => { console.log(Math.floor(Math.random() * 10) + 1) }, 2000);

clearInterval(intId);


// =========================================
// The "filter" method creates an array with all elements that pass a test implemented by a callback functionthat returns a Boolean.

const oddNums = numbers.filter(n => {
    return n % 2 !== 0
});


// const goodMovies = movies.filter(mov => {
//     return mov.score > 80
// });

// Can condense above code more using more of the arrow functions.
// const goodMovies = movies.filter(m => m.score > 80);
// const goodTitles = goodMovies.map(m => m.title);

// The two above lines can further be combined as:
movies.filter(m => m.score > 80).map(m => m.title);
// ^ this can also look like v
movies
    .filter(m => m.score > 80)
    .map(m => m.title);

const badMovies = movies.filter(m => m.score < 70);
const recentMovies = movies.filter(m => m.year > 1999);


// =========================================
// "every" check whether ALL elements in an array pass a provided function. It returns a Boolean value.
//
// "some" is similar to "every" but returns true if ANY array element passes the function test.
//

const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77]

const didAllPass = exams.every(score => score >= 75);
const didAnyMaster = exams.some(score => score >= 90);


// =========================================
// "reduce" executes a reducing function on each element of the array, resulting in a single value.
//

// value "accumulator" and "currentValue" can be named anything, but the first value is what's being reduced. The second value is each individual element in the array.
// For example:
[3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});
// CALLBACK    - accumulator - currentValue - return value
// first call     3             5               8
// second call    8             7               15
// third call     15            9               24
//  fourth call   24            11              35


const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// Usin a "for...of" array loop:
// let total = 0;
// for (let price of prices) {
//     total += price
// };
// console.log(total);

// Same as above, but using "reduce" funtion:
// const total = prices.reduce((total, price) => {
//     return total + price
// });

// Same again, condensed more:
const total = prices.reduce((total, price) => total + price);
// Can also add a second argument as a starting value. In the example below, 100 is the starting value, then all values are combined and added to that.
// const total = prices.reduce((total, price) => total + price, 100);

// Trying to find the smallest element in the array:
const minPrice = prices.reduce((minPrice, price) => {
    if (price < min) {
        return price;
    } else {
        return min;
    }
});

// Finding the highest rated movie from array earlier:
const highestRating = movies.reduce((highest, mov) => {
    if (highest.score > mov.score) {
        return highest;
    } else {
        return mov;
    }
});
