const readlineSync = require('readline-sync');

let tarefasLimpeza = [];

for (let i = 0; i < 3; i++) {
    let item = readlineSync.question(`Digite a tarefa ${i + 1}: `);
    tarefasLimpeza.push(item);
}

tarefasLimpeza.length = tarefasLimpeza.length - 1;

if (tarefasLimpeza[tarefasLimpeza.length - 1].toLowerCase() !== "limpar o banheiro") {
    tarefasLimpeza.splice(1, 0, "limpar o banheiro");
}

console.log("Tarefas de limpeza:", tarefasLimpeza);

