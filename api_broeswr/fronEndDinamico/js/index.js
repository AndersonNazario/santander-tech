console.log("Bom dia")


// obtem os elementos da tag H1
const todoH1 = document.getElementsByTagName('h1')
console.log(todoH1[0])

// obtem os elementos pelo nome da classe
const todosParagrafos = document.getElementsByClassName("todosParagrafos");
console.log(todosParagrafos[0])

console.clear();

// obtem os elementos pelo seletor
const primeiroParagrafo = document.querySelector("p.todosParagrafos")
console.log(primeiroParagrafo)
console.log("texteContent - Conteudo do paragrafo: ", primeiroParagrafo.textContent)
console.log("innerHTML - Conteudo d paragrafo: ", primeiroParagrafo.innerHTML)

primeiroParagrafo.innerHTML = "<strong>Testo em negrito<strong> Outra coisa";

console.clear();

// Obter conteudo do imput
const emailInput = document.getElementsByName("email-input")
console.log(emailInput)
//!emailInput.value = "anderso@gmail.com";


//Criar item/elemento de forma dinamica
const listaUl = document.querySelector(".lista"); // Selecione corretamente o elemento ul
console.log(listaUl);

let novaTagLi = document.createElement("li"); // Crie corretamente a tag li
console.log(novaTagLi);

novaTagLi.textContent = "Segundo item"; // Adicione o texto à tag li
console.log(novaTagLi);

// listaUl.appendChild(novaTagLi); // Adicione a li à ul
// console.log(listaUl);

//Outra forma - Criar item/elemento de forma dinamica
const listaLis = document.querySelectorAll("ul > li") // criando uma tag li vazia
listaUl.insertBefore(novaTagLi, listaLis[1])

//remover elemento

listaUl.removeChild(listaLis[0])