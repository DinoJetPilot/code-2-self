// Assigning the button element to a variable using it's ID.
const btn = document.querySelector("#v2");

// Applying the JS function directly through this handler.
btn.onclick = function () {
    console.log("You clicked me!");
    alert("Hey! It worked!");
}

// Or you could define the function, then apply it to the event handler.
function tellMe() {
    console.log("Pssst....");
    console.log("Guess what?");
};

btn.onmouseenter = tellMe;

// Event handlers can be on other elements:
document.querySelector("h1").onclick = () => {
    alert("Oops, I'm not a button!");
};

// Or (the best way) use the addEventListener:
const button = document.querySelector("h3");

button.addEventListener("click", () => {
    alert("Still not a button...");
});
