let filmesfavoritos = ["Senhor dos Anéis", "Clube da Luta", "Hobbit"];

filmesfavoritos.splice(0, 1, "Vingadores");

if (filmesfavoritos[filmesfavoritos.length - 1].toLowerCase() !== "Harry Potter") {
    filmesfavoritos.push("Harry Potter");
}

console.log("Filmes favoritos:", filmesfavoritos);