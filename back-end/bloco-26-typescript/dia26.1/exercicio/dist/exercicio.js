"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.areaRetangulo = exports.areaQuadrado = exports.areaTriangulo = exports.sumArray = exports.personAge = exports.greeter = void 0;
function greeter(name) {
    return `ola ${name}`;
}
exports.greeter = greeter;
function personAge(name, age) {
    return `${name} tem ${age} anos`;
}
exports.personAge = personAge;
function sumArray(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
exports.sumArray = sumArray;
function areaTriangulo(b, h) {
    return (b * h) / 2;
}
exports.areaTriangulo = areaTriangulo;
function areaQuadrado(l) {
    return l ** 2;
}
exports.areaQuadrado = areaQuadrado;
function areaRetangulo(b, h) {
    return b * h;
}
exports.areaRetangulo = areaRetangulo;
