var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What number do you guess?\n', function (answer) {
  console.log('In the callback to rl.question');
  if (answer === '42') {
	console.log('That\'s the number!');
  } else {
	console.log('That\'s not the number.');
  }

  rl.close();
});

console.log();
console.log('(This code is executed after rl.question was called but before the callback was triggered.)');
console.log();
