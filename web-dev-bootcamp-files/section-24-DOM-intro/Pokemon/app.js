const container = document.querySelector("#container");
const baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const triColor = function (c) {

    if (x > 2 || x < 0) {
        x = 0;
        c.style.borderColor = "lightGray";
    } else if (x === 0) {
        c.style.borderColor = "lightGray";
    } else if (x === 1) {
        c.style.borderColor = "gray";
    } else if (x === 2) {
        c.style.borderColor = "black";
    }
    x++;
};

let x = 0;

// The real total for Pokemon reference is 899; 151 for the original
for (i = 1; i <= 151; i++) {
    const newDiv = document.createElement("div");
    triColor(newDiv);
    if (i > 18) {
        x = 0;
    }
    // newDiv.style.display = "inline-block";
    // newDiv.style.borderWidth = "2px";
    // newDiv.style.borderStyle = "solid";
    // newDiv.style.borderColor = "red";
    // newDiv.style.margin = "5px";
    newDiv.classList.add("pokemon");
    container.appendChild(newDiv);

    const newImg = document.createElement("img");
    // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/#.png
    newImg.src = `${baseURL}${i}.png`;
    newImg.title = `Pokemon #${i}`;
    newImg.alt = `Poke ref. #${i}`;
    newDiv.appendChild(newImg);

    const newSpan = document.createElement("span");
    newSpan.innerText = `# ${i}`;
    newDiv.appendChild(newSpan);
}