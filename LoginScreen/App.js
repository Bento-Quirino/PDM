import { View } from 'react-native' // Importing native components
import { Button, TextInput } from 'react-native-paper' // Importing from libraries
import TopArea from './src/components/TopArea' // Importing custom components
import styles from './src/constants/style' // Importing styles
import portugese from './src/constants/i18n/english' // Importing constants

// Variáveis globais

export default function App() {
  return (
    <View style={styles.background}>
        <TopArea />

        <View style={styles.form}>
          <TextInput outlineColor='#989572' mode='outlined' style={styles.inputs} placeholder={portugese.email} />
          <TextInput outlineColor='#989572' mode='outlined' style={styles.inputs} placeholder={portugese.password} />
          <Button buttonColor='#989572' style={styles.inputs} mode='contained'>{portugese.login}</Button>
        </View>

        <View style={styles.bottomContainer}>
          <Button 
            buttonColor='#989572' 
            style={styles.inputs} 
            mode='contained'>
              Login com o google
          </Button>
          <Button 
            buttonColor='#989572' 
            style={styles.inputs} 
            mode='contained'>
              Login com apple
          </Button>
        </View>
    </View>
  )
}