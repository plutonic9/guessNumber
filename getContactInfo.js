var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var contact = {};
var contactName;
var contactAge;
var contactFavoriteColor;

function getName () {
  rl.question('What is your name? ', function (name) {
	contactName = name;
	getAge();
  });
}

function getAge () {
  rl.question('What is your age? ', function (age) {
	contactAge = age;
	getFavoriteColor();
  });
}

function getFavoriteColor () {
  rl.question('What is your favorite color? ', function (favoriteColor) {
	contactFavoriteColor = favoriteColor;
	farewell();
  });
}

function farewell () {
  console.log('Your name is', contactName);
  console.log('Your age is', contactAge);
  console.log('Your favoriteColor is', contactFavoriteColor);
  console.log('Bye now');
  rl.close();
}
