function callTwice(func) {
    func();
    func();
}

function callTenTimes(f) {
    for (let i = 0; i < 10; i++) {
        f();
    }
}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}

callTwice(rollDie);
console.log("^ callTwice ... callTenTimes v");
callTenTimes(rollDie);

console.log("~ ~ ~ ~ ~ ~ ~ ~ ~ ~");

function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log("Woot!");
            console.log("=)");
        }
    } else {
        return function () {
            alert("=(");
            alert("=(");
            alert("=(");
            alert("=(");
            alert("=(");
        }
    }
}

const mystery = makeMysteryFunc();

// function isBetween(num) {
//     return num >= 50 && num <= 100;
// }

function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}

const isChild = makeBetweenFunc(0, 18);
const isAdult = makeBetweenFunc(19, 64);
const isSenior = makeBetweenFunc(65, 120);
