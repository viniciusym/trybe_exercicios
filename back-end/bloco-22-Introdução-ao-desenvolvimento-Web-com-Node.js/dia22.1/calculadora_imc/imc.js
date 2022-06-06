const readline = require('readline-sync');

const height = readline.question('Qual a sua altura?')
const weight = readline.question('Qual o seu peso?')

const getImc = (height, weight) => {
  const imc = weight / (height ** 2);
  return imc;
}

console.log(getImc(height, weight));