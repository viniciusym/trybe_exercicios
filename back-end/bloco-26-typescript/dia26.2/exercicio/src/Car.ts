enum colors {
  black = 'black',
  white = 'white',
  red = 'red',
  silver = 'silver',
}

enum doorsPosition {
  frontRight = 'porta da frente direita',
  frontLeft = 'porta da frente esquerda',
  backRight = 'porta de traz direita',
  backLeft = 'porta de traz esquerda',
}

type side = 'direita' | 'esquerda'

interface car {
  brand: string,
  color: string,
  doors: number,
  honk(): void,
  openTheDoor(d: doorsPosition): void,
  closeTheDoor(d: doorsPosition): void,
  turnOn(): void,
  turnOff(): void,
  speedUp(m: number): void,
  speedDown(): void,
  stop(): void,
  turn(s: side): void,
}

class Car implements car {
  brand: string;
  color: string;
  doors: number;

  constructor(color: string, brand: string, doors: number) {
    this.brand = brand;
    this.color = colors[color as keyof typeof colors];
    this.doors = doors
  }

  honk(): void {
    console.log('buzinou');
  }
  openTheDoor(door: string): void {
    console.log(`abriu a ${doorsPosition[door as keyof typeof doorsPosition]}`);
  }
  closeTheDoor(door: string): void {
    console.log(`fechou a ${doorsPosition[door as keyof typeof doorsPosition]}`);
  }
  turnOn(): void {
    console.log('ligar');
  }
  turnOff(): void {
    console.log('desligar');
  }
  speedUp(meters: number): void {
    console.log(`acelerar por ${meters} metros`);
  }
  speedDown(): void {
    console.log('frear');
  }
  stop(): void {
    console.log('parar');
  }
  turn(side: side): void {
    console.log(`virar para ${side}`);
  }
}

export default Car;