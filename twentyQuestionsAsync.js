var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

playRound(42, 20);

function playRound (correctAnswer, guessesRemaining) {
  if (guessesRemaining > 0) {
	rl.question('Guess a number (' + guessesRemaining + ' guesses remaining): ', function (guess) {
	  guess = parseInt(guess);
	  if (isNaN(guess)) {
		console.log('I didn\'t recognize that as a number');
		playRound(correctAnswer, guessesRemaining);
	  } else if (guess === correctAnswer) {
		console.log(guess + ' is exactly correct!');
		rl.close();
	  } else if (guess < correctAnswer) {
		console.log('Too low');
		playRound(correctAnswer, guessesRemaining - 1);
	  } else {
		console.log('Too high');
		playRound(correctAnswer, guessesRemaining - 1);
	  }
	});
  } else {
	console.log('You lose');
	rl.close();
  }
}
