// =========================================
// =========================================
// DOM event handler notes. Event handlers aren't limited to only buttons. They can be on different elements in the DOM (<h1>, <p>, etc.). 

// There are three possible approaches to assigning event handlers to elements. The last is the most ideal.

// (1) Inline code in HTML markup (NOT preferred!):
//     <button onclick="alert('You clicked me!'); alert('Stop clicking me!!')">Click Me</button>

// (2a) Linked JS code with annonymous function:
btn.onclick = function () {
    console.log("You clicked me!");
    alert("Hey! It worked!");
}
// (2b) Linked JS code with arrow function:
document.querySelector("h1").onclick = () => {
    alert("Oops, I'm not a button!");
};

// (3) Using the addEventListener() method:
// It's a generic event method that you use to specify the event as the first argument, then the callback method as the second argument.
const button = document.querySelector("h3");

button.addEventListener("click", () => {
    alert("Still not a button...");
});
// Or it can look written like this:
// button.addEventListener("click", function () {
//     alert("Still not a button...");
// });

// This is the best way because multiple functions can pass through this event, where (1) and (2) only allow for the last function callback to run.
function rock() {
    console.log("Rock...")
}
function paper() {
    console.log("Paper...")
}
function scissors() {
    console.log("Scissors...")
}
function shoot() {
    console.log("Shoot!")
}

const exampleButton = document.querySelector("#someButton");

exampleButton.addEventListener("click", rock)
exampleButton.addEventListener("click", paper)
exampleButton.addEventListener("click", scissors)
exampleButton.addEventListener("click", shoot)