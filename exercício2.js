const prompt = require("prompt-sync")()

//Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//controle if-else.

// Pegando a entrada de dados do usuário
let idade = Number(prompt("Informe a sua idade: "));

//Se a idade for menor ou IGUAL a 12 classificar a pessoa como uma criança.
if(idade <= 12){
    console.log(`Você é uma criança e possui ${idade} anos`)
} else if (idade >= 13 && idade <= 17){ //Se a idade estiver entre 13 e 17 anos classificar a pessoa como um adolescente.
    console.log(`Você é um adolescente e possui ${idade} anos`)
} else if (idade >= 18 && idade <= 64){ //Se a idade estiver entre 18 e 64 anos classificar a pessoa como um adulto.
    console.log(`Você é um adulto e possui ${idade} anos`)
} else { //Se não for nenhum dos anteriores classificar como um idoso.
    console.log(`Você é um idoso e possui ${idade} anos`)
}

