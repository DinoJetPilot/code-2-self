let someString = "", someNum = 0;
let returnResult = "", returnConsole = "";

// function repeatWhatever(someString, someNum) {
//     let totalMessage = "";
//     for (i = 0; i < someNum; i++) {
//         totalMessage += someString + " ";
//     }
//     totalMessage += "...";
//     console.log(totalMessage);
// }

// repeatWhatever("Echo", 3);

function repeatWhatever2(someString, someNum) {
    let totalMessage = "";
    for (i = 0; i < someNum; i++) {
        totalMessage += someString + " ";
    }
    totalMessage += "...";
    //  Variable "returnConsole" is only defined within this function, referencing it outside only lists it as "undefined"
    returnConsole = console.log(totalMessage);
    //  Using the "return" value allows the variable to be returned and captured outside of the function.
    return totalMessage;
}

returnConsole = repeatWhatever2("Echo", 3); // undefined
returnResult = repeatWhatever2("Echo", 3); // "Echo Echo Echo ..." 
