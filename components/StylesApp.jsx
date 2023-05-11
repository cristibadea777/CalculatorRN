import { StyleSheet } from "react-native"

const stylesApp = StyleSheet.create({
    containerPrincipal: {
      display: 'flex',
      flex: 1,
      backgroundColor: '#232B2B',
    },
  
    containerEcran: {
      display: 'flex',
      width: '100%',
      height: '35%',
      backgroundColor: '#1e1e1e',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    textInput: {
      color: 'white',
      fontSize: 70,
      position: 'absolute',
      alignSelf: 'flex-end',
    },
  
    containerRezultat: {
      display: 'flex',
      width: '100%',
      height: '5%',
      backgroundColor: '#1e1e1e',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    containerButoane: {
      display: 'flex',
      width: '100%',
      height: '60%',
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    containerRandButoane: {
      height: '20%',
      width: '100%',
      flexDirection: 'row',
      backgroundColor: '#232B2B',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
  
    butonCalculatorText: {
      color: 'cyan',
      fontSize: 33, 
      fontWeight: "bold",
      textTransform: "uppercase"
  },
  
  butonCalculatorContainer: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#1e1e1e',
    margin: 1
  },
  })

export default stylesApp