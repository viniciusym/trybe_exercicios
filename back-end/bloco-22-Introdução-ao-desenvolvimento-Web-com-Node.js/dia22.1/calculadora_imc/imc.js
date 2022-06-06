const getImc = (height, weight) => {
  const imc = weight / (height ** 2);
  return imc;
}

console.log(getImc(1.75, 95));