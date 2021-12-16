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