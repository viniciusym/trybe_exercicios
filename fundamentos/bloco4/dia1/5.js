const a = 21;
const b = 20;
const c = 140;

if (a + b + c === 180) {
    console.log(true);
}
else if(a < 0 || b < 0 || c < 0) {
    console.log("ângulo invalido");
}
else {
    console.log(false);
}