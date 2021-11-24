// -----------------------------
//
// Traditional functions vs. arrow functions with the keyword "this"

// When the function in this variable uses "this", it's refering to the parent object, "person", in this case. 
const person1 = {
    firstName: "Viggo",
    lastName: "Mortenson",
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    // This "shoutName" function uses an arrow function, and because the arrow function is within a traditionally called function, "this" is nested in the "shoutName" which is a part of the "person" object.
    shoutName: function () {
        setTimeout(() => {
            console.log(this);
            console.log(this.fullName())
        }, 1000)
    }
};

// Howerver, if you use an arrow function in place of the traditionally called anonymous function, "this" now refers to the parent object, "window" which makes "this.firstName" = "window.firstName", and it'll return undefined. 
const person2 = {
    firstName: "Viggo",
    lastName: "Mortenson",
    fullName: () => {
        return `${this.firstName} ${this.lastName}`
    }
};