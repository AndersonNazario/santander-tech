const fs = require('fs')

// leitura de arquivos

// fs.readFile('./js/programacao_assicrona/assincronismo/arquivo.txt', (erro, conteudo) => {
//     if (erro) {
//         console.log("Erro ao tentar ler o arquivo: ", erro)
//     } else {
//         console.log(String(conteudo))
//     }
// })




//Executar algo após algum tempo
// console.log("Antes do setTimeout!")

// setTimeout(() => {
//     console.log("Isso sera executado após 2 segundos")
// }, 2 * 1000)


// 2. Promiss (Promessas)

// console.log("Antes da promese")

function lerArquivoPromise() {
    return promessa = new Promise((resolve, reject) => {
            fs.readFile('./js/programacao_assicrona/assincronismo/arquivo.txt', (erro, conteudo) => {
            if (erro) {
                 reject("Erro ao tentar ler o arquivo: ", erro);
            } else {
                 resolve(String(conteudo));
            }
        });
    }); // crinado uma promessa
}

// // foco - retorno da promessa
// promessa.then((retornoDaPromessa)=>{
//     console.log("Deu certo!\n",retornoDaPromessa)
// }).catch((erro)=>{
//     console.log("Deu ruim", erro)
// }).finally(()=>{
//     console.log("Sempre sera executado ao final da promessa")
// })


// 3. async/await

async function leituraDeDados() {


    try {
        console.log("Antes da promese ser resolvida");

        const retornoDaPromessa = await lerArquivoPromise(); // espera a promesa ser resolvida
    
        console.log(retornoDaPromessa);
    
        console.log("Depois da promese ser resolvida");
    } catch (error) {
        console.log(error)
        console.log("Isso aqui é executado depois da promessa com erro!!")
    }finally{
        console.log("Sempre sera executado ao final da promessa")
    }
}

leituraDeDados();
