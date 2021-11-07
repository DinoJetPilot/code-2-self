
// try {
//     hello.toUpperCase();
// } catch {
//     console.log("ERROR!!!!")
// }
// hello.toUpperCase();

// console.log("AFTER!")

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