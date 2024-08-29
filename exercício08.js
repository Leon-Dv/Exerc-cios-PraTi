const prompt = require("prompt-sync")()

//Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
//e escreve-los em ordem crescente.

//Pegando o valor 1 e valor 2 do usuário
let n1 = Number(prompt("Insira o primeiro valor: "))
let n2 = Number(prompt("Insira o segundo valor: "))

//Se ambos valores forem iguais
if (n1 === n2){
    console.log(`Ambos valores são iguais, por favor tente novamente.`) //Tentar novamente
} else if (n1 < n2){ //Se o valor 1 for menor que o valor 2
    console.log(`Ordem crescente: ${n1}, ${n2}`) //O valor 1 é o primeiro
} else { //Se o valor 2 for menor que o valor 1
    console.log(`Ordem crescente: ${n2}, ${n1}`) //Valor 2 é o primeiro
}

