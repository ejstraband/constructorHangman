console.log("**Applicaton Start**");

var secretWord = "guess";
console.log("Secret Word: " + secretWord);

var inquirer = require('inquirer');
inquirer.prompt([/* Pass your questions in here */]).then(answers => {
    // Use user feedback for... whatever!!
});


// Letter.js: Contains a constructor, Letter. 

function Letter(letterGuess) {
// This constructor should be able to either 
// display an underlying character or a blank 
// placeholder (such as an underscore), depending 
// on whether or not the user has guessed the
// letter. That means the constructor should define:
// A string value to store the underlying character for the letter
    this.letterGuess = letterGuess;
// A boolean value that stores whether that letter has been guessed yet
    this.letterAlreadyGuessed = letterGuess;
};

// A function that returns the underlying character if the letter has 
// been guessed, or a placeholder (like an underscore) if the letter has not been guessed
function guessChecker() {

};

// A function that takes a character as an argument and checks it against 
// the underlying character, updating the stored boolean value to true if it was guessed correctly
function updateSecretWord() {

};

