import * as Exercise from './exercicio';

console.log(Exercise.greeter('Maria'));
console.log(Exercise.personAge('Maria', 40));
console.log(`A soma do array é igual a ${Exercise.sumArray([3, 6, 9])}`);

console.log(`Triângulo de base 10cm e altura 25cm: ${Exercise.areaTriangulo(10, 25)}cm²`);
console.log(`Triângulo de base 5cm e altura 30cm: ${Exercise.areaTriangulo(5, 30)}cm²`);
console.log(`Triângulo de base 100cm e altura 200cm: ${Exercise.areaTriangulo(100, 200)}cm²`);

console.log(`Quadrado de lado 10cm: ${Exercise.areaQuadrado(10)}cm²`);
console.log(`Quadrado de lado 5cm: ${Exercise.areaQuadrado(5)}cm²`);
console.log(`Quadrado de lado 100cm: ${Exercise.areaQuadrado(100)}cm²`);

console.log(`Retângulo de base 10cm e altura 25cm: ${Exercise.areaRetangulo(10, 25)}cm²`);
console.log(`Retângulo de base 5cm e altura 30cm: ${Exercise.areaRetangulo(5, 30)}cm²`);
console.log(`Retângulo de base 100cm e altura 200cm: ${Exercise.areaRetangulo(100, 200)}cm²`);