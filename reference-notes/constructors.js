// =========================================
// Constructors as functions used to create new objects and define properties/behaviors to those objects.

// Contructors begin with a capital letter.
// Costructors also use "this" keyword to set the properties.
// They define properties/behaviors instead of returning values (like functions).

// They display properties differently than objects. They are set using equal sign and separated by semicolons.
function Kid(name, eyes, age) {
    this.name = name;
    this.eyes = eyes;
    this.age = age;
}

// When calling a constructor, use the "new" operator.
let johnny = new Kid("John", "green", 5);

// Functions that are run as a constructor create instances of those objects, and can be verified with instanceof. It returns a Boolean and is only true is it was created by that constructor.
johnny instanceof Kid; // returns true
lizzy instanceof Kid; // returns false

// Properties defined from the constructor are applied directly onto to instance and are called "own properties" because they each have a separate copy of that property on their instance.
let ownProps = [];
// Properties are also shortened as "props"
