let peça = "rei"; 
let chess = peça.toLowerCase();

if (chess === "peão") {
    console.log("anda para frente 2 casas no primeiro movimento e os demais movimentos 1 casa");
}
else if (chess === "torre") {
    console.log("anda para na vertical ou horizontal quantas casas quiser");
}
else if(chess === "cavalo =") {
    console.log("anda em L tanto na horizontal quanto na vertical");
}
else if (chess === "bispo") {
    console.log("anda na diagonal quantas casas quiser, tanto para frente quanto para traz");
}
else if (chess === "dama") {
    console.log("anda em todos os sentidos e direções quantas casas quiser");
}
else if (chess === "rei") {
    console.log("anda para todas as direções e sentidos porém só uma casa");
}
else {
    console.log("peça invalida");
}