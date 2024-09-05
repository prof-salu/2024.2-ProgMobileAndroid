import {useState} from 'react';

import { Text, SafeAreaView, StyleSheet, TouchableOpacity, TextInput, View } from 'react-native';


export default function App() {
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [resultado, setResultado] = useState(0);

  function somar(){
    setResultado(Number(valor1) + Number(valor2));
  }

  function subtrair(){
    setResultado(Number(valor1) - Number(valor2));
  }

  function multiplicar(){
    setResultado(Number(valor1) * Number(valor2));
  }

  function dividir(){
    setResultado(Number(valor1) / Number(valor2));
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>{/*Cabeçalho*/}
        <Text style={styles.cabecalho}>Calculadora 2024.2</Text>
      </View>

      <View>{/*Entrada*/}
        <TextInput 
         style={styles.entrada}
         placeholder="Valor 01" 
         keyboardType="numeric"
         onChangeText={(valor) => {setValor1(valor)}}/> 
        <TextInput 
         style={styles.entrada}
         placeholder="Valor 02"
         keyboardType="numeric" 
         onChangeText={(valor) => {setValor2(valor)}}/> 
      </View>
      <View style={styles.botoes}>{/*Botões*/}
        <TouchableOpacity style={styles.botao} onPress={somar}>
          <Text style={styles.textoBotao}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={subtrair}>
          <Text style={styles.textoBotao}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={multiplicar}>
          <Text style={styles.textoBotao}>*</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={dividir}>
          <Text style={styles.textoBotao}>/</Text>
        </TouchableOpacity>
      </View>
      <View>{/*Saída*/}
        <Text style={styles.resultado}>Resultado: {resultado.toFixed(2)}</Text>  
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', backgroundColor: '#ecf0f1',
    padding: 8,
  },cabecalho: {
    fontSize: 34, textAlign: 'center', backgroundColor: 'red',
    padding: 4, marginBottom: 5, color: 'white',
  }, entrada: {
    borderWidth: 2, borderColor: 'blue', fontSize: 30,
    marginBottom: 5, padding: 2,
  },botoes: {
    flexDirection: 'row', borderColor: 'orange', borderWidth: 2,
    padding: 4, marginBottom: 5, justifyContent: 'center',
  }, botao: {
    backgroundColor: 'green', padding: 10, width: 50, height: 50,
     marginLeft: 20, borderRadius:20,
  }, textoBotao: {
    textAlign: 'center', fontWeight: 'bolder', fontSize: 20,    
  }, resultado: {
    fontSize: 30, borderWidth: 2, borderColor: 'red', padding: 4,
  }
});



