# Em grupos devem realizar a criação de uma tela proposta.
## Será avaliado na prova BIMESTRAL PDM:
- Organização de pastas: **1 ponto**;
  - `src/components`
  - `src/constants`
  - `src/lib` para a tensorflow/toxicity
  - `src/constants/i18n`
- Criar componentes separados para **3 pontos**:
  - Input;
  - Botão;
- UI: **2 pontos**;
  - Fidelidade da UI do projeto
- Integração de I.A do tensorflow **NO APLICATIVO** (usando o modelo /toxicity): **4 pontos**;

## Será avaliado na prova BIMESTRAL TIA:
- Integração de I.A do tensorflow **NO APLICATIVO** (usando o modelo /toxicity): **10 pontos**;
  
![image](https://github.com/Bento-Quirino/PDM/assets/72083150/1b879d1e-fe98-42f3-a16a-8771c8b4b7d3)

  ## OBS:
  O texto "Conteúdo extremamente tóxico" deve mudar com base nos erros, exemplo, se tivemos 3 toxicidades, pegue a primeira, e mostre ela:
  - Conteúdo extremamente ofensivo
  - Conteúdo ofensivo
  - Conteúdo Tóxico
Mostre primeiro "Conteúdo extremamente ofensivo"

## 
##
## 
##
## 
##
## 
##
## 
##

## Será avaliado na prova MENSAL:
- Organização de pastas;
- Hooks (useState);
- Resolução de proplemas;
- Trabalho em grupo;
- UI;
- Biblioteca de I.A do tensorflow (usando o modelo /toxicity);

## O que deve ser feito?
![image](https://github.com/Bento-Quirino/PDM/assets/72083150/1d385f9f-ae77-4085-af8e-4e97d8688593)
- A tela do meio deve ser a tela inicial, onde será possível digitar na caixa de texto;
- Caso o usuário clique no botão, deve ser feita uma analise do texto usando a biblioteca do tensorflow para analisar a toxicidade do texto;
- Caso o texto seja tóxico em qualquer aspecto, deve enviar o usuário para a tela da direita, onde seu perfil foi banido;
- Caso o texto não seja tóximo em qualquer aspecto, deve atualizar a lista de postagens, adicionando o último post, como visto na interface a esquerda;

# ARTIGOS DE AJUDA

- [artigo guia](https://dev.to/fadygrab/react-tensorflowjs-a-cool-recipe-for-ai-powered-applications-129h)
- [FlatList](https://reactnative.dev/docs/flatlist)
- [Conditional rendering](https://youtu.be/XvURBpFxdGw?si=ukKgOrzdtAg56jEC)
- [Props](https://youtu.be/ZLtBdpwg8tI?si=lkN2kW4qAOZVE_D-)
- [Hooks](https://youtu.be/TNhaISOUy6Q?si=R7Obm1nHWblITxW8)
- [Tensorflow JS](https://www.npmjs.com/package/@tensorflow/tfjs-react-native)

### Bibliotecas recomendadas
- [react native paper](https://reactnativepaper.com/)
- [tensorflow toxicity model](https://github.com/tensorflow/tfjs-models/tree/master/toxicity)
- Ajudadando com tensorlflow e dependências:
```sh
npx expo install expo-gl --force
npm install react-native-fs --force
npm install @tensorflow/tfjs --force
npm install @tensorflow/tfjs-react-native --force
```

# Entregar até dia 28/05
- Grupos de 4 a 6 integrantes;
- As aulas seguintes serão para auxiliar no projeto/fazer o projeto
