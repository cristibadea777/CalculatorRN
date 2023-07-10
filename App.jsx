import { useEffect, useState } from 'react';
import { StatusBar, Text, View } from 'react-native';
import stylesApp from './components/StylesApp';
import ButonCalculator from './components/ButonCalculator';

export default function App() {

  //starea textului inputat
  const [textInput, setTextInput] = useState('0')
  const [textRezultat, setTextRezultat] = useState('')
  //in caz de eroare se face 0
  const [culoareText, setCuloareText] = useState('yellow')

  const semneOperatii = ['*', '%', '*', '/', '^', '-', '+']

  //sa nu fie niciodata gol ci 0
  useEffect( () => 
    {
      if(textInput === ''){
        setTextInput('0')
      }
      if(textInput === '0')
        setTextRezultat('')
      else{
        try {
          let text = textInput
          if(textInput.includes('^')){
            text = textInput.replaceAll('^', '**') 
          }
          let rezultat = (function() {
            return Function(`return ${text}`)();
          })().toFixed(2);
          setTextRezultat(rezultat.toString())
        } catch (error) {
          setTextRezultat(textRezultat)
        }
      }
      //textInput dar fara primul caracter (+ sau -)
      let text = textInput.slice(1)
      if (! semneOperatii.some((semn) => text.includes(semn))) {
        setTextRezultat('');
      }
    }, [textInput]
  )

  const valoriButoane = 
  [
    ['C', '^', '%', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '⌫', '='],
  ]

  return (
    <View style={stylesApp.containerPrincipal}>

      <StatusBar style="auto" backgroundColor={"#232B2B"} barStyle={'light-content'}> </StatusBar>

      <View style={stylesApp.containerEcran}>
        <Text style={[stylesApp.textInput, { color: culoareText }]}> {textInput} </Text>
      </View>

      <View style={stylesApp.containerRezultat}>
        <Text style={[stylesApp.textInput, {fontSize: 33}]}> {textRezultat} </Text>
      </View>

      <View style={stylesApp.containerButoane}>
        {
          //valoriButoane e o matrice (1x5) ce contine mai multe  array-uri
          //pentru fiecare array in valoriButoane se va crea un <View>
          //un array se va numi 'randButoane'
          //pt fiecare randButoane se vor crea elemente jsx de tip ButonCalculator, si ca prop se va da valoarea pozitiei din array   
          valoriButoane.map(
            (randButoane) => (
              <View key={randButoane} style={stylesApp.containerRandButoane}>
                {randButoane.map(
                    (value) => ButonCalculator(value, textInput, setTextInput, setCuloareText, setTextRezultat)
                  )
                }
              </View>
            )
          )
        }
      </View>

    </View>
  );
}


