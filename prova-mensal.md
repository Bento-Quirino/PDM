# Prova de Programação para Dispositivos Móveis

O projeto deverá ser feito em grupos de 3 e deverá ser entregue um único projeto por grupo com os nomes dos integrantes no README do projeto.
Juntamente com a inserção do link do repositório no Google Sheets.

A prova irá abordar os seguintes tópicos estudados em javascript:
- [ ] **Objetos**
- [ ] **Arrays**
- [ ] **Funções**
- [ ] **If/Else**
- [ ] **Loops**

## O projeto consiste em **Criar um sistema escolar**.
Dada uma lista de alunos, o sistema deverá ser capaz de:

- [ ] **Listar todos os alunos,apenas o ra-nome**
- [ ] **Buscar um aluno pelo número da chamada**
- [ ] **Mostrar alunos matriculados no mês 02**
- [ ] **Listar todos alunos aprovados**
    - Média >= 6 e Presença >= 75
- [ ] **Listar todos os alunos reprovados**
    - Média < 6 e Presença < 75

Use a chamada abaixo como exemplo:
```javascript
let chamadaDeAlunos = [
    {
        nome: "Kayky",
        idade: 16,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 75,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 90,
                nota: 10
            },
        ],
        matriculadoEm: "2024/02/23",
        numeroChamada: 1221
    },
    {
        nome: "Ana",
        idade: 17,
        materias: [
            {
                nome: "BD1",
                presenca: 100,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 90,
                nota: 7.5
            },
        ],
        matriculadoEm: "2024/04/23",
        numeroChamada: 1222
    },
    {
        nome: "Matheus",
        idade: 20,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 79,
                nota: 8.5
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 60,
                nota: 6.5
            },
        ],
        matriculadoEm: "2024/02/25",
        numeroChamada: 1223
    },
    {
        nome: "Jorge",
        idade: 19,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 100,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 79,
                nota: 10
            },
        ],
        matriculadoEm: "2024/02/29",
        numeroChamada: 1224
    },
    {
        nome: "Richard",
        idade: 18,
        materias: [
            {
                nome: "BD2",
                presenca: 74,
                nota: 10
            },
            {
                nome: "BD1",
                presenca: 90,
                nota: 7
            },
        ],
        matriculadoEm: "2024/12/23",
        numeroChamada: 1225
    },
]
```

## Entrega
A entrega deverá ser feita até o dia 14/03/2024, com o link do repositório no Google Docs.
Deve ser entregue um arquivo js com o nome `chamada-escolar.js` com a implementação do sistema escolar que deverá ter as funções:
- [ ] **function listarAlunos(listaDeAlunos: aluno[]): void**
- [ ] **function buscarAlunoPeloNumeroDaChamada(numeroChamada: number): void**
- [ ] **function listarAlunosAprovados(listaDeAlunos: aluno[]): void** (aprovados em todas matérias apenas)
- [ ] **function listarAlunosReprovados(listaDeAlunos: aluno[]): void** (se foi reprovado em uma, considere reprovado)
- [ ] **function listarAlunoPorMesMatricula(listaDeAlunos: aluno[], mes: string, ano: string): void** (faça do ano 2024 do mês 2)

### NENHUMA FUNÇÃO DEVE OBRIGATÓRIAMENTE ter `return`, no mínimo `console.log()`
### **TODAS** Funções devem ter *export*

## Regras
- QUALQUER CONVERSA ENTRE OUTROS GRUPOS SERÁ CONSIDERADO **COLA** E SERAM ZERADOS TODOS ENVOLVIDOS
- QUALQUER TENTATIVA DE COLA ou GERAR CÓDIGOS POR I.A's ou consultas em VÍDEOS resultará em ZERO
- NÃO PODERRÁ SAIR DURANTE A PROVA PARA ÁGUA OU BANHEIRO
- O uso de dispositivos eletrônicos só será liberado nos últimos 20 minutos de prova para entregar a prova no github
