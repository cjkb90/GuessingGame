/* **** Global Variables **** */
$(document).ready(function(){

var playersGuess;


// Generate winning number
var generateWinningNumber = function(){
	return (Math.floor(Math.random() * (100 - 1 + 1) + 1));
};
var winningNumber = generateWinningNumber();
  
// Fetch the Players Guess

function playersGuessSubmission(){
	// add code here
}

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
	// add code here
}

// Check if the Player's Guess is the winning number 

function checkGuess(){
	// add code here
}

// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
	// add code here
}

// Allow the "Player" to Play Again

function playAgain(){
	// add code here
}
});

/* **** Event Listeners/Handlers ****  */