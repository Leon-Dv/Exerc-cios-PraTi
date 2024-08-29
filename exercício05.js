const prompt = require("prompt-sync")()

//Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
//determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
//utilizando if-else.

//Obtendo a peso
let peso = Number(prompt('Digite o seu peso. (Ex: 70kg) - '))
//Obtendo a altura
let altura  = Number(prompt('Digite a sua altura. (Ex: 1.80) - '))

//Calculando o IMC
let imc = peso / (altura * altura)

console.log(imc)

//Se o resultado do IMC for menor que 18.5 classificando como baixo peso
if (imc <= 18.5){
    console.log('Baixo peso')
}   else if (imc >= 18.5 && imc <= 24.9){ //Se o resultado estiver entre 18.5 e 24.9 classificar como peso normal
    console.log('Peso normal')
}   else if (imc >= 25 && imc <= 29.9){ //Se o resultado estiver entre 25 e 29.9 classificar como sobrepeso
    console.log('Sobre Peso')
}   else { //E se não for nenhum das anteriores classificar como obesidade
    console.log('Obesidade Grau I')
}  