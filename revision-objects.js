// Revisão de objetos
// Objetivo: revisar conceitos de objetos

const pessoa = {
    nome: "Jorge",
    idade: 23,
    altura: 1.75,
    temCNH: true,
    apelidos: ["Jorginho", "Jorjão", "Jorgito"]
}
const pessoa2 = {
    nome: "Ana",
    idade: 18,
    altura: 1.65,
    temCNH: false,
    apelidos: ["Aninha", "Anita", "Ani"]
}
// Dá pra fazer uma chamda só com essas variáveis? Não
console.log(pessoa, pessoa2)
console.log('-------------------')

// Acessando propriedades de um objeto
console.log(pessoa.nome) // Acessando a propriedade nome do jorge
console.log(pessoa["nome"]) // Acessando a propriedade nome do jorge
console.log(pessoa.apelidos[0]) // Acessando o primeiro apelido do jorge
console.log('-------------------')

// Alterando propriedades de um objeto
pessoa.nome = "George" // Alterando o valor da propriedade nome do jorge
console.log(pessoa.nome)
pessoa["nome"] = "Jorge" // Alterando o valor da propriedade nome do jorge
console.log('-------------------')

// Adicionando propriedades a um objeto
pessoa.sobrenome = "Lisboa" // Adicionando a propriedade sobrenome ao jorge
console.log(pessoa)
console.log('-------------------')

// Removendo propriedades de um objeto
delete pessoa.sobrenome // Removendo a propriedade sobrenome do jorge
console.log(pessoa)
console.log('-------------------')


// EXTRAS
// Percorrendo um objeto
for (let chave in pessoa) {
    console.log(chave, pessoa[chave])
}
console.log('-------------------')

// Percorrendo um array de objetos
const pessoas = [pessoa, pessoa2]
for (let i = 0; i < pessoas.length; i++) {
    console.log(pessoas[i])
}
console.log('-------------------')

// Mostrando todos os apelidos de todas as pessoas
pessoas.forEach(aluno => {
    for (let j = 0; j < aluno.apelidos.length; j++) {
        console.log(aluno.apelidos[j])
    }
})