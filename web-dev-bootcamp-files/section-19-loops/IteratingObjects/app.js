// Object literals (the example below) are not iterable objects using the "for...of" loop.
const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}
// ===================================
// USING FOR...IN TO ITERATE AN OBJECT
// ===================================

for (let person in testScores) {
    console.log(`${person} scored ${testScores[person]}`);
}

// Object.keys(testScores) 
// Returns the keys as an array (i.e. ['keenan', 'damon', 'kim', ...])

// Object.values(testScore)
// Returns the values as an array (i.e. [80, 67, 89, ...])

// Object.entries(testScores)
// Returns each key and value as an array, within an array. For example:
// [["keenan", 80], ["damon", 67], ["kim", 89] ...]


// ==============================================
// Using Object methods to iterate
// (turn data into an array and then use for...of)
// ==============================================

let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
    total += score;
}
console.log(total / scores.length)

