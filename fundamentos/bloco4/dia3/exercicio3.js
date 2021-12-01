let n = 20;
let simbolo = "*";
let linha = "";
let espaços = " ";
let limite = n

for (let x = 0; x < n; x += 1) {
    for (let y = 1; y <= n; y += 1) {
        if (limite > y) {
            linha += espaços
        }
        else {
            linha += simbolo
        }
    }
    console.log(linha);
    linha = "";
    limite -= 1;
}