console.log("Bom dia!!")

//interface
interface IPessoa {
    nome: string;
    idade: number;
    altura: number;

    dormir: () => void;
}


// classe: Abstração de uma pessoa
class Pessoa implements IPessoa{
    // atributos são as caracteristicas
    nome: string;
    idade: number;
    altura: number;
    private _cpf: string;
    //readonly _cpf: string;

    //metodos (fuçoes) é uma ação que a classe pessoa realisa
    
    // metodo construtor

    constructor(nome: string, idade: number, altura: number, cpf: string) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this._cpf = cpf;
    }

    dormir() {
        console.log("Dormndo ... ");
    }

    // acesssor: getter
    get cpf(): string{
        return this._cpf;
    }

    //
    set cpf(newCpf: string) {
        if (newCpf.length !== 14) {
            throw new Error(`CPF:${newCpf} - Invaliido`)
        }
        this._cpf = newCpf
    }
}


// criando uma pessoa (individual/objjeto) a apartir da definição da classe Pessoa

const pessoa1 = new Pessoa("Anderson", 22, 1.72, "00000000000");

console.log(pessoa1.cpf);
pessoa1.cpf ="101.129.609.65"
console.log(pessoa1.cpf);
  
pessoa1.dormir()

console.log("****************************************\n")

//erança
class Professor extends Pessoa {
    codigo: string;

    constructor(nome: string, idade: number, altura: number, cpf: string, codigo: string){
        super(nome, idade, altura, cpf)
        this.codigo = codigo;
    }

    ensinar() {
        console.log("Ensinando ......")
    }
}

// objeto da classe professor
const professor = new Professor("Professor", 44, 1.78, "012.012.012.32", "000001")

console.log(professor)