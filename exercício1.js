const prompt =  require("prompt-sync")()
//Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
//utilizando uma estrutura de controle if.

// Pegando a entrada de dados do usuário
let number = Number(prompt('Digite um número: '))

//Calculando o resto da divisão por 2
let calc = number % 2

//Se o resultado for igual a 0 é par
if (calc === 0){
    console.log('Este número é par!')
} else if (calc !== 0){
    console.log('Este número é impar!') //Se for diferente de 0 é impar
}

