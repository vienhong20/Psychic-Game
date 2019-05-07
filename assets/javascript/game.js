//2 - Set the initial global variables
var options = [
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
var userGuess = null;
var guessesLeft = 9;
var guessesMade = [];
var wins = 0;
var losses = 0;

//3 - create a function
document.onkeyup = function() {
  //3.1 - Computer makes a choice - choice is stored in a variable.
  var computerGuess = options[Math.floor(Math.random() * options.length)];
  console.log("The Computer guessed " + computerGuess);

  //3.2 - User makes a choice - choice is stored in a variable.
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  console.log("The User guessed " + userGuess);

  //3.3 - Computer choice is compared to User choice.
  if (userGuess == computerGuess) {
    console.log("same");
    //count win
    wins++;
    console.log("The user has won " + wins + " times.");
    //reset guessesLeft count to 9
    guessesLeft = 9;
  } else {
    console.log("different");
    guessesMade++;
    guessesLeft--;
    document.querySelector("#guessesSoFar").innerHTML += userGuess + " ";
    console.log("The user has guessed a total of " + guessesMade + " times.");
    if (guessesLeft == 0) {
      losses++;
      guessesLeft = 9;
      userGuess = null;
      document.querySelector("#guessesSoFar").innerHTML = userGuess;
    }
  }

  //3.4 - Display wins, losses, guesses left for each round
  document.querySelector("#winsCount").innerHTML = wins;
  document.querySelector("#lossesCount").innerHTML = losses;
  document.querySelector("#guessesLeft").innerHTML = guessesLeft;
};
