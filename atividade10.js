const readline = require('readline');

let vetor = [12, 25, 37, 49, 12, 58, 12, 79, 91, 12];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o número que você deseja verificar: ", (numeroProcurado) => {
  numeroProcurado = parseInt(numeroProcurado);

  let indices = [];

  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === numeroProcurado) {
      indices.push(i);
    }
  }

  if (indices.length > 0) {
    console.log(`O número ${numeroProcurado} foi encontrado nos índices: ${indices.join(", ")}`);
  } else {
    console.log(`O número ${numeroProcurado} não foi encontrado no vetor.`);
  }

  rl.close();
});
