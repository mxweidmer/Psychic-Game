

var userGuess;
var winCount = 0;
var lossCount = 0;
var guessesLeft = 10;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guesses = [""];
var compChoice = alphabet[Math.floor(Math.random() * alphabet.length) + 1];

var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var guessLeft = document.getElementById("guessLeft");
var guessPast = document.getElementById("guessPast");

function updateGame() {
    guessesLeft = 10;
    compChoice = alphabet[Math.floor(Math.random() * alphabet.length) + 1];
    console.log(compChoice);
    guesses = [];
    guessLeft.textContent = guessesLeft;
    guessPast.textContent = "";
}

function checkLetter(user) {
    for (i = 0; i < guesses.length; i++) {
        if (guesses[i] === user) {
            return true;
        }
    }
    return false;
}

document.onkeyup = function (event) {

    userGuess = event.key.toLowerCase();

    if (checkLetter(userGuess) === false) {
        if (userGuess === compChoice) {
            winCount++;
            wins.textContent = winCount;
            updateGame();

        } else if (guessesLeft > 0) {
            guessesLeft--;
            if (guessesLeft === 0) {
                lossCount++;
                losses.textContent = lossCount;
                updateGame();
            } else {
                guesses.push(userGuess);
                guessLeft.textContent = guessesLeft;
                guessPast.textContent += userGuess + ", ";
            }
        }

    } else {
        return false;
    }
}
