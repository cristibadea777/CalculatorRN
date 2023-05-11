import { TouchableOpacity, Vibration } from 'react-native';
import stylesApp from './StylesApp';
import { Text } from 'react-native';


const ButonCalculator = (value, textInput, setTextInput, setCuloareText, setTextRezultat) => {
  
  const semneOperatii = ['*', '%', '*', '/', '^', '.']
  const toateSemnele = ['*', '%', '*', '/', '^', '.', '+', '-', '⌫', 'C', '.', '=']

  const handleOnPress = () => {

    setCuloareText('yellow')

    //daca valoarea introdusa e un simbol si ultimu caracter din text tot simbol e, textu ramane la fel
    if( toateSemnele.includes(value) && toateSemnele.includes(textInput.charAt(textInput.length - 1)) ){
      setTextInput(textInput)
    }
    else{
      setTextInput(textInput  + value)
    }

    //poate sa inceapa userul de exemplu cu -NR sau +NR dar nu cu .NR sau *NR
    if(textInput === '0' && ! semneOperatii.includes(value) ){
      setTextInput(value)
    }


    if(value === 'C'){
      setTextInput('0')
    }    
    else if (value === '='){
      try {
        let text = textInput
        if(textInput.includes('^')){
          text = textInput.replaceAll('^', '**') //eval() nu functioneaza cu ^, si nu vreau sa pun in interfata '**' pe buton
        }
        let rezultat = eval(text).toFixed(2)
        setTextInput(rezultat.toString())
      } 
      catch (error) {
        setTextInput(textInput)
        setCuloareText('red')
      }
    }
    else if (value === '⌫'){
      try {
        if(textInput === 'Err' || textInput === 'Infinity' || textInput === 'NaN')
          setTextInput('0')
        else  
          setTextInput(textInput.slice(0, -1))
      } 
      catch (error) {
        console.error();
        setTextInput('0')
      }
    }
    Vibration.vibrate(50)
  }
  
    let culoareTextButon = 'cyan'
    let culoareButon = '#1e1e1e'
    let marimeText = 33
  
    if(toateSemnele.includes(value)){
      culoareTextButon = 'white'
      marimeText = 35
    }

    if(value === '='){
      culoareTextButon = 'yellow'
      marimeText = 50
    }

  
    return (
      <TouchableOpacity
        key={value}
        onPress={handleOnPress}
        style={ [stylesApp.butonCalculatorContainer, {backgroundColor: culoareButon}] }>

        <Text style={ [stylesApp.butonCalculatorText, {color: culoareTextButon, fontSize: marimeText }] }> {value} </Text>

      </TouchableOpacity>
    )
  }
  
  export default ButonCalculator