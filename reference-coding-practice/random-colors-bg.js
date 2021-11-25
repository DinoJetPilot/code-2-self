// Based off of Colt's course, Section 25: #259 "Random Color Exercise."
// Dynamically change the document's body background color to another random color.

// const bodySet = document.querySelector("body");
// Instead of the above, you can just use "document.body"
const firstDiv = document.querySelector("div");

const rgbText = document.querySelector("#rgbColors");
const changeButton = document.querySelector("#changeColor");

let varRGB1 = 255, varRGB2 = 255, varRGB3 = 255;

document.body.style.textAlign = "center";
firstDiv.style.paddingBottom = "1em";

// Update background values.
function changeBG() {
    changeText();
    document.body.style.backgroundColor = `rgb(${varRGB1}, ${varRGB2}, ${varRGB3})`;
};

// Update rgb text.
function changeText() {
    rgbText.innerText = `rgb(${varRGB1}, ${varRGB2}, ${varRGB3})`;
};

// Random number function.
function randomNum() {
    return Math.floor(Math.random() * 256);
};

// Check if BG color is dark or light and modify text to white or black.
function checkValue() {
    let varRGB123 = varRGB1 + varRGB2 + varRGB3;
    if (varRGB123 >= 299) {
        document.body.style.color = "black";
    } else {
        document.body.style.color = "white";
    }
};

function randomRGB() {
    varRGB1 = randomNum();
    varRGB2 = randomNum();
    varRGB3 = randomNum();
    checkValue();
    // for (let i = 1; i < 4; i++) {
    //     varRGB[i] = Math.floor(Math.random() * 255) + 1;
    // }
}

changeText();
changeButton.addEventListener("click", randomRGB);
changeButton.addEventListener("click", changeBG);