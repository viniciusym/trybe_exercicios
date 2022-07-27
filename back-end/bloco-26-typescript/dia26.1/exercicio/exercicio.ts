export function greeter(name: string) {
  return `ola ${name}`;
}

export function personAge(name: string, age: number) {
  return `${name} tem ${age} anos`;
}

export function sumArray(numbers: number[]) {
  return numbers.reduce((a: number, b: number) => a + b, 0);
}

export function areaTriangulo(b: number, h: number): number {
  return (b * h) / 2;
}

export function areaQuadrado(l: number): number {
  return l ** 2;
}

export function areaRetangulo(b: number, h: number): number {
  return b * h;
}

export function areaLosango(d: number, D: number): number {
  return (d * D) / 2;
}