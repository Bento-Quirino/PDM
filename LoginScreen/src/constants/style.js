import { StyleSheet } from "react-native"
import { height, width } from "./dimensions"

export default StyleSheet.create({
    bottomContainer: {
      width: width,
      backgroundColor: "#EDC7CF",
      height: height * 0.2,
      alignItems: "center",
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#333'
    },
    topImage: {
      height: height * 0.5,
      width: width,
    },
    background: {
      width: width,
      height: height,
      alignItems: "center",
    },
    blurContainer: {
      position: 'absolute',
      
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    form: {
      width: width,
      backgroundColor: "#EDC7CF",
      height: height * 0.3,
      alignItems: "center",
      paddingTop: 20,
    },
    inputs: {
      width: "80%",
      marginBottom: 10,
    },
})  