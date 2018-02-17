// start the app
console.log("**Applicaton Start**");

// set the secret word
var secretWord = "Giraffe";
console.log("Secret Word is: " + secretWord);

// secret word array
secretWordArray = [];

// create a guess variable
var currentGuess;

// letters guessed array
lettersGuessed = [];

// load prompt
var prompt = require('prompt');

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


//   for (i=0; i < secretWord.length; i++) {
//   }

// start prompt 
prompt.start();

prompt.get(schema, function (err, result) {
currentGuess = result.guess;
console.log('you guessed: ' + currentGuess);
console.log("let's validate the guess");
});

// Letter.js: Contains a constructor, Letter
function Letter(currentGuess) {
// This constructor should be able to either 
// display an underlying character or a blank 
// placeholder (such as an underscore), depending 
// on whether or not the user has guessed the
// letter. That means the constructor should define:
// A string value to store the underlying character for the letter
    this.currentGuess = currentGuess;
// A boolean value that stores whether that letter has been guessed yet
    this.letterAlreadyGuessed = false;
};

// A function that takes a character as an argument and checks it against 
// the underlying character, updating the stored boolean value to true if it was guessed correctly
function updateSecretWord() {

};

// A function that returns the underlying character if the letter has 
// been guessed, or a placeholder (like an underscore) if the letter has not been guessed

function guessChecker(guess) {
    if (secretWord.match(guess)) {
		var success = true;
		return success;
        console.log("You guessed correctly")
    }
};



// ALTERNATE UI

// // var inquirer = require("inquirer");

// var prompt = require('prompt');

// // var Word = require("./Word");

// var turnsRemaining = 10;

// var yourGuess;

// prompt.start();

// prompt.get(['yourGuess'], function (err, result) {
//     console.log("Guess Received");
//     currentGuess = result.yourGuess;
//     console.log("Guess is: " + yourGuess);
// });