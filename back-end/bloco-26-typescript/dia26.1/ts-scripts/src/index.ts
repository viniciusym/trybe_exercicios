import readlineSync from 'readline-sync';

type Character = {
  nickname: string,
  class: string,
  stats: { agi: number, str: number, int: number, hp: number, mp: number },
  createdAt: Date 
}

const characters: Character[] = [
  {
    nickname: 'xKillerx',
    class: 'warrior',
    stats: { agi: 50, str: 100, int: 25, hp: 1000, mp: 300 },
    createdAt: new Date('2003-10-1')
  },
  {
    nickname: 'jainaProud',
    class: 'mage',
    stats: { agi: 80, str: 40, int: 150, hp: 630, mp: 1100 },
    createdAt: new Date('2003-10-2')
  },
  {
    nickname: 'catIn',
    class: 'hunter',
    stats: { agi: 150, str: 90, int: 80, hp: 800, mp: 600 },
    createdAt: new Date('2003-10-15')
  },
]

function printCharacter(character: Character, index: number) {
  const { nickname, class: cls, createdAt } = character;

  console.log(`\n\n===== Character: ${index + 1} ========`);
  console.log(`nickname: ${nickname}
class: ${cls}
createdAt: ${createdAt}`);
};

// characters.forEach(printCharacter);

// exercicio 2, 3 e 4//

enum mesesDoAno {
  janeiro = 1,
  fevereiro,
  março,
  abril,
  maio,
  junho,
  julho,
  agosto,
  setembro,
  outubro,
  novembro,
  dezembro,
}

enum estacoesClimaticas {
  inverno = 1,
  outono,
  primavera,
  verao,
}

const estacoesNorte: { [key: number]: number[] } = {
  1: [1],
  2: [1],
  3: [1, 3],
  4: [3],
  5: [3],
  6: [3, 4],
  7: [4],
  8: [4],
  9: [4, 2],
  10: [2],
  11: [2],
  12: [2, 1],
}

const estacoesSul: { [key: number]: number[] } = {
  1: [4],
  2: [4],
  3: [4, 2],
  4: [2],
  5: [2],
  6: [2, 1],
  7: [1],
  8: [1],
  9: [1, 3],
  10: [3],
  11: [3],
  12: [3, 4,]
}

const getEstacaoAtual = (mesAtual: string, hemisferioAtual: string): void => {
  const mes = mesesDoAno[mesAtual.toLowerCase() as keyof typeof mesesDoAno]
  const estacaoAtual: number[] = hemisferioAtual.toLowerCase() === 'sul' 
    ? estacoesSul[mes] : estacoesNorte[mes];
  estacaoAtual.forEach((estacao: number) => {
    console.log(estacoesClimaticas[estacao]);
  })
}

// const hemisferioEscolhido: string = readlineSync.question('que hemisferio esta');
// const mesEscolhido: string = readlineSync.question('que mes esta');

// getEstacaoAtual(mesEscolhido, hemisferioEscolhido);

//exercicio 5//

enum tabelaCoversão {
  quilometro = 1000,
  hectometro = 100,
  decametro = 10,
  metro = 1,
  decimetro = 0.1,
  centimetro = 0.01,
  milimetro = 0.001,
}

const coverterUnidadesDeMedida = (valor: number, unidadeBase: string, unidadeConverter: string): void => {
  const conversãoInicialMetro = tabelaCoversão[unidadeBase as keyof typeof tabelaCoversão];
  const conversão = tabelaCoversão[unidadeConverter as keyof typeof tabelaCoversão];
  const valorEmMetros: number = valor * conversãoInicialMetro;
  const valorConvertido: number = valorEmMetros / conversão;
  console.log(valorConvertido);
}

// const valorEscolhido: number = readlineSync.questionInt(' valor?');
// const unidadeBaseEscolhida: string = readlineSync.question(' unidade base?');
// const unidadeConverterEscolhida: string = readlineSync.question(' unidade para converter?');

// coverterUnidadesDeMedida(valorEscolhido, unidadeBaseEscolhida, unidadeConverterEscolhida);

enum tabelaCoversãoMassa {
  miligrama = 1,
  centrigrama,
  decigrama,
  grama,
  decagrama,
  hectograma,
  quilograma, 
}

const converterMassa = (valor: number, unidadeBase: string, unidadeConverter: string): void => {
  const base = tabelaCoversãoMassa[unidadeBase as keyof typeof tabelaCoversãoMassa];
  const conversão = tabelaCoversãoMassa[unidadeConverter as keyof typeof tabelaCoversãoMassa];
  const expoenteParaConversão = (base - conversão);
  const massaConvertida = valor * (10**expoenteParaConversão);
  console.log(massaConvertida);
}

converterMassa(1000, 'grama', 'quilograma');