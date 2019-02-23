

var userGuess;
var winCount = 0;
var lossCount = 0;
var guessesLeft = 10;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guesses = [];
var compChoice = alphabet[Math.floor(Math.random() * alphabet.length) + 1];

var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var guessLeft = document.getElementById("guessLeft");
var guessPast = document.getElementById("guessPast");

console.log(compChoice);

function updateGame() {
    guessesLeft = 9;
    compChoice = alphabet[Math.floor(Math.random() * alphabet.length) + 1];
    console.log(compChoice);
    guesses = [];
    guessLeft.textContent = guessesLeft;
    guessPast.textContent = "";
}

document.onkeyup = function (event) {

    userGuess = event.key.toLowerCase();

    if (userGuess === compChoice) {
        winCount++;
        alert("You Win!");
        wins.textContent = winCount;
        updateGame();

    } else if (guessesLeft > 0) {
        guessesLeft--;
        if (guessesLeft === 0) {
            lossCount++;
            alert("You lose");
            losses.textContent = lossCount;
            updateGame();
        }

        guesses.push(userGuess);
        guessLeft.textContent = guessesLeft;
        guessPast.textContent += userGuess + ", ";
    }
}
