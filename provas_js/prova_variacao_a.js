// Crie um script que a partir de uma lista de objetos filtre os objetos que
// possuem a propriedade "dataMatricula" com valor maior que 01/03/2024 e
// o status inadimplente como "false". 

// A lista de objetos é a seguinte (altere a lista APENAS no código, não no arquivo original):
const alunos = [
    {
        nome: "João",
        dataMatricula: "2024-01-02",
        isInadimplente: false
    },
    {
        nome: "Maria",
        dataMatricula: "2024-03-01",
        isInadimplente: true
    },
    {
        nome: "José",
        dataMatricula: "2024-27-03",
        isInadimplente: true
    },
    {
        nome: "Pedro",
        dataMatricula: "2024-03-12",
        isInadimplente: false
    }
]

// O resultado esperado é:  
//const arrayNova = [
//     {
//         nome: "João",
//         dataMatricula: "2024-03-02",
//         isInadimplente: false
//     },
//     {
//         nome: "Pedro",
//         dataMatricula: "2024-03-02",
//         isInadimplente: false
//     }
// ]
// const alunos = [
//    {
//        nome: "Maria",
//        dataMatricula: "2024-01-02",
//        isInadimplente: true
//    },
//    {
//        nome: "José",
//        dataMatricula: "2024-27-03",
//        isInadimplente: true
//    }
// ]
    
// Pontuação:
// - Filtrar a array com base na data: 1.5 pontos
// - Filtrar a array com base no status: 0.5 ponto
// - Printar a array (de maneira bonita): 1 ponto