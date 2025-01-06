"use strict";
let numero = 20;
numero = 55;
const pi = 3.1415;
const numero2 = 55;
let nome = "Anderson";
let correto;
let resultado = numero * pi;
//let nomeDoUsuario = prompt("Qual o seu nome? :")
//document.querySelector("#bomDia")?.innerHTML = `bom dia: ${nomeDoUsuario}`;
const numeros = [1, 2, 3, 4, 5];
const misto = ["Anderson", 27, 1.77];
const idades = [];
idades.push(23);
idades.push(12);
idades.push(45);
idades.push(18);
idades.push(16);
idades.push(22);
idades.push(73);
const menorDeIdade = idades.filter((idade) => idade > 18);
console.log(menorDeIdade);
const pessoa = {
    nome: "anderson",
    idade: 25,
    profissao: "dev",
    altura: 1.75
};
const pessoas = {
    'Qualquer_Sring': {
        nome: 'Fulando',
        idade: 22,
        altura: 1.70,
        profissao: "oi"
    }
};
const outraPessoa = {};
console.log(pessoa);
function escolherNumero(numero1, numero2, criterio) {
    switch (criterio) {
        case "maiorNumero":
            return numero1 > numero2 ? numero1 : numero2;
        case "menorNumero":
            return numero1 < numero2 ? numero1 : numero2;
        default:
            const numeroAleatorio = Math.random();
            if (numeroAleatorio >= 0.5)
                return numero1;
            return numero2;
    }
}
console.log(escolherNumero(10, 30, "menorNumero"));
