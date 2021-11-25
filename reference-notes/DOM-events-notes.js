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

// =========================================
// Using the keyword "this" in callback functions.

// Callback function:
function colorize() {
    this.style.backgroundColor = pickRandomColors();
    this.style.color = pickRandomColors();
}

// Set element(s) in variable.
const buttons = document.querySelectorAll("button");
// Iterate through elements, using callback function.
for (let button of buttons) {
    button.addEventListener("click", colorize);
}

// =========================================
// Parameters can be included in event handlers, and this can be seen in this example (provided there's a button on the page).
document.querySelector("button").addEventListener("click", function (event)
// Usually the parameter used is "event", "evt", or just "e".
{
    console.log(event);
})

// =========================================
// =========================================
// Keyboard inputs and event objects.

const windowInput = document.querySelector("HTML");
// Selects the HTML document and console.logs when a key is pressed down.
windowInput.addEventListener("keydown", function (e) {
    console.log("Pressed!");
});
// "keydown" means a key was pressed down (counts up delayed if held down).
// "keyup" means the key was released from being pressed down.

// Window uses the global event handler.
window.addEventListener("keydown", function (e) {
    console.log(e);
    console.log(e.key); // Lists the key name, like "q" or "control" or " " (a space).
    console.log(e.code); // Lists the key code, like "KeyQ" or "ControlLeft" or "Space".
});
// The "key" is useful for the key value/letter (other languages don't use English letters).
// The "code" is useful for key location, for example, if you code "w", "a", "s", and "d" for up, left, down, and right, it's better to use the code and not just the key.

// Another example using the window eventListener, but only looking for certain key presses.
window.addEventListener("keydown", function (e) {
    switch (e.code) {
        case "ArrowUp":
            console.log("^");
            console.log("^");
            break;
        case "ArrowDown":
            console.log("v");
            console.log("v");
            break;
        case "ArrowLeft":
            console.log("<<");
            break;
        case "ArrowRight":
            console.log(">>");
            break;
        default:
            console.log("N/A")
    }
});

// =========================================
// 