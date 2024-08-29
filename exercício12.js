const prompt = require("prompt-sync")()

//Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
//10) utilizando um loop for.

// Pegando a entrada de dados do usuário
let num = Number(prompt("Digite um número: "))

//Criando um loop para calcular a tabuada do número fornecido
for(let i = 0; i <= 10; i++){
    //Multiplica o número fornecido pelo valor atual de i e armazena em "resultado"
    let resultado = num * i 
    //Exibe o resultado da  multiplicação
    console.log(`${num} x ${i} é igual a ${resultado}`)
}

