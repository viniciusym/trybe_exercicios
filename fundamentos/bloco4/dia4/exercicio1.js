let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};
let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};
console.log('Bem Vinda, ' + info.personagem);

for (key in info) {
  console.log(key);
};

for (key in info, info2) {
  if(info[key] !== info2[key]){
    console.log(info[key] + ' e ' + info2[key]);
  }
  else {
    console.log("ambos recorrentes");
  }
}
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
     editora: 'Tordesilhas',
    },
  ],
};

console.log('O livro favorito de ' + leitor.nome + leitor.sobrenome + ' se chama ' + '"' + leitor.livrosFavoritos[0]['titulo'] + '".')