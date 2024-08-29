const prompt = require("prompt-sync")()

//Implemente um programa que recebe uma nota de 0 a 10 e classifica como
//"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

//Pegando a entrada de dados do usuário
let n1 = Number(prompt("Insira uma nota: "))

//Se a nota for maior do que 7 estará aprovado
if(n1 >= 7){
    console.log(`A sua nota é ${n1}. Meus parabéns, você foi aprovado!`)
} else if (n1 <= 6 && n1 >= 5){ //Se a nota estiver entre 6 e 5 estará em recuperação
    console.log(`A sua nota é ${n1}. Você precisa recuperar a nota perdida!`)
} else{ //Se não for nenhuma das anteriores estará reprovado.
    console.log(`A sua nota é ${n1}. Lamento, você foi reprovado.`)
}

