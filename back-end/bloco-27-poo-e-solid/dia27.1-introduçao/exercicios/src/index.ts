import Customer from './Customer';
import Item from './Item';
import Order from './Order';

const client1 = new Customer('maikom');

const chips = new Item('chips', 10);

const order1 = new Order(client1, [chips], 'cash');

console.log(order1);
