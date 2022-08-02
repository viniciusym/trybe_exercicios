import Customer from './Customer';
import Item from './Item';

export default class Order {
  private _client: Customer;
  private _items: Array<Item>;
  private _paymentMethod: string;
  private _discount?: number;

  constructor(client: Customer, items: Array<Item>, paymentMethod: string, discount?: number) {
    this._client = client;
    this._paymentMethod = paymentMethod;
    this._items = items;
    this._discount = discount;
  }

  total(): number {
    const total = this._items.reduce((a, b) => a + b.price, 0);
    return total;
  }

  totalWithDiscount(): number {
    const discount = this._discount === undefined ? 1 : this._discount;
    const total = this._items.reduce((a, b) => a + b.price, 0) * discount;

    return total;
  }
}