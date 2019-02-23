

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

document.onkeyup = function (event) {

    userGuess = event.key.toLowerCase();

    if (userGuess === compChoice) {
        winCount++;
        guesses.push(userGuess);
    } else {
        alert("You pressed an invalid key!")
    }
}
