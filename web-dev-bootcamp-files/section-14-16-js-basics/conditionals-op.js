// 0-4 free
// 5-10 $10
// 11-64 $20
// 65+ free

const age = Math.ceil(Math.random() * 100) + 1;

if (age >= 0 && age < 5 || age > 64) {
    console.log("Free!");
} else if (age >= 5 && age < 11) {
    console.log("Half price cost: only $10");
} else {
    console.log("Full price: $20");
}

console.log(age);