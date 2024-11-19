const readline = require('readline-sync');

let listaCompras = [];

for (let i = 0; i < 3; i++) {
    let item = readline.question(`Digite o item ${i + 1} para a lista de compras: `);
    listaCompras.push(item);
}

if (listaCompras[listaCompras.length - 1].toLowerCase() !== "leite") {
    listaCompras.push("leite");
}

console.log("Sua lista de compras:");
listaCompras.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
});
