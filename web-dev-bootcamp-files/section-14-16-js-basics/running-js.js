console.log("Hello World!");

/*
These math functions create a random number between 1-2.
Picks a random number between 0-0.9999999999999999 (16 decimal places)
then doubles it
then rounds up.
*/
const rnd = [];
rnd[0] = Math.ceil(Math.random() * 5);
rnd[1] = Math.ceil(Math.random() * 5);

if (rnd[0] === rnd[1]) {
    console.log("Luck wins!");
    console.log(`${rnd[0]} = ${rnd[1]}`);
} else {
    console.log("A very happy UNbirthday to YOU!");
    console.log(`${rnd[0]} =/= ${rnd[1]} `);
}

console.log('');

// Testing array to find even or odd number.
// let num = 0, numCheck = 0;
for (i = 0; i < 2; i++) {
    let num = rnd[i];
    let numCheck = num % 2;
    if (numCheck === 0) {
        console.log(`The number ${num} is even.`);
    } else {
        console.log(`The number ${num} is odd.`);
    }
}

console.log('');

let rndDay = Math.ceil(Math.random() * 7) - 1;
const day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',];
// If using as user input, but forcing it into all lowercase (so you'd want to do the same with your check, or trim and replace it to be right)
// const dayOfWeek = prompt('Enter a day of the week').toLowerCase();
let dayOfWeek = day[rndDay];

console.log(dayOfWeek);

if (rndDay === 0) {
    console.log("*Ugh* I hate Mondays more than Garfield!");
} else if (rndDay === 4) {
    console.log("Boohyah! Maybe it's payday.");
} else if (rndDay > 4) {
    console.log('Woot! Par-tay!!');
} else {
    console.log("Well, at least it's not Monday...")
}
