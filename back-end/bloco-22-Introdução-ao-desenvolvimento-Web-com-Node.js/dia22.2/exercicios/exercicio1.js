const multiply = (num1, num2, num3) => {
  const promise = new Promise((resolve, reject) => {
    if(typeof (num1, num2, num3) !== 'number' ) reject(new Error('Informe apenas números'));
    const result = (num1 + num2) * num3;
    if(result < 50) reject(new Error('Valor muito baixo'));
    resolve(result);
  });
  return promise;
}

multiply(20, 10, 12)
  .then(result => console.log(result))
  .catch(err => console.log(err));

// exercicio 2//

const randomNumber = Math.floor(Math.random() * 100 + 1);

const getRandomMultiply = async () => {
  try {
    const result = await multiply(randomNumber, randomNumber, randomNumber);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

getRandomMultiply();