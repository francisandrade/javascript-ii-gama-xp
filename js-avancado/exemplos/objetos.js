const pessoa = {
    nome: "Francis",
    idade: 26,
    cidade: "Serra Branca"
}

//Notação de ponto
console.log(pessoa.nome) //"Francis"

//Notação de colchetes
console.log(pessoa['idade']) //26

//Destruct (Como desestruturar Objetos) - Forma menos verbosa de acessar as propriedades de um objeto

const { nome, idade, cidade } = pessoa

console.log(nome) //"Francis"
console.log(idade) //26
console.log(cidade) //Serra Branca