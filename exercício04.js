const prompt = require("prompt-sync")()

//Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
//Utilize switch-case para implementar a lógica de cada opção selecionada.

//Exibindo a pergunta e as 3 opções para o usuário escolher
console.log('Qual é o resultado da seguinte equação: 5+5*5+5')
console.log('Opção 1: 30')
console.log('Opção 2: 35')
console.log('Opção 3: 25')

//Pegando a entrada de dados do usuário
let escolha = Number(prompt("Digite um número: "))

switch(escolha){
    case 1:
        console.log("Resposta errada, tente novamente.") //Se o usuário escolheu a opção 1, informar que a resposta está errada.
        break
    case 2:
        console.log("Parabéns, você acertou!") //Se o usuário escolheu a opção 2, informar que a resposta está correta.
        break
    case 3:
        console.log("Resposta errada, tente novamente.") //Se o usuário escolheu a opção 3, informar que a resposta está errada.
        break
    default:
        console.log("Esta escolha é invalida, por favor tente novamente!") //Se o usuário digitou algo diferente de 1, 2 ou 3, informa que a escolha é invalida
        
}

