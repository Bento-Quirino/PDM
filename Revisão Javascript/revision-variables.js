// Declaração de variáveis
const minhaString = "Jorge!" // Não pode ser alterado
let meuInteiro = 42 // Pode ser alterado
let meuBooleano = true // Pode ser alterado
let meuFloat = 3.14 // Pode ser alterado

// Imprimindo os valores das variáveis
console.log(minhaString)
console.log(meuInteiro)
console.log(meuBooleano)
console.log(meuFloat)

// Mudando o valor da variável meuInteiro para uma string com o número 42
meuInteiro = "42"
console.log(typeof meuInteiro)
console.log(meuInteiro)
// Mudando o valor da variável meuInteiro para o número 40
meuInteiro = 40
console.log(typeof meuInteiro) // typeof retorna o tipo da variável
console.log(meuInteiro)

console.log(minhaString + meuInteiro) // Concatenação de string com number

/*
minhaString = "Olá, mundo!" // Não pode ser alterado
console.log(minhaString)
*/

// EXTRAS - Concatenação e interpolação
console.log("Olá, meu nome é " + minhaString + " e eu tenho " + meuInteiro + " anos.") // Concatenação de string com number
console.log(`Olá, meu nome é ${minhaString} e eu tenho ${meuInteiro} anos.`) // Interpolação de string com number

// EXTRAS - String como array
console.log(minhaString[0]) // Retorna o primeiro caractere da string
console.log(minhaString.slice(0, 4)) // Retorna os caracteres da posição 0 até a posição 4 (não inclui o 4)

