var rl = require('readline-sync');

var contactName = rl.question('What is your name? ');
var contactAge = rl.question('What is your age? ');
var contactFavoriteColor = rl.question('What is your favorite color? ');

console.log('Your name is', contactName);
console.log('Your age is', contactAge);
console.log('Your favoriteColor is', contactFavoriteColor);
console.log('Bye now');
