interface Pizza {
  flavor: string,
  slices: 4 | 6 | 8,
};

interface PizzaComun extends Pizza {
  flavor: 'queijo' | 'pepperoni',
};

interface PizzaVegetariana extends Pizza {
  flavor: 'palmito' | 'cogumelo',
};

interface PizzaDoce extends Pizza {
  flavor: 'choco' | 'menta',
};