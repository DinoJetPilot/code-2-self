// Checking the connection.
console.log("JS file connected!")

// Test some (hopefully) awesome code below:

function largestOfFour(arr) {
    const largestArr = [];
    for (let i = 0; i < arr.length; i++) {
        let biggest = Number.NEGATIVE_INFINITY;
        for (let j = 0; j <= arr[i].length; j++) {
            biggest < arr[i][j] ? biggest = arr[i][j] : biggest;
        }
        largestArr.push(biggest);
    }
    return largestArr;
}

let q1 = largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
let q2 = largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);