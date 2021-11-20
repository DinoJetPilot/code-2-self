// =========================================
// ECMAScript, or ES, is a standardized version of JavaScript. Because all major browsers follow this specification, the terms ECMAScript and JavaScript are interchangeable.

// ES5 (ECMAScript 5) was finalized in 2009. ES6, released in 2015, added many powerful new features to the language. Some of these new features are: 

// arrow functions
// destructuring
// classes
// promises
// modules

// =========================================
// A "Promise" is a constructor function that will work asynchronously, by either fulfilling the promise or failing to do so. It requires the "new" keyword and has two parameters, "resolve" and "reject". The method(s) within will determine the outcome of the promise.

const myEndlessPromise = new Promise((resolve, reject) => {
    // some method(s)
});

// Promises have three states, "pending"(the default state), "resolve", and "rejected". Within the promise, "resolve" is what fulfills a promise, "reject" is what causes it to fail.

const myBetterPromise = new Promise((resolve, reject) => {
    if (someObjectVariable) {
        resolve("Promise was fulfilled");
    } else {
        reject("Promise was rejected");
    }
});

// Promises tend to be most used with someting like server requests or other considerations that that an unknown amount of time to complete.

// You can add the "then" method executes the code immediately after the promise is fulfilled. "result" is from the argument given in the "resolve" method of the promise.

myPromise.then(result => { });

// A "catch" is a methos like the "then", except it's used for when a promise is rejected. It is also executed immediately after the promise is rejected. Similarly, "error" is from the "reject" argument in the promise.

myPromise.catch(error => { });

// =========================================
// 