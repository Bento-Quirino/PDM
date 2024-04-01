// Uma escola tem seu cadastro de alunos feito de forma errada
// e agora precisa de um script para corrigir isso.
// Monte um script que apartir de uma lista de objetos
// filtre os objetos que possuem a propriedade "cep" e cadastre o valor no formato correto
// nos campos de "logradouro", "bairro", "cidade" e "estado".
// Printe a array de objetos com os valores corrigidos no final

// A lista de objetos é a seguinte (não altere a lista):
const alunos = [
    {
        nome: "João",
        address: {
            cep: "01001000",
            logradouro: null,
            bairro: null,
            cidade: null,
            estado: null,
        }
    },
    {
        nome: "Maria",
        address: {
            cep: "01001000",
            logradouro: null,
            bairro: null,
            cidade: null,
            estado: null,
        },
    },
    {
        nome: "José",
        address: {
            cep: "01001000",
            logradouro: "RUA X",
            bairro: "BAIRRO Y",
            cidade: "CIDADE K",
            estado: "ESTADO Z",
        },
    },
    {
        nome: "Pedro",
        address: {
            cep: "01001000",
            logradouro: null,
            bairro: null,
            cidade: null,
            estado: null,
        }
    
    }
]

// O resultado esperado é um console log no seguinte formato:
// Alunos com endereços corrigidos:
// --------------------------------
// Aluno: João
// - Logradouro: Praça da Sé
// - Bairro: Sé
// - Cidade: São Paulo
// - Estado: SP
// --------------------------------
// Aluno: Maria
// - Logradouro: Praça da Sé
// - Bairro: Sé
// - Cidade: São Paulo
// - Estado: SP
// --------------------------------

// PONTUAÇÃO
// - Pegar o valor do cep: 1 ponto
// - Fazer a correção dos valores: 1 ponto
// - Printar a array atualizada (de maneira bonita): 1 ponto
