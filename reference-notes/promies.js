// =========================================
// A promise is an object that represents and eventual completion (or failure) of some asynchronous operation.

// From section 27 of Colt's course. Two example function requests with a success and a fail callback function.

// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    // Using a manufactured delay number for this example:
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) { // 
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}

// An example of "callback hell" using this function with nested successes without using promises (because they were only implemented recently):
fakeRequestCallback('books.com/page1', // url
    function (response) { //success
        console.log("IT WORKED!!!!")
        console.log(response)
        fakeRequestCallback('books.com/page2', // url 2 (if first successful)
            function (response) { // success 2
                console.log("IT WORKED AGAIN!!!!")
                console.log(response)
                fakeRequestCallback('books.com/page3', // url 3 (if first ans second are successful)
                    function (response) { // success 3
                        console.log("IT WORKED AGAIN (3rd req)!!!!")
                        console.log(response)
                    },
                    function (err) { // failure 3
                        console.log("ERROR (3rd req)!!!", err)
                    })
            },
            function (err) { // failure 2
                console.log("ERROR (2nd req)!!!", err)
            })
    }, function (err) { // failure
        console.log("ERROR!!!", err)
    })

// =========================================

// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        // Manufactured delay in second:
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

// If you run the function with an example, then look in the dev tools in the console, it will list the object like this at first:
// > Promise {<pending>}
// If you dropdown the arrow, it that PromiseStatus (i.e. pending) and the PromiseValue (i.e. "undefined" in this case)

// But after completion, it shows:
// > Promise {<resolved>} (or something similar)
// Once completed whether resolved or rejected, the PromisValue updates to the code in that value.

// Doesn't need to be as a variable, but many people use it like that.
// const requestInfo = fakeRequestPromise("fake.website.com/apis/me");

// In order to attach a callback to the resolve value using the then() method. To pass a method to the rejected value, use .catch()
// requestInfo.then(() => {
//     console.log("Success!")
// }).catch(() => {
//     console.log("Failed!")
// });

// An easier to read (but still basic and nested) version of the code above can be formatted like:
// fakeRequestPromise("fake.website.com/apis/info-1")
// requestInfo
//     .then(() => {
//         console.log("Promise resolved!")
//         // Can add the next callback by adding a new url:
//         fakeRequestPromise("fake.website.com/apis/info-2")
//             .then(() => {
//                 console.log("Promise resolved, again!!")
//                 // Can add the next callback by adding a new url:
//                 fakeRequestPromise("fake.website.com/apis/info-3")
//                     .then(() => {
//                         console.log("Promise resolved, yet again!!!")
//                     })
//                     .catch(() => {
//                         console.log("Promise rejected on the third try.")
//                     })
//             })
//             .catch(() => {
//                 console.log("Promise rejected the second time...")
//             })
//     })
//     .catch(() => {
//         console.log("Promise rejected!")
//     });

// An even better way to write the same promise from above:
fakeRequestPromise("fake.website.com/apis/info-1")
    // The argument passed, "data" in this case uses the code from the promise stored in the variable/function at the top of this code.
    .then((data) => {
        console.log("Promise resolved!")
        console.log(data) // Returns `Here is your fake data from ${url}`
        // Can add the next callback by adding a new url with a return:
        return fakeRequestPromise("fake.website.com/apis/info-2")
        // This allows you to chain on the .then() after this promise
    })
    .then((data) => {
        console.log("Promise resolved, again!!")
        console.log(data)
        return fakeRequestPromise("fake.website.com/apis/info-3")
    })
    .then((data) => {
        console.log("Promis resolved the third time!!!")
        console.log(data)
    })
    // You can use a single .catch() for all of the promises chained:
    .catch((err) => {
        console.log("Once a promise rejected on any of them.")
        console.log(err) // Returns 'Connection Timeout :('
    })