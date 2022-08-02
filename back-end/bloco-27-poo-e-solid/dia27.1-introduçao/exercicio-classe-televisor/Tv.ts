class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: number;
  private _connection: string[];
  private _connectedTo: string;

  constructor(
    brand: string, size: number, resolution: number, connection: string[]) {
      this._brand = brand;
      this._size = size;
      this._resolution = resolution;
      this._connection = connection;
  };

  turnOn() {
    console.log(`brand: ${this._brand}, size: ${this._size}, resolution: ${this._resolution}, connection: ${this._connection}`)
  }

  public set connectedTo(connectedTo: string) {
    if(!this._connection.includes(connectedTo)) {
      console.log('Sorry, connection unavailable!');
      return;
    }
    this._connectedTo = connectedTo;
  }

  public get connectedTo(): string {
    return this._connectedTo;
  }
  
}

export default Tv;