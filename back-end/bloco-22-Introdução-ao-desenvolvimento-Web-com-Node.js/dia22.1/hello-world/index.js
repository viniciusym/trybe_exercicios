const readline = require('readline-sync');

console.log('11');
const name = readline.question('Qual o seu nome?');
const age = readline.questionInt('Qaul a sua idade?');
console.log(`Hello, ${name}! You are ${age} years old`);