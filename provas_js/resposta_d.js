
// Resposta:
// Como separar a array em arrays menores
let totalSemestres = 8
let alunosSistemasInformacao = [
    {
        nome: "João",
        idade: 20,
        semetreAtual: 4,
    },
    {
        nome: "Maria",
        idade: 25,
        semetreAtual: 7,
    },
    {
        nome: "Bruxa",
        idade: 33,
        semetreAtual: 2,
    },
    {
        nome: "James",
        idade: 22,
        semetreAtual: 4,
    },
]

// Crando uma array para cada semestre
let alunosPorSemestre = []

// Criando as arrays para cada semestre
for (let i = 0; i < totalSemestres; i++) {
    alunosPorSemestre.push({
        semestre: i + 1,
        alunos: []
    }) // Cria um array vazio para o semestre atual
    for (let j = 0; j < alunosSistemasInformacao.length; j++) { // Percorre a lista de alunos para adicionar no semestre que ele pertence
        if (alunosSistemasInformacao[j].semetreAtual === (i + 1)) { // Se o semestre do aluno for igual ao semestre atual, adiciona ele na array
            alunosPorSemestre[i].alunos.push(alunosSistemasInformacao[j]) // Adiciona o aluno atual na array do semestre que acabou de ser criada
        }
    }
}

console.log(alunosPorSemestre) // Printa a array de arrays

console.log("--------------------")

// Print bonito
alunosPorSemestre.forEach(semestre => {
    console.log(`Alunos do ${semestre.semestre}º semestre:`)
    if (semestre.alunos.length === 0) {
        console.log("Nenhum aluno no semestre")
    } else {
        semestre.alunos.forEach(aluno => {
            console.log(`- ${aluno.nome}, ${aluno.idade} anos`)
        })
    }
    console.log("--------------------")
})