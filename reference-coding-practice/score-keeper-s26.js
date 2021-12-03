const player1Score = document.querySelector("#player1Score");
const player2Score = document.querySelector("#player2Score");
const playingTo = document.querySelector("#playingTo");
const winner = document.querySelector("#winner");

let p1 = 0;
let p2 = 0;
let win = (parseInt(playingTo.options[playingTo.selectedIndex].value));

const plusP1 = document.querySelector("#plusP1");
const plusP2 = document.querySelector("#plusP2");
const minusP1 = document.querySelector("#minusP1");
const minusP2 = document.querySelector("#minusP2");
const reset = document.querySelector("#reset");

player1Score.innerText = p1;
player2Score.innerText = p2;

// Disable buttons:
function disableButtons() {
    plusP1.style.display = "none";
    plusP2.style.display = "none";
    minusP1.style.display = "none";
    minusP2.style.display = "none";
};

// Winning:
function winCondition() {
    if (p1 === win) {
        winner.innerText = "Player 1 wins!";
        disableButtons();
    } else if (p2 === win) {
        winner.innerText = "Player 2 wins!";
        disableButtons();
    }
};

// Reseting all points:
reset.addEventListener("click", function () {
    p1 = 0, p2 = 0;
    player1Score.innerText = p1;
    player2Score.innerText = p2;
    plusP1.style.display = "initial";
    plusP2.style.display = "initial";
    minusP1.style.display = "initial";
    minusP2.style.display = "initial";
    winner.innerText = "Who will win?";
});

// Changing the winning condition: 
playingTo.addEventListener("change", function () {
    win = (parseInt(playingTo.options[playingTo.selectedIndex].value));
});

// Adding points:
plusP1.addEventListener("click", function () {
    p1++;
    winCondition();
    player1Score.innerText = p1;
});

plusP2.addEventListener("click", function () {
    p2++;
    winCondition();
    player2Score.innerText = p2;
});

// Subtracting points:
minusP1.addEventListener("click", function () {
    p1--;
    if (p1 < 0) {
        p1 = 0;
    }
    player1Score.innerText = p1;
});

minusP2.addEventListener("click", function () {
    p2--;
    if (p2 < 0) {
        p2 = 0;
    }
    player2Score.innerText = p2;
});
