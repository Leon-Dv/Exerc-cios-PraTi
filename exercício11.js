const prompt = require("prompt-sync")()

//Escreva um programa que solicita ao usuário 5 números e calcula a soma total
//utilizando um loop for.

//Váriavel de soma
let soma = 0

for(let i = 1; i <= 5; i++){ //Criando um loop que repete de 1 até 5
    //Em cada loop, é pego um número do usuário
    let num = Number(prompt(`Digite o ${i}º do número: `))

    //O valor digitado é somado ao valor da variável soma.
    soma += num

}

//Após o loop, exibir a soma total dos números digitados.
console.log(`A soma dos números é ${soma}`)