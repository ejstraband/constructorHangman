// start the app
console.log("**Applicaton Start**");

// load prompt
var prompt = require('prompt');

// require word.js
// var Word = require("./Word.js");

// manual testing variables
  // set the secret word
  // var secretWord = "Giraffe";
  // console.log("Secret Word is: " + secretWord);

// create a guess variable
var currentGuess;

// secretWordVariable
var secretWord;

// letters guessed array
lettersGuessed = [];

// turns remaining
var turnsRemaining = 10;

// call a secret word out of an array
function pickSecretWord() {
var secretWordArray = ["facebook", "twitter", "instagram", "myspace", "friendster", "linkedin"]
console.log("Word Options: " + secretWordArray);
var wordChoiceTotal = secretWordArray.length;
console.log("number of words: " + wordChoiceTotal);
randomNumber = (Math.floor( Math.random() * 6));
secretWord = secretWordArray[randomNumber];
console.log("The Secret Word Is: " + secretWord);
}

function promptForInput() {
  // require letters at the prompt
  var schema = {
    properties: {
      guess: {
        pattern: /[a-zA-Z]/,
        message: 'guesses must be single letters',
        required: true
      }
    }
  };

  // start prompt 
  prompt.start();

  prompt.get(schema, function (err, result) {
  currentGuess = result.guess;
  console.log('you guessed: ' + currentGuess);
  console.log("let's validate the guess");
    
  promptForInput();
  });
}

function validateTheGuess() {
  // validate the guess
  console.log("valdating the guess");
  turnsRemaining--;

}

function updateTheDisplay() {
  // update the UI
    // display the current word
    // display turns remaining
    console.log("Turns Remaining: " + turnsRemaining);
  }


function playTheGame() {    
  pickSecretWord();
  if (turnsRemaining > 0) {
    updateTheDisplay();
    promptForInput();
  } else {
    console.log("Game Over")
    playTheGame();
  }
}

playTheGame();