// require Letter
var Letter = require("./Letter.js");

// start the app
console.log("**Word.js Start**");

// testing variables
// var secretWord = "giraffe";

var guessDisplay;

// Word.js: Contains a constructor, Word that depends on the Letter constructor. 
// This is used to create an object representing the current word the user is 
// attempting to guess. That means the constructor should define:

function Word(secretWord) {
    // An array of new Letter objects representing the letters of the underlying word
    this.secretLetters = [];
    console.log(this.secretLetters);

    // A function that returns a string representing the word. 
    // This should call the function on each letter object (the 
    // first function defined in Letter.js) that displays the 
    // character or an underscore and concatenate those together.
    this.buildSecretWordDisplay = function() {
        
    };

    this.guessFunction = function(promptedGuess) {
    // A function that takes a character as an argument and calls 
    // the guess function on each letter object (the second 
    // function defined in Letter.js)
        

    }
};

// lets me pass in a letter as an argument for testing
var newGuess = new Letter(process.argv[2]);

// console.log(process.argv[2]);
newGuess.checkGuess();

var currentWord = new Word(newGuess);
currentWord.buildWord(newGuess);

// lets me pass in a letter as an argument for testing
var currentGuess = new Letter(process.argv[2]);

// console output for testing
// console.log(currentGuess);
// currentGuess.checkGuess();
// currentGuess.displayGuess();
// console.log("Guessed Correctly: " + currentGuess.guessedCorrectly);

module.exports = Word;


// change "guessed" to "matched"