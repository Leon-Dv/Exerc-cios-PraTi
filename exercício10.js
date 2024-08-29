const prompt = require("prompt-sync")()

//Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

// Pegando a entrada de dados do usuário
let num = Number(prompt("Digite um número: "))

for(let i = 1; i <= 10; i++){ //Repetindo o loop 10x
    console.log(num)  //Imprimindo o valor
}