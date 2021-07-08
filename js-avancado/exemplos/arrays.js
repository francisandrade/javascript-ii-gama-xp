const alunasGama = ["Paula", "Maria", "Estela", "Clara"]


// Acessar informações em um Array
console.log(alunasGama[3]) // "Clara"


// Operador spread (...) copiar um array anterior e adicionar mais itens
const alunasXP = [...alunasGama, "Simara"]

console.log(alunasXP)


// Métodos de iteração

/* for (let i = 0; i < alunasXP.length; i++) {
    console.log(alunasXP[i])
} */

// Map 
alunasXP.map(aluna => console.log(aluna))


// Filter - Uma forma da gente receber um novo array com as info filtradas
const numeros = [34, 45, 67, 90, 55, 76]

const numerosImpares = numeros.filter(numero => numero % 2 != 0)
console.log(numerosImpares)

const numerosPares = numeros.filter(numero => numero % 2 == 0)
console.log(numerosPares)


// Find - procura uma "string" em um array
const produtos = ["geladeira", "fogao", "cama", "mesa"]

const encontraCama = produtos.find(produto => produto === "cama")
console.log(encontraCama)

const encontraMesa = produtos.find(produto => produto === "mesa")
console.log(encontraMesa)


// Sort - Ordenar os números em ordem crescente ou decrescente (com callback)
const numerosOrdenadosCrescente = numeros.sort()
console.log(numerosOrdenadosCrescente)

const numerosOrdenadosDecrescentes = numeros.sort((a,b) => b - a) // Callback
console.log(numerosOrdenadosDecrescentes)


// Reduce - método que reduz o nosso Array a um resultado de uma operação matemática
const numbers = [1, 34, 35]

const soma = numbers.reduce((valorAnterior, valorAtual) => { // Callback
    return valorAnterior + valorAtual
},0)

console.log(soma) // 90