const formExample = document.querySelector("form");
const changeEvent = document.querySelector("#changeEvent");

// The "submit" event is when a form is submitted.
formExample.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("The form was 'submitted'");
});

// =========================================
// The "change" event is for when the input element has changed and the user has left that input field (not when any value within it changes). 
// It counts as a "change" when the input is no longer "focused" and has become "blurred".
changeEvent.addEventListener("change", function (e) {
    console.log(changeEvent.value);
});

const h2 = document.querySelector("h2");

// =========================================
// The "input" event is when the user changes the input field by typing or copy/pasting valid input. It doesn't count for unaffected keystrokes (like control. shift, etc.)
changeEvent.addEventListener("input", function (e) {
    console.log(changeEvent.value); // Show the full value of the data in the input field.
    console.log(e) // Shows the input event object.
    console.log(e.data) // Shows the value of the data that changed.
    h2.innerText = changeEvent.value; // Updating the heading to show the 
});

// =========================================
// Event bubbling refers to events "bubling" up (similar to bubbles floating up in water) to parent elements that also have click events assigned.
// Also see an example using inline events in the HTML markup.

// Seeing how events bubble up to an element they are contained in.Example:
const button = document.querySelector("#changeColor");
const container = document.querySelector("#container");

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
};

// Randomly changes the <div> background color.
button.addEventListener("click", function (e) {
    container.style.backgroundColor = makeRandColor();
    e.stopPropagation(); // This method stops the events from bubbling up so it won't do the "hide" function.
});

// Hides the <div> at the same time the background is changed and you don't see it (regardless of if you click on the text or the button), unless you use the stopPropogation() method.
container.addEventListener("click", function () {
    container.classList.toggle("hide");
});

// Stopping event bubbling:


