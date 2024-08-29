const prompt = require("prompt-sync")()

//Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
//a média aritmética desses números.

//Inicializando a variavel contador, soma e num
let contador = 0 
let soma = 0
let num


do{
    // Pegando a entrada de dados do usuário
    num = Number(prompt("Digite um número: "))
    if (num !== 0){ //Verifica se o número digitado é diferente de 0
        soma += num //Se não for 0, adiciona o número à variável soma
        contador++ //Incrementando o contador em 1 para rastrear quantos números foram digitados
    }

} while (num !== 0){ //O loop continua enquanto o usuário não digitar 0
    if(contador > 0){ //Verifica se algum número diferente de 0 foi digitado.
        let media = soma / contador //Calculando a média dos números digitados dividindo a "soma" pelo "contador"
        console.log(`A média dos números é: ${media}`) //Exibindo a média calculada
    }
    else {
        console.log(`Nenhum número válido foi digitado, por favor tente novamente.`) //Exibindo uma mensagem caso nenhum número válido tenha sido digitado.
    }
}