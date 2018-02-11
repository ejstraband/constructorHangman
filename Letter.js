// testing variables
var secretWord = "giraffe";
var guessDisplay;

function Letter(guess) {
    this.guess = guess;
    // guessed implies success
    this.guessed = false;
    this.checkGuess = function() {
        console.log("check the guess");
        if ((secretWord.indexOf(guess)) == -1) {
            var successfulMatch = false;
        } else {
            var successfulMatch = true;
            this.guessed = true;
        }
        console.log("letter matched: " + successfulMatch);
    }
    this.displayGuess = function() {
        console.log("displays the letter or dash")
        if (this.guessed === true) {
            guessDisplay = this.guess;
        } else {
            guessDisplay = " _ ";
        }
        console.log(guessDisplay);
    }
}

// lets me pass in a letter as an argument
var newGuess = new Letter(process.argv[2]);

console.log(newGuess);
newGuess.checkGuess();
newGuess.displayGuess();
console.log(newGuess.guessed);