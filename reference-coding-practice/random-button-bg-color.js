const pickRandomColors = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};

function colorize() {
    this.style.backgroundColor = pickRandomColors();
    this.style.color = pickRandomColors();
}

const buttons = document.querySelectorAll("button");
for (let button of buttons) {
    button.addEventListener("click", colorize);
}

const h1s = document.querySelectorAll("h1");
for (let h1 of h1s) {
    h1.addEventListener("click", colorize);
}
