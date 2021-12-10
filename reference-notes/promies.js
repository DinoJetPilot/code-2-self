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
