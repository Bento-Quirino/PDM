// Aqui serão mostradas algumas funções e métodos importantes do JavaScript.
// Desde o básico até o avançado (variáveis, arrays, objetos, funções, etc).

/******************************************************************************************************************/

// Variáveis
let nome = "Kaynan Vieira dos Santos"; // String
nome.length // Diz o tamanho da string

let idade = 20; // Number
idade.toString() // Converte para string

console.log(nome[0]) // Retorna o primeiro caractere da string
console.log(typeof nome) // Retorna o tipo da variável (string)
console.log(typeof idade) // Retorna o tipo da variável (number)
console.log(nome.split(" ")) // Divide a string em um array de strings com base no separador passado como parâmetro

/******************************************************************************************************************/

// Arrays
let frutas = ["Banana", "Maçã", "Morango", "Uva"];
console.log(frutas[0]) // Retorna o primeiro elemento do array
console.log(frutas.length) // Retorna o tamanho do array

// Métodos de arrays
console.log(frutas.indexOf("Morango")) // Retorna o índice do elemento passado como parâmetro ou -1 se não encontrar
console.log(frutas.push("Melancia")) // Adiciona um elemento no final do array e retorna o tamanho do array
console.log(frutas.pop()) // Remove o último elemento do array e retorna o elemento removido
console.log(frutas.shift()) // Remove o primeiro elemento do array e retorna o elemento removido (é bom para filas)
console.log(frutas.slice(1, 3)) // Retorna um novo array com os elementos do array original de acordo com os índices passados como parâmetro
console.log(frutas.splice(1, 2)) // Remove elementos do array e retorna os elementos removidos

/******************************************************************************************************************/

// Objetos
let pessoa = {
    nome: "Lucas",
    idade: 20,
    altura: 1.70
}

console.log(pessoa.nome) // Retorna o valor da propriedade nome do objeto pessoa
console.log(pessoa["idade"]) // Retorna o valor da propriedade idade do objeto pessoa

// Métodos de objetos
console.log(Object.keys(pessoa)) // Retorna um array com as chaves do objeto pessoa
console.log(Object.values(pessoa)) // Retorna um array com os valores do objeto pessoa
console.log(pessoa)
pessoa = Object.assign(pessoa, {peso: 70}) // Adiciona a propriedade peso ao objeto pessoa
console.log(pessoa)

/******************************************************************************************************************/

// fetch
// O fetch é uma função que faz requisições HTTP e retorna uma Promise
// O método then() é utilizado para tratar a resposta da requisição
// O método catch() é utilizado para tratar erros na requisição
// Uma Promisse é um objeto que representa a eventual conclusão ou falha de uma operação assíncrona (NÃO É A RESPOSTA DA REQUISIÇÃO)

// Exemplo de requisição GET para a api VIA CEP
const cep = "40010000"
const promisse = fetch(`https://viacep.com.br/ws/${40010000}/json/`)
    .then(response => response.json()) // Converte a resposta da requisição para JSON
    .then(data => console.log(data)) // Mostra os dados da resposta da requisição
    .catch(error => console.log(error)) // Mostra o erro da requisição se houver, pulando o then() anterior

console.log(promisse)
console.log("Requisição feita com sucesso!") // Essa linha será executada antes da resposta da requisição

// Executando a requisição com async/await
async function getCep(cep) {
   const respostaDoRequest = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))

    return respostaDoRequest
}

console.log(getCep(cep))

/******************************************************************************************************************/

// Coalescência nula
// O operador de coalescência nula (??) é um operador lógico que retorna o seu operando do lado esquerdo quando o lado direito é null ou undefined

let titulo = null // Mude para testar o operador
let tituloPadrao = "Lucas"

console.log(titulo ?? tituloPadrao) // Retorna o valor de titulo se ele não for null ou undefined, caso contrário retorna o valor de tituloPadrao

// Encadeamento opcional
// O operador de encadeamento opcional (?.) permite ler o valor de uma propriedade localizada dentro de uma cadeia de objetos conectados sem ter que validar expressamente que cada referência na cadeia é válida

let prova = {
    pontos: 10,
    aluno: {
        nome: "Lucas",
        idade: 20
    },
    materia: "matemática",
    corrigida: undefined,
}

console.log(prova.aluno?.nome) // Retorna o nome do aluno se ele existir, caso contrário retorna undefined

// Operador de atribuição condicional
// O operador de atribuição condicional (??=) é um operador de atribuição que atribui um valor a uma variável se a variável for null ou undefined

let nomePadrao = "Lucas"
let nomeUsuario = null // Mude para testar o operador

nomeUsuario ??= nomePadrao // Atribui o valor de nomePadrao a nomeUsuario se nomeUsuario for null ou undefined
console.log(nomeUsuario)

/******************************************************************************************************************/

// Operador de espalhamento (spread)
// O operador de espalhamento (spread) é um operador que nos permite espalhar os elementos de um array ou objeto

// Arrays
let frutas1 = ["Banana", "Maçã", "Morango"]
let frutas2 = ["Uva", "Melancia", "Laranja"]

let frutas3 = [...frutas1, ...frutas2] // Espalha os elementos dos arrays frutas1 e frutas2 em um novo array
console.log(frutas3)

// Objetos
let pessoa1 = {
    nome: "Lucas",
    idade: 20
}
let pessoa2 = {
    altura: 1.70,
    peso: 70
}

let clonePessoa1 = {...pessoa1} // Espalha as propriedades dos objetos pessoa1 em um novo objeto
let chamada = {...pessoa1, ...pessoa2} // Espalha as propriedades dos objetos pessoa1 e pessoa2 em um novo objeto
console.log(chamada)