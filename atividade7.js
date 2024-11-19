let exerciciosSemana = ["corrida", "flexões", "abdominais"];

if (exerciciosSemana[exerciciosSemana.length - 1].toLowerCase() !== "alongamento") {
    exerciciosSemana.push("alongamento");
}

console.log(exerciciosSemana)