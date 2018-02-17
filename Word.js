// require Letter
var Letter = require("./Letter.js");

// start the app
console.log("**Word.js Start**");

// console.log(Letter);

// testing variables
secretWord = "giraffe";
var guessDisplay;

// Word.js: Contains a constructor, Word that depends on the Letter constructor. 
// This is used to create an object representing the current word the user is 
// attempting to guess. That means the constructor should define:

function Word(guess) {
    // An array of new Letter objects representing the letters of the underlying word
    this.correctGuesses = [];
    // A function that returns a string representing the word. 
    // This should call the function on each letter object (the 
    // first function defined in Letter.js) that displays the 
    // character or an underscore and concatenate those together.
    this.buildWord = function() {
        console.log("word builder");
        console.log("secret word is: " + secretWord);
        console.log("guessed letter: " + guess.guessed)
        if (guess.guessed == true) {
            this.correctGuesses.push(guess);
        }
        for (i=0; i<this.correctGuesses.length; i++) {
            console.log("letters matched: " + this.correctGuesses[i.guess]);
        }


    };
    this.guessFunction = function() {

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

// console.log(newGuess);
// newGuess.checkGuess();
// newGuess.displayGuess();
// console.log(".guessed: " + newGuess.guessed);

module.exports = Word;


// change "guessed" to "matched"