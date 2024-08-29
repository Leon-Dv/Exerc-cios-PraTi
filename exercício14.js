const prompt = require("prompt-sync")()

//Crie um programa que calcula o fatorial de um número fornecido pelo usuário
//utilizando um loop for ou while.

//Pegando a entrada de dados do usuário
let num = Number(prompt("Digite um número: "))
//Inicializando a variável com 1
let fatorial = 1 

//Iniciando o loop que começa em 1 e vai até o valor de "num"
for(let i = 1; i <= num; i++){
    fatorial *= i //Em cada loop, a variável "fatorial" é multiplicada pelo valor de "i"
}

console.log(`O fatorial de ${num} é: ${fatorial} `) //Exibindo o resultado calculado no console