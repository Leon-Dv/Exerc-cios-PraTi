//15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
//Fibonacci utilizando um loop for.

//Inicializando a variável n1 e n2 com os primeiros números da sequência de Fibonacci
let n1 = 0
let n2 = 1


console.log(n1) //Imprime o primeiro número da sequência (0)
console.log(n2) //Imprime o segundo número da sequência (1)

//Inicia um loop que executa 8 vezes 
for(let i = 0; i <= 7; i++){ 
       let soma = n1 + n2  //Calcula o próximo número da sequência somando n1 e n2
    n1 = n2 //Atualiza n1 para o valor de n2 
    n2 = soma //Atualiza n2 para o valor da soma 
    console.log(soma) //Imprime o próximo número da sequência

}
