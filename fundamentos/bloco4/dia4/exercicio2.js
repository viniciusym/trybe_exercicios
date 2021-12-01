
function palindromeCheck (word) {
  let palindrome = false;
  let palavra = word;
  let palavraArray = [];
  let arrayReverse = [];
  let quantidade = 0;
  for (let i = 0; i < palavra.length; i += 1) {
    palavraArray.push(palavra.slice(i, i + 1));
  }
  for (let i1 = palavraArray.length - 1; i1 >= 0; i1 -= 1) {
    arrayReverse.push(palavraArray[i1]);
  }
  for (let i2 = 0; i2 < palavraArray.length; i2 += 1) {
    if (arrayReverse[i2] === palavraArray [i2])
    quantidade += 1;
  }
  if (quantidade == palavraArray.length) {
    palindrome = true;
  }
  return palindrome;
};

console.log(palindromeCheck("rotator"));