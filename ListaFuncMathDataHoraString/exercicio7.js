// Manipulação de Datas e Horas ARRUMAR

let data = new Date("2025-2-14");

function diaSemana(data) {
    return data.getDay();
}

console.log("O Dia da Semana é: ", diaSemana(data));