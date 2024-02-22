# Avaliação atitudinal PDM valendo 1 ponto

Com base nos conhecimentos adquiridos em aula, pede-se que entreguem um arquivo chamado `pdm-seu-nome-completo.js` que resolva o seguinte problema:

## O projeto consiste em **Criar um código javascript para validar um cadastro de aluno em uma instituição escolar**.

- O aluno deve criar um objeto com as seguintes propriedades:
    - nome
    - idade 
    - cursando (um array com as matérias que o aluno está cursando)
    - presença (um array de datas que o aluno esteve presente)
    - ra (registro acadêmico) 

- O aluno deve criar as seguintes validações:
    - O nome do aluno deve ter no mínimo 10 caracteres
    - A idade do aluno deve ser maior que 14
    - O aluno deve estar cursando no mínimo 3 matéria
    - O aluno deve ter no mínimo 2 presenças
    - O RA do aluno deve ter 7 caracteres

## Deve ser entregue
- O arquivo `pdm-seu-nome-completo.js` com a implementação do sistema de validação do cadastro do aluno
    - O arquivo deve conter comentários explicando o que cada função faz (0.1)
    - O arquvio deve conter uma função validaCadastro que recebe um objeto aluno e retorna OU o objeto abaixo OU um console log com erro (0.7)
        - ```javascript
            {
                status: "valid",
                message: "Cadastro válido",
                aluno: {
                    nome: "Kayky de Brito da Silva", 
                    idade: 15,
                    cursando: ["TIA", "PDM", "BD1", "BD2", "AOS"],
                    presença: ["2022-01-01", "2022-01-02", "2022-01-03", "2022-01-04", "2022-01-05", "2022-01-06", "2022-01-07", "2022-01-08", "2022-01-09", "2022-01-10"],
                    ra: "22002200"
                }
            }
            ```
        - ```javascript
            console.log("Erro: Nome do aluno deve ter no mínimo 10 caracteres")
            ```
    - O arquivo deve conter testes da chamada da função validaCadastro (0.2)


## Considerações finais, avaliação e entrega
- O arquivo deve ser entregue até o dia 22/02/2024 no fim da aula, com o link do repositório no (GOOGLE DOCS)[https://encurtador.com.br/vAHR1].
- Cola ou plágio acarretará em nota 0 (zero) para todos os envolvidos
- A avaliação será feita com base nos seguintes critérios:
    - Comentários explicativos (0.2)
    - Implementação da função validaCadastro (1.4)
    - Testes da função validaCadastro (0.4)
- Quem não entregar o projeto até a data estipulada, terá nota 0 (zero) no projeto
- Use alguns objetos para testar a função validaCadastro() como no exemplo abaixo:
    - ```javascript
        let aluno1 = {
            nome: "Kayky de Brito da Silva", 
            idade: 15,
            cursando: ["TIA", "PDM", "BD1", "BD2", "AOS"],
            presença: ["2022-01-01", "2022-01-02", "2022-01-03", "2022-01-04", "2022-01-05", "2022-01-06", "2022-01-07", "2022-01-08", "2022-01-09", "2022-01-10"],
            ra: "22002200"
        }
        ```
