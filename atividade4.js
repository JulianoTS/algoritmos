const readlineSync = require('readline-sync');

let tarefas = [];

for (let i = 0; i < 3; i++) {
    let item = readlineSync.question(`Digite a tarefa ${i + 1}: `);
    tarefas.push(item);
}

console.log("Tarefas antes da modificação:", tarefas);


tarefas.splice(1, 1, "ligar para o médico");

console.log("Tarefas após a modificação:", tarefas);

