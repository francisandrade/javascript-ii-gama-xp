// Importar a database de livros
const livros = require('./database')
// Importar o input
const readline = require('readline-sync')

// cria uma variável com o readline capturando a entrada do usuário
const entradaInicial = readline.question('Deseja buscar um livro? S/N ')

// Se for sim, mostra as categorias disponíveis e pergunta qual categoria ela escolhe
if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponíveis: ')
    console.log('Produtividade, História brasileira, Américas, Tecnologia, Estilo de vida')

    const entradaCategoria = readline.question('Qual categoria você escolhe? ')
    const retorno = livros.filter(livro => livro.categoria === entradaCategoria) // Percorre todos os livros e volta com os livros com a categoria escolhida

    console.table(retorno) // cria uma tabela com as infos em retorno

    // Se não, mostra todos os livros em ordem crescente pelo num de páginas
} else {
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas) // Callback, p considerar todas as 3 unidade de números das páginas
    console.log('Esses são todos os livros disponíveis: ')
    console.table(livrosOrdenados) // cria uma tabela com os livros ordenados
}

