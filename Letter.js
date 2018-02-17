// start the app
console.log("**Letter.js Start**");

// testing variables
    // var secretWord = "giraffe";
    // var guessDisplay;

function Letter(letter) {
    this.letter = letter;
    // guessed implies success. Specifying "Guessed Correctly"
    // default is no until check happens later
    this.guessedCorrectly = false;
    this.checkGuess = function() {
        console.log("check the guess");
        if ((secretWord.indexOf(letter)) == -1) {
            var successfulMatch = false;
        } else {
            var successfulMatch = true;
        }
        console.log("letter matched: " + successfulMatch);
    }
    this.displayGuess = function() {
        console.log("displays the letter or dash")
        if (this.guessedCorrectly === true) {
            guessDisplay = this.letter;
        } else {
            guessDisplay = " _ ";
        }
        console.log(guessDisplay);
        return guessDisplay;
    }
}

// lets me pass in a letter as an argument for testing
    // var currentGuess = new Letter(process.argv[2]);

// console output for testing
    // console.log(currentGuess);
    // currentGuess.checkGuess();
    // currentGuess.displayGuess();
    // console.log("Guessed Correctly: " + currentGuess.guessedCorrectly);


module.exports = Letter;