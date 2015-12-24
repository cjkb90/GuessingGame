$(document).ready(function(){
/* **** Global Variables **** */
var printMe = "string";
  
var playersGuess;
var $guesses = [];
  
  
// Generate winning number
var $generateWinningNumber = function(){
	return (Math.floor(Math.random() * (100 - 1 + 1) + 1));
};
var $winningNumber = $generateWinningNumber();
  
// Fetch the Players Guess
  $('.roll').click(function playersGuessSubmission(){
		playersGuess = + $("input[name='guess']").val();
		//Print winning number (TEST)
		console.log($winningNumber);
		//Check if guess is correct
		checkGuess();
		//Erase the player's previous guess
		$("input[name='guess']").val("");
});

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
	// add code here
}

// Check if the Player's Guess is the winning number 

var checkGuess = function(){
		//Check if guess is correct
	if (playersGuess === $winningNumber){
		//PROMPT the player that they won
      $('body').append("<p class=prompt>You did it!</p>").css("background-color", "pink").css("right","50px");
		$('.prompt').fadeOut(3000);
		console.log("You win!");
	}	else {
			//Check if guess was already guessed
			if (($.inArray(playersGuess, $guesses))>-1){
			//If it was, then PROMPTS a message
				console.log("Already guessed!");
			}else{
			//Otherwise adds the guess to the array
				$guesses.push(playersGuess);
			//Checks if there have been 5 guesses
				if($guesses.length<5){
					//If there haven't, PROMPT player to guess again
					console.log("Guess again!");
                }else{
					//If there have, PROMPT that game is over
					console.log("Game over");
                }
			}
		}
  
};

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