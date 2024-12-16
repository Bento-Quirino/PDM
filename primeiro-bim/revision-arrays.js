// Objetivo: revisar conceitos de arrays
const chamada = ["João", "Ana", "Debroi"] // Array de strings
console.log(chamada[0]) // Imprime o primeiro elemento do array chamada
chamada[0] = 15 // Alterando o valor da posição 0 do array chamada (ponteiros)
console.log(chamada[0])
chamada[0] = null // Alterando o valor da posição 0 do array chamada (ponteiros)
console.log(chamada[0])
chamada[0] = "Jorge" // Alterando o valor da posição 0 do array chamada (ponteiros)
console.log(chamada[0])

// Organizando o array chamada em ordem alfabética
chamada.sort() // Ordena o array chamada em ordem alfabética
console.log(chamada)

// Adicionando um elemento ao array chamada
chamada.push("João") // Adiciona um elemento ao final do array chamada
console.log(chamada)

// Removendo um elemento do array chamada
chamada.pop() // Remove o último elemento do array chamada

// Procurando um elemento no array chamada
const nome = "Ana"
console.log(chamada.includes(nome)) // Retorna true se encontrar o elemento "Ana" no array chamada, ou false se não encontrar
console.log(chamada.indexOf(nome)) // Retorna a posição do elemento "Ana" no array chamada, ou -1 se não encontrar

// Percorrendo um array
for (let i = 0; i < chamada.length; i++) {
    console.log(chamada[i])
}

// Procurando alguém de outro jeito
const position = chamada.indexOf(nome)
console.log(`${chamada[position]} está na posição ${position}`)