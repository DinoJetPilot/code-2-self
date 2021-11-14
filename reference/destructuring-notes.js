// =========================================
// Destructuring allows you to unpack (destructure) the values from arrays or take the properties from bojects to place in distinct variables by copying the values from the array (without changing the original)
// =========================================
// Using destructuring on arrays:

const scores = [9999, 9500, 8350, 7550, 6100, 5000, 250];

const highScore = scores[0];
const runnerUp = scores[1];
const honorableMention = scores[2];

// A better way is to destructuring to assign elements to new variables in one go. Also, you can add the rest syntax "..." to place the remaining elements in an array in a new variable.
const [highScore, runnerUp, honorableMention, ...allOtherScores] = scores;


// =========================================
// Desctructuring on objects is similar to destructuring array, byt copying the properties from the original (not altering the source). Object destructuring is more common though.

const user = {
    email: 'harvey@gmail.com',
    password: 'sCoTt1948sMiTh',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American politician and the first openly gay elected official in the history of California, where he was elected to the San Francisco Board of Supervisors',
    city: 'San Francisco',
    state: 'California'
}

// Traditional way of access certain properties from an object:
const firstName = user.firstName;
const lastName = user.lastName;
const email = user.email;

// More efficient way using destructuring:
const { email, firstName, lastName } = user;
// The order doesn't matter, but the property name does.
// Also, the property names can be change. The example bleow changes "born" into "birthYear" and applies the same 1930 value.
const { born: birthYear } = user;

// Setting default values for the example below.
const user2 = {
    email: 'Stacy@gmail.com',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1987,
    city: 'Tulsa',
    state: 'Oklahoma'
}

const { city, state, died = false } = user2;
// Since "died" is not a property in "user2" the default value false will be used. If a property and value exist, then it will be ignored.


// =========================================
// Desctructuring parameters

function fullName(user) {
    console.log(`${user.firstName} ${user.lastName}`);
    // returns the full name, without using destructuring.

    const { firstName, lastName } = user;
    return `${firstName} ${lastName}`;
    // The above example does the same as the commented out code, but with destructuring.

}

// Also, you could use destructuring in the arguments being passed into the function.
function fullName2({ firstName = "John", lastName = "Doe" }) {
    return `${firstName} ${lastName}`;
}
// Default values can also be included like usual.

// From the previous example using the movies (callback-array-notes.js), you could use destructuring on the original filter:
movies.filter((movie) => movie.score >= 90);
// ^ Above and below should function the same v
movies.filter(({ score }) => score >= 90);

// Again using a traditional approach using map function. 
movies.map(movie => {
    return `${movie.title} (${movie.year}) is rated ${movie.score}`;
});

// Then using the map function with destructuring. Don't forget parentheses are required in a function call when destructuring.
movies.map(({ title, score, year }) => {
    return `${title} (${year}) is rated ${score}`;
});