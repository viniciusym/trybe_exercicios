const a = 90;
const b = 4;
const c = -90;

if (a > b && a > c) {
    console.log(a);
}
else if (b > a && b > c) {
    console.log(b);
}
else if (c > a && c > b) {
    console.log(c);
}
else {
    console.log("eles são iguais")
}