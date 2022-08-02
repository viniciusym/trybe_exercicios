class Tv {
  brand: string;
  size: number;
  resolution: number;
  connection: string[];
  connectedTo: string;

  constructor(
    brand: string, size: number, resolution: number, connection: string[]) {
      this.brand = brand;
      this.size = size;
      this.resolution = resolution;
      this.connection = connection;
  };

  turnOn() {
    console.log(`brand: ${this.brand}, size: ${this.size}, resolution: ${this.resolution}, connection: ${this.connection}`)
  }
}

export default Tv;