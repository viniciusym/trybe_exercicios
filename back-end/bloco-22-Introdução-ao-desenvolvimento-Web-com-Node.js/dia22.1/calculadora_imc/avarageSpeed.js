const readline = require('readline-sync');

const distance = readline.questionInt('Qual a distancia?');
const time = readline.questionInt('Qual o tempo?');

const getAvarageSpeed = (distance, time) => {
  const avarageSpeed = distance / time;
  return `A sua velocidade media é ${avarageSpeed}m/s`;
};

console.log(getAvarageSpeed(distance, time));