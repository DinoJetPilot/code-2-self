// =========================================
// Conditional Statements and Loops.

// =========================================
// if, else if, else conditional statement:

// 0-4 free
// 5-10 $10
// 11-64 $20
// 65+ free

const age = Math.ceil(Math.random() * 100) + 1;
console.log(age);

if (age >= 0 && age < 5 || age > 64) {
    console.log("Free!");
} else if (age >= 5 && age < 11) {
    console.log("Half price cost: only $10");
} else {
    console.log("Full price: $20");
}

// =========================================
// The conditional (ternary) operator is a shorthand version of the if..else conditional. The syntax looks like:
// condition ? truthyExpression : falsyExpression

function quickCheck(arr, elem) {
    // Checks if array has "mushrooms", but doesn't so returns -1, since that's less than 0, it returns the falsy statment "No luck!"
    return (arr.indexOf(elem) >= 0) ? "Found it." : "No luck!";
};

quickCheck(['squash', 'onions', 'shallots'], 'mushrooms');

// ===================================
// Nested loop example:

for (let i = 1; i <= 10; i++) {
    console.log(`i is: ${i}`)
    for (let j = 1; j < 4; j++) {
        console.log(`     j is: ${j}`)
    }
}

// =========================================
// for loops

for (let num = 1; num <= 10; num += 1) {
    console.log(num);
}

// More examples:
// prints even numbers up to 20. 
for (let i = 1; i <= 20; i += 2) {
    console.log(i)
}

// counts down from 100 by tens.
for (let i = 100; i >= 0; i -= 10) {
    console.log(i);
}

// prints 10 to 1000 in increments of 10.
for (let i = 10; i <= 1000; i *= 10) {
    console.log(i);
}

// DO NOT RUN THIS LOOP
// INFINITE LOOP!! BAD!!
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// for (let i = 20; i >= 0; i++) {
//     console.log(i)
// }
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Iterating over an array:
const animals = ["Aardvark", "Aardwolf", "African Elephant", "African Tree Pangolin", "Alligator", "Alpaca", "Anteater", "Antelope", "Ape(s)", "Arabian Horse", "Armadillo", "Arthropod(s)", "Asian Elephant", "Aye-Aye", "Baboon", "Badger", "Bandicoot", "Bangle Tiger", "Bat(s)", "Bearded Dragon", "Beaver", "Beluga Whale", "Bengal Tiger", "Big-Horned Sheep", "Billy Goat", "Bird(s)", "Bison", "Black Bear", "Black Footed Rhino", "Black Howler Monkey", "Black Rhino", "Blacktip Reef Shark", "Blue Shark", "Blue Whale", "Boar", "Bob-Cat", "Bonobo", "Bottlenose Dolphin", "Bottlenose Whale", "Brown Bear", "Buffalo", "Bull", "Bull frog", "Caiman Lizard", "Camel", "Capuchin Monkey", "Capybara", "Caribou", "Cat(s)", "Cattle", "Cheetah", "Chimpanzee", "Chinchilla", "Chipmunk", "Common Dolphin", "Common Seal", "Coral(s) and Anemone(s)", "Cougar", "Cow(s)", "Coyote", "Crocodile", "Crustacean(s)", "Dart Frog", "Deer", "Degus", "Dik-Dik", "Dingo", "Dog(s)", "Dogfish Shark", "Dolphin", "Donkey", "Door Mouse", "Dormouse", "Draft Horse", "Duckbill Platypus", "Dugong", "Dusky Shark", "Elephant", "Elephant Seal", "Elk", "Ermine", "Eurasian Lynx", "Ferret", "Fish(es)", "Florida Panther", "Flying Fox", "Fox", "Fresh Water Crocodile", "Frog", "Fur Seal", "Galapagos Land Iguana", "Galapagos Shark", "Galapagos Tortoise", "Gazelle", "Gecko", "Giant Anteater", "Giant Panda", "Gibbon", "Giraffe", "Goat", "Gopher", "Gorilla", "Gray Fox", "Gray Nurse Shark", "Gray Reef Shark", "Gray Whale", "Great White Shark", "Green Poison Dart Frog", "Green Sea Turtle", "Grizzly Bear", "Groundhog", "Guinea Pig", "Hairy-Nosed Wombat", "Hammerhead Shark", "Harbor Porpoise", "Harbor Seal", "Hare", "Harp Seal", "Hawaiian Monk Seal", "Hedgehog", "Hippopotamus", "Horn Shark", "Horse(s)", "Howler Monkey", "Humpback Whale", "Hyena", "Hyrax", "Iguana", "Iguanodon", "Impala", "Insect(s)", "Irrawaddy Dolphin", "Jackal", "Jackrabbit", "Jaguar", "Jellyfish", "Kangaroo", "Kermode Bear", "Killer Whale", "Koala", "Komodo Dragon", "Kookaburra", "Lama", "Lamb", "Lancelet", "Least Weasel", "Leatherback Sea Turtle", "Lemming", "Lemon Shark", "Lemur", "Leopard", "Leopard Gecko", "Leopard Seal", "Leopard Shark", "Lion", "Llama", "Loggerhead Turtles", "Lynx"];

for (let i = 0; i < animals.length; i++) {
    console.log(i, animals[i])
}


// =========================================
// while loops

// Code below is better to be used as a for loop, but this accomplishes the same thing less efficiently.
let count = 0;
while (count < 10) {
    count++;
    console.log(count)
}

// Using while loops to do a number guessing game:
let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:");
    } else {
        guess = prompt("Too low! Enter a new guess:");
    }
}

if (guess === 'q') {
    console.log("OK, YOU QUIT!")
} else {
    console.log("CONGRATS YOU WIN!")
    console.log(`You got it! It took you ${attempts} guesses`)
}