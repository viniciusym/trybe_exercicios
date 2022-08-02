import Customer from './Customer';
import Item from './Item';
import Order from './Order';

const client1 = new Customer('maikom');

const chips = new Item('chips', 10);

const burger = new Item('buger', 100);

const order1 = new Order(client1, [chips, burger], 'cash', 0.5);

console.log(order1.totalWithDiscount());
