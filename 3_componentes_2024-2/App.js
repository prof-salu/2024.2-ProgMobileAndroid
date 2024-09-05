//Import das bibliotecas

//Import da biblioteca REACT
import React, {useState} from 'react'; 

//Import dos componentes REACT NATIVE
import {View, Text, StyleSheet, Image, TextInput, Button} from 'react-native';


//Função principal (area JS e JSX) [mesmo nome do arquivo]
export default function App(){
  //JS
  //let, var, const[constante]
  let disciplina = 'Desenvolvimento Mobile';
  const urlImagem = {uri:'https://br.web.img3.acsta.net/pictures/17/02/27/17/41/046707.jpg'}

  //STATES (hooks)
  const [idade, setIdade] = useState('');

  function cliqueAqui(){
    alert('Numero informado: ' + idade);
  }

  //JSX
  return(
    <View style={styles.container}>
      <Text style={styles.texto}>Bem-vindo a disciplina de {disciplina}.</Text>
      <Text style={styles.texto}>{'\n'}Imagem Web</Text>
      <Image style={styles.imagem} source={urlImagem}/>
      <Text style={styles.texto}>{'\n'}Imagem local</Text>
      <Image style={styles.imagem} source={require('/assets/onepiece.jpg')} />
      
      <TextInput 
        style = {styles.entradaTexto}
        placeholder='Informe a sua idade: '
        placeholderTextColor= '#FFFFFF'
        keyboardType='numeric'
        onChangeText={setIdade}/>
      
      <Button
        title = 'Clique aqui'
        color= 'orange' 
        onPress={cliqueAqui}/>
    </View>
  );
}

//DPI: Density pixel for INCHES
//Estilização
const styles = StyleSheet.create({
  container : {
    padding: 40,
    backgroundColor: '#7695FF',
    width: '99%',
    height: '100%',
    alignSelf: 'center',
  },
  texto : {
    color : '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: 'bolder',
  }, imagem: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 10,
  }, entradaTexto: {
    marginTop: 10,
    color: '#FFFFFF',
    borderWidth: 1,
    padding: 2,
    borderColor: '#FFF',
  }
});


