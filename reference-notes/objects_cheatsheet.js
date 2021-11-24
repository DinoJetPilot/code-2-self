// =========================================
To make an object literal:
const dog = {
    name: "Rusty",
    breed: "unknown",
    isAlive: false,
    age: 7
}
// All keys will be turned into strings!
// i.e. "name" is the key, and "Rusty" is the value

// To retrieve a value:
dog.age; //7
dog["age"]; //7

//updating values
dog.breed = "mutt";
dog["age"] = 8;

// Dot notation is rigid, but square brakets allow for dynamic elements.
// For example year[birthYear] looks for the value of that variable, then it will put that value inplace of the variable and search for a key with that value


// Example use from Colt's Bootcamp
const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

//YOUR CODE GOES DOWN HERE:
let fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`;

// An array can contain obects...
const shoppingCart = [
    {
        product: 'milk',
        price: 2.99,
        quantity: 1
    },
    {
        product: 'eggs',
        price: 3.99,
        quantity: 2
    },
    {
        product: 'bread',
        price: 2.49,
        quantity: 2
    }
]
// To access an element:
shoppingCart[1].price // returns 3.99


// ...Or an object can have arrays and objects.
const student = {
    firstName: John,
    lastName: Doe,
    classes: ['English', 'Math'],
    exams: {
        midterm: 90,
        final: 88
    }
}