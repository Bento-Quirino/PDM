import { View, StyleSheet, Dimensions, ImageBackground, Text } from 'react-native'; // Importing native components
import { Button, TextInput } from 'react-native-paper'; // Importing from libraries
import PersonBackground from "./src/assets/person-background-image.jpeg"
import { BlurView } from 'expo-blur'

// Variáveis globais
const width = Dimensions.get("screen").width; // Gets the screen width
const height = Dimensions.get("screen").height; // Gets the screen height

export default function App() {
  return (
    <ImageBackground source={PersonBackground} style={styles.background}>
      <BlurView intensity={100} style={styles.blurContainer}>
        <View style={styles.form}>
          <TextInput mode='outlined' style={styles.inputs} placeholder='Email' />
          <TextInput mode='outlined' style={[styles.inputs, { width: '90%' }]} placeholder='Senha' />
          <Button style={styles.inputs} mode='contained'>Login</Button>
        </View>
      </BlurView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    width: width,
    height: height,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  blurContainer: {
    position: 'absolute',
    
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    width: width * 0.9,
    alignItems: "center",
    padding: 8,
    borderRadius: 10,
  },
  inputs: {
    width: "80%",
    marginVertical: 10,
  },
});
