// Revisão de funções

function soma(a, b) { // Declaração de função que recebe dois parâmetros e retorna a soma deles
    return a + b
}
console.log(soma(2, 3))
console.log('-------------------')

function printadorDeStrings(string) { // Declaração de função que recebe um parâmetro e imprime ele
    console.log('------------[PRINTADOR DE STRINGS]------------')
    console.log(string)
    console.log('------------[PRINTADOR DE STRINGS]------------')
}
printadorDeStrings("Olá, mundo!")

// Asynchronous functions (podemos usar async e await para lidar com funções assíncronas)
// Async vs Sync
async function getCep(cep) {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`) // Chamada da API ViaCEP e esperando a resposta
    const data = await response.json() // Transformando a resposta em JSON e esperando a transformação
    return data
}

// Funções assíncronas retornam uma Promise
async function exibeEndereco(cep) {
    const endereco = await getCep(cep) // Chamada da função getCep
    console.log(endereco)
}

exibeEndereco('01001000')


// EXTRAS
// Funções anônimas
const subtrai = function (a, b) { // Declaração de função anônima que recebe dois parâmetros e retorna a subtração deles
    return a - b 
    // Se chamam assim porque não tem nome e são armazenadas em variáveis
}

// Arrow functions
const multiplica = (a, b) => { // Declaração de arrow function que recebe dois parâmetros e retorna a multiplicação deles
    return a * b
    // Arrow functions são funções anônimas que podem ser escritas de forma mais curta
    // A vantagem é que elas são mais curtas e mais fáceis de escrever
}

// Arrow functions ainda mais curtas
const divide = (a, b) => a / b // Arrow function que recebe dois parâmetros e retorna a divisão deles
// Se a função tiver apenas uma linha, podemos omitir as chaves e o return

// Funções como parâmetros
const executaOperacao = (operacao, a, b) => operacao(a, b) // Declaração de função que recebe uma função como parâmetro e a executa
console.log(executaOperacao(soma, 2, 3)) // Chamada da função executaOperacao passando a função soma como parâmetro
// Estamos passando os ponteiros da função soma como parâmetro para a função executaOperacao
console.log(executaOperacao(subtrai, 2, 3)) // Chamada da função executaOperacao passando a função subtrai como parâmetro