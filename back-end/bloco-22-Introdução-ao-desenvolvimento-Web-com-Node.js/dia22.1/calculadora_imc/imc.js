const readline = require('readline-sync');

const height = readline.question('Qual a sua altura?');
const weight = readline.questionFloat('Qual o seu peso?');

const getImc = (height, weight) => {
  const imc = weight / (height ** 2);
  switch (true) {
    case imc < 18.5:
      return `Seu imc é ${imc} e voce esta abaixo do peso`;
    case imc >= 18.5 && imc <= 24.9:
      return `Seu imc é ${imc} e voce estacom peso normal`;
    case imc >= 25 && imc <= 29.9:
      return `Seu imc é ${imc} e voce esta acima do peso`;
    case imc >= 30 && imc <= 34.9:
      return `Seu imc é ${imc} e voce esta com obesidade grau I`;
    case imc >= 35 && imc <= 39.9:
      return `Seu imc é ${imc} e voce esta com obesidade grau II`;
    case imc > 40:
      return `Seu imc é ${imc} e voce esta com obesidade grau III`;
  };
};

console.log(getImc(height, weight));