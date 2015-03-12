var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var contact = {};

function getName () {
  rl.question('What is your name? ', function (name) {
	contact.name = name;
	getAge();
  });
}

function getAge () {
  rl.question('What is your age? ', function (age) {
	contact.age = age;
	getFavoriteColor();
  });
}

function getFavoriteColor () {
  rl.question('What is your favorite color? ', function (favoriteColor) {
	contact.favoriteColor = favoriteColor;
	farewell();
  });
}

function farewell () {
  console.log('Your name is', contact.name);
  console.log('Your age is', contact.age);
  console.log('Your favoriteColor is', contact.favoriteColor);
  console.log('Bye now');
  rl.close();
}
