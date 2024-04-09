import { View, StyleSheet, Dimensions } from 'react-native' // Importando componentes nativos
import { Button, TextInput } from 'react-native-paper' // Importando de bibliotecas

const width = Dimensions.get("screen").width // Pega a largura da tela
const height = Dimensions.get("screen").height // Pega a altura da tela

export default function App() {
  // Criando uma função que faz um console.log()
  function mostrarLog() {
    console.log("EU SOU UMA FUNÇÃO")
  }

  // Retorna o que vemos na tela (JSX)
  return(
    <View style={styles.formulario}> 
      <TextInput style={styles.inputs} placeholder='Email'/>
      <TextInput placeholder='Senha'/>
      <Button style={styles.inputs} mode='contained' onPress={mostrarLog}>Login</Button>
      <Button style={styles.inputs} mode='outlined' onPress={mostrarLog}>Login</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  // Aqui temos um "formulario" que tem o tamanho da nossa tela
  // aqui o css é como se fosse um objeto, o valor, e a chave, exemplo:
  // background-color, viraria backgroundColor
  // #000, viraria '#000'

  // DESAFIO
  // Dê uma margin nos inputs/buttons
  // Aumente o segundo input
  formulario: {
    borderWidth: "32px",
    borderStyle: 'solid',
    borderColor: "#00fa00",
    width: width,
    height: height,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  inputs: { // 80% da largura da tela
    width: width*0.8,
  },
})