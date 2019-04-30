var computerChoices = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
var wins = 0;
var loses = 0;
var guesses = 10;
var guessedLetters = [];

// Displays text that I want into HTML
var winsText = document.getElementById("wins-text");
var losesText = document.getElementById("loses-text");
var guessesLeft = document.getElementById("guesses-left");
var guessesText = document.getElementById("guesses-text");

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
  // Determines which key was pressed.
  var userGuess = event.key;

  // Randomly chooses a letter from the computerChoices array. This is the Computer's choice.
  var computerGuess =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];

  // This logic will determine the outcome of the game (win/loss) and increments the appropriate number.

  if (userGuess === computerGuess) {
    wins++;
    guessedLetters = [];
  } else {
    guesses--;
    guessedLetters.push(userGuess);
  }

  if (guesses === 0) {
    loses++;
    guessedLetters = [];
  }
  if (guesses === 0) {
    guesses = 10;
  }

  // Displays the user and computer guesses, and wins/losses/guesses left/guessed letters.
  window.onload = function() {
    winsText.textContent = "Wins: " + wins;
    losesText.textContent = "Losses: " + loses;
    guessesLeft.textContent = "Guesses Left: " + guesses;
    guessesText.textContent = "Your Guesses so far: " + guessedLetters;
  };
};
