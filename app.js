/* **** Global Variables **** */
var playersGuess;
var $guesses = [];

$(document).ready(function(){  

  
  
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


// Check if the Player's Guess is the winning number 
var checkGuess = function(){
		//Check if guess is correct
	if (playersGuess === $winningNumber){
		//PROMPT the player that they won
		$('body').append("<p class=popup>Yes! You win!</p>");
		$('.popup').fadeOut(5000);
		console.log("You win!");
	}	else {
			//Check if guess was already guessed
			if (($.inArray(playersGuess, $guesses))>-1){
			//If it was, then PROMPTS a message
			$('body').append("<p class=popup>Number already guessed!</p>");
			$('.popup').fadeOut(5000);
              console.log("Already guessed!");
			}else{
			//Otherwise adds the guess to the array
				$guesses.push(playersGuess);
			//Checks if there have been 5 guesses
				if($guesses.length<5){
					//If there haven't, PROMPT player to guess again
					$('body').append("<p class=popup>Wrong! Guess again.</p>");
					//And tell them how far they are from the answer
					$('body').append("<p class=popup>"+guessMessage()+"</p>");
					$('.popup').css("color","red").fadeOut(5000);
					console.log("Guess again!");
                }else{
					//If there have, PROMPT that game is over
					$('body').append("<p class=popup>Sorry. Game Over.</p>");
					$('.popup').fadeOut(5000);
                  console.log("Game over");
                }
			}
		}
  
};

// Determine if the next guess should be a lower or higher number
var lowerOrHigher = function(){
	if (playersGuess>$winningNumber){
		return "Your guess is higher than";
    }
	else if (playersGuess<$winningNumber){
		return "Your guess is lower than";
      }
};
var guessMessage = function(){
    //Distance is rounded up to the nearest ten
	distance =  Math.ceil(Math.abs(playersGuess-$winningNumber)/10)*10;
    return (lowerOrHigher()+" and within "+distance+" of the winning number.");	
};

// Create a provide hint button that provides additional clues to the "Player"
provideHint = function(){
	$('.hint').click(function(){
		parity = function(){
			if ($winningNumber%2===0){
				return "even";
            }else{
				return "odd";
            }
        };
		$('body').append("<p class=popup>The answer is an "+parity()+" number</p>");
		$('.popup').fadeOut(5000);
	});
};
provideHint();
  
// Allow the "Player" to Play Again
var playAgain = function(){
	$(".startover").click(function(){
		location.reload();
	});
};
playAgain();

});  /* **** Event Listeners/Handlers ****  */