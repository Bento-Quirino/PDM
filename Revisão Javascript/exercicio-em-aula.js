let pessoa = {
    // String
    //Number
    // Boolean (true/false)
    // array de objetos
    materiasCursadas: [
        {
            nome: "TIA",
            horasCursadas: 100
        }
    ]
}


const chamada = [
    {
        nome: "Matheus"
    },
    {
        nome: "Richard"
    },
]

console.log(pessoa.materiasCursadas[0].horasCursadas)

// Mostra todos os nome da chamada com o for
for (let i = 0; i < chamada.length; i++) {
    console.log(i + ') ' + chamada[i].nome)
}

// Mostra todos os nomes da chamada com o forEach
chamada.forEach(aluno => { 
    console.log(aluno.nome)
})

// Mostra todos os nomes da chamada com o map
chamada.map(aluno => { 
    console.log(aluno.nome)
})



// EXERCÍCIOS
// Mostre todos os nomes em ordem alfabética)
// Mostre todas as idade acima de 18 (if-else e for)
