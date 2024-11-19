const readlineSync = require('readline-sync');

let metasSemana = [];

for (let i = 0; i < 3; i++) {
    let item = readlineSync.question(`Digite a tarefa ${i + 1}: `);
    metasSemana.push(item);
}

if (metasSemana[1] !== "exercício físico") {
    metasSemana[1] = "praticar esportes";
}

console.log(metasSemana);


