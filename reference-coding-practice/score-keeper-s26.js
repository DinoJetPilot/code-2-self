const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const player1Score = document.querySelector("#player1Score");
const player2Score = document.querySelector("#player2Score");
const playingTo = document.querySelector("#playingTo");
const winner = document.querySelector("#winner");

// Default values:
let p1 = 0;
let p2 = 0;
let win = 5;

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
    setTimeout(resetGame, 3000);
};

// Changing colors:
function showLeader() {
    if (p1 > p2) {
        player1.style.color = "green";
        player2.style.color = "black";
        player1Score.style.color = "green";
        player2Score.style.color = "black";
        player1.style.color = "green";
        player2.style.color = "black";
    } else if (p1 < p2) {
        player1.style.color = "black";
        player2.style.color = "blue";
        player1Score.style.color = "black";
        player2Score.style.color = "blue";
    } else if (p1 === p2) {
        player1.style.color = "green";
        player2.style.color = "blue";
        player1Score.style.color = "green";
        player2Score.style.color = "blue";
    } else {
        player1.style.color = "black";
        player2.style.color = "black";
        player1Score.style.color = "black";
        player2Score.style.color = "black";
    }
}

// Winning:
function winCondition() {
    showLeader();
    if (p1 === win) {
        player1.style.fontWeight = "700";
        player1Score.style.fontWeight = "700";
        winner.textContent = "Player 1 wins!";
        // winner.innerText = "Player 1 wins!"; (Could also be used)
        disableButtons();
    } else if (p2 === win) {
        player2.style.fontWeight = "700";
        player2Score.style.fontWeight = "700";
        winner.textContent = "Player 2 wins!";
        disableButtons();
    }
};

// Differences between HTMLElement.innerText and Node.textContent (via MDN Docs):

// textContent gets the content of all elements, including <script> and <style> elements. In contrast, innerText only shows "human-readable" elements.

// textContent returns every element in the node. In contrast, innerText is aware of styling and won't return the text of "hidden" elements.
//      Moreover, since innerText takes CSS styles into account, reading the value of innerText triggers a reflow to ensure up-to-date computed styles. (Reflows can be computationally expensive, and thus should be avoided when possible.)

//Both textContent and innerText remove child nodes when altered, but altering innerText in Internet Explorer (version 11 and below) also permanently destroys all descendant text nodes. It is impossible to insert the nodes again into any other element or into the same element after doing so.

// Also... innerHTML:
// Element.innerHTML returns HTML, as its name indicates. Sometimes people use innerHTML to retrieve or write text inside an element, but textContent has better performance because its value is not parsed as HTML.

// Reseting all points and colors:
function resetGame() {
    p1 = 0, p2 = 0;
    player1Score.textContent = p1;
    player2Score.textContent = p2;
    player1.style.color = "black";
    player2.style.color = "black";
    player1Score.style.color = "black";
    player2Score.style.color = "black";
    plusP1.style.display = "initial";
    plusP2.style.display = "initial";
    minusP1.style.display = "initial";
    minusP2.style.display = "initial";
    player1.style.fontWeight = "400";
    player2.style.fontWeight = "400";
    player1Score.style.fontWeight = "400";
    player2Score.style.fontWeight = "400";
    winner.innerText = "Who will win?";
};

reset.addEventListener("click", resetGame);

// Changing the winning condition: 
playingTo.addEventListener("change", function () {
    // alert(this.value);
    resetGame();
    win = parseInt(this.value);
    // win = (parseInt(playingTo.options[playingTo.selectedIndex].value));
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
