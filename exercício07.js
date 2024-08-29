const prompt = require("prompt-sync")()

//As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
//forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
//compradas, calcule e escreva o valor total da compra.

//Pegando pelo prompt a quantidade de maçãs
let qntMaçãs = Number(prompt("Nº de maçãs: "))

//Criando a váriavel do preço por maça e o valor total
let preçoPorMaçã
let Total

//Se as maçãs compradas forem menos que 12, o valor será de 0.3
if (qntMaçãs < 12){
    preçoPorMaçã = 0.3
} else{ //Se as maçãs compradas forem maior que 12, o valor será de 0.25
    preçoPorMaçã = 0.25
}

//Calculando o valor total das maçãs
Total = preçoPorMaçã * qntMaçãs

//Exibindo o resultado da compra
console.log(`O valor da sua compra é de ${Total}R$`)

