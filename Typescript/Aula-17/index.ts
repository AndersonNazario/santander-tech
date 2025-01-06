let numero = 20;

numero = 55;

const pi = 3.1415;

const numero2 = 55;

let nome: string = "Anderson"

let correto: boolean;

let resultado = numero * pi;


//let nomeDoUsuario = prompt("Qual o seu nome? :")

//document.querySelector("#bomDia")?.innerHTML = `bom dia: ${nomeDoUsuario}`;

const numeros: number[] = [1, 2, 3, 4, 5];

const misto: (number | string)[] = ["Anderson", 27, 1.77];

const idades: number[] = [];

idades.push(23)
idades.push(12)
idades.push(45)
idades.push(18)
idades.push(16)
idades.push(22)
idades.push(73)

const menorDeIdade = idades.filter((idade) => idade > 18);

console.log(menorDeIdade);

// interface Persona {
//     nome: string,
//     idade: number,
//     profissao: string,
//     salario?: number, // não é obrigatorio - opicional
//     altura: number,
// }

type Persona = {
    nome: string,
    idade: number,
    profissao: string,
    salario?: number, // não é obrigatorio - opicional
    altura: number,
}

const pessoa: Persona = {
    nome: "anderson",
    idade: 25,
    profissao: "dev",
    altura: 1.75
}

// Parcial - opcional
type PessoaParcial = Partial<Persona>;

// Required obrigatorio
type PessoaRequired = Required<Persona>;


// Pick seliciona item especifico de Persona
type PessoaPick = Pick<Persona, "nome" | "idade">;

// Omit Omite item especifico de Persona
type PessoaOmit = Omit<Persona, "nome" | "idade">;

// Exclude Exclui item especifico de Persona
type PessoaExclude = Exclude<Criterio, 'greater'>;


// Record junta itens de diferentes objetos
type PessoaRecord = Record<string, Persona>

const pessoas: PessoaRecord = {
    'Qualquer_Sring': {
        nome: 'Fulando',
        idade: 22,
        altura: 1.70,
        profissao: "oi"
    }
}


const outraPessoa: PessoaParcial = {
    
}

console.log(pessoa)

type Criterio =  "maiorNumero" | "menorNumero";

function escolherNumero(numero1: number, numero2: number, criterio?: Criterio) {
    switch(criterio){
        case "maiorNumero":
            return numero1 > numero2 ? numero1 : numero2;
        case "menorNumero":
            return numero1 < numero2 ? numero1 : numero2;
        default:
            const numeroAleatorio = Math.random()

            if(numeroAleatorio >= 0.5) return numero1
            return numero2
    }

}

console.log(escolherNumero(10, 30, "menorNumero"))