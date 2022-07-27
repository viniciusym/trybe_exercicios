enum colors {
  black,
  white,
  red,
  silver,
}

interface Car {
  brand: string,
  color: colors,
  doors: number,
}

class Car {
  constructor(color: colors, brand: string, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors
  };
}