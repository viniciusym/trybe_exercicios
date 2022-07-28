import Car from './Car';
import myFilter from './MyFilter';

// const gol = new Car('silver', 'volkswagem', 4);
// gol.openTheDoor('frontLeft');
// gol.turnOn();
// gol.speedUp(400);
// gol.turn('esquerda');
// gol.speedUp(200);
// gol.turn('direita');
// gol.speedUp(400);
// gol.speedDown();
// gol.stop();
// gol.openTheDoor('backRight');

console.log(myFilter<Number>([1, 1, 2, 2, 6, 1], (n) => {
  const isOne: boolean = n === 1;
  return isOne;
}));
