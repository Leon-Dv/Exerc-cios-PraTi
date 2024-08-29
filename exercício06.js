//Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
//formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
//Isósceles, escaleno ou eqüilátero.
//Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
//Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
//Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
//Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

let A, B, C // Declarando três variáveis para armazenar os lados do triângulo

//Atribuindo valor em A, B e C
A = 1
B = 0
C = 2

//Verificando se todos os três lados são iguais
if(A == B && B == C){ 
    console.log("Este triângulo é equilatero") 
} else if(A != B && B != C){ //// Verifica se todos os três lados são diferentes
    console.log("Este triângulo é escaleno")
} else { //// Se nenhuma das condições anteriores for verdadeira, o triângulo é isósceles
    console.log("Este triângulo é isóceles")
}