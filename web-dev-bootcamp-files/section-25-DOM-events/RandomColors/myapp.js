const bodySet = document.querySelector("body");
const firstDiv = document.querySelector("div");

const rgbText = document.querySelector("#rgbColors");
const changeButton = document.querySelector("#changeColor");

let varRGB1 = 255, varRGB2 = 255, varRGB3 = 255;

bodySet.style.textAlign = "center";
firstDiv.style.paddingBottom = "1em";

// Update background values.
function changeBG() {
    changeText();
    bodySet.style.backgroundColor = `rgb(${varRGB1}, ${varRGB2}, ${varRGB3})`;
};

// Update rgb text.
function changeText() {
    rgbText.innerText = `rgb(${varRGB1}, ${varRGB2}, ${varRGB3})`;
};

// Random number function.
function randomNum() {
    return Math.floor(Math.random() * 255) + 1;

};

function randomRGB() {
    varRGB1 = randomNum();
    varRGB2 = randomNum();
    varRGB3 = randomNum();
    // for (let i = 1; i < 4; i++) {
    //     varRGB[i] = Math.floor(Math.random() * 255) + 1;
    // }
}

changeText();
changeButton.addEventListener("click", randomRGB);
changeButton.addEventListener("click", changeBG);