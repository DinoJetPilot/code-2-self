// =========================================
// Using the try and catch methods in functions, promises, etc. helps you attempt to run code, then dictact backup code to run in the event of failure/error/rejection.

function yell(msg) {
    // The "try" attempts the code to see if an error is generated. If not, the code runs.
    try {
        console.log(msg.toUpperCase().repeat(3));
        // The "catch" is run if the "try" generates an error.
    } catch (e) {
        // The "e" is a variable placeholder that shows the error that would stop the code from running.
        console.log(e);
        console.log("Please pass a string next time!")
    }
}

// =========================================
// The "async" keyword is used before a function to always return a promise. If the functions returns the promise, it is resovled with whatever value it returns. Otherwise, it's rejected as usual.

function hello() {
    // A blank function that just returns "undefined"
}
// Basic syntax for async is as follows:
async function hello() {
    // The same blank function has the promise resolved and returns the value "undefined"
}

// Basic syntax for async arrow functions:
const shout = async () => {
    // Errors can be thrown through promises as well:
    throw "Houston, we have a problem!";
    return "Hello!"
}
// Can still chain .then and .catch methods on resolved promises.
shout()
    .then(data => {
        console.log("Promise returns: ", data); // Returns "Promise returns: Hello!" if resolved
    })
    .catch(err => {
        console.log("Uh-oh...", err); // Returns "Uh-oh... Houston, we have a problem!" is promise is rejected
    })

// =========================================
// Looking at an oversimplification of how you used async promise functions to check for login.

const login = async (username, password) => {
    if (!username || !password) throw "Missing credentials." // If only one argument passes to the function, it throws this error
    if (password === "password123") return "Booyah!" // If correct, it returns the promise resolved
    throw "Invalid username or password." // If both credentials are there, but one is wrong, it throws this error
}

// =========================================
// =========================================
// The "await" keyword halts execution on the async function until the promise is resolved or rejected.

// Using the previous example:
const delayedColorChangePromise = (color, delay) => {
    // This one only uses two arguments - the color and the delay (no callback needed)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    });
};

async function rainbow() {
    // After first promise is resolved, then it runs this next one. The cycle continues for each chained then as long as they are resolved.
    await delayedColorChangePromise("red", 1000)
    await delayedColorChangePromise("orange", 1000)
    await delayedColorChangePromise("yellow", 1000)
    await delayedColorChangePromise("green", 1000)
    await delayedColorChangePromise("blue", 1000)
    await delayedColorChangePromise("indigo", 1000)
    await delayedColorChangePromise("violet", 1000)
    return "Done!"
};

// You can still chain on then/catch statements to the end of this seemingly async function.
rainbow()
    .then(() => console.log("End of the rainbow!"));
// Or you can create another async function to await the end of the promises. So the above code can be rewritten as:
async function printRainbow() {
    await rainbow();
    console.log("End of the rainbow!");
}

// =========================================
// Returning to the mock promise example:
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        // Manufactured delay in seconds:
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

async function makeTwoRequests() {
    // The "fakeRequest" promise/function only stores the result in "data1" if the promise is resolved.
    let data1 = await fakeRequest("/page1");
    // If the promise is rejected, then no code after it will run.
    console.log(data1);
    console.log("None of this code runs if the promise is rejected.");
}
// To solve this issue, use try and catch:
async function makeTwoRequestsBetter() {
    try {
        // This code is attempted:
        let data1 = await fakeRequest("/page1");
        console.log(data1);
    } catch (e) {
        // But if it throws an error, then runs this code instead. 
        console.log("The error is caught: ", e)
        //The "e" parameter can be called any variable, but stores the error data, if you want to use it.
    }
}
