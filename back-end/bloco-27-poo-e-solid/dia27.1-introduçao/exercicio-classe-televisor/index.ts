import Tv from './Tv';

const tv1 = new Tv('sony', 27, 1080, ['hdmi', 'vga', 'rca']);
tv1.turnOn();
console.log(tv1);
tv1.connectedTo = 'vga';
console.log(tv1.connectedTo);