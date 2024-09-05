//import de bibliotecas
import { Text, SafeAreaView, StyleSheet } from 'react-native';

//Função da principal
export default function App() {

  //Area de código js
  function saudacao(){
    console.log('Saudação js!');
  }

  var outra_saudacao = function(){
    console.log('Outra saudação JS!')
  }

  var mais_uma_saudacao = () => {console.log('Mais uma saudação JS!');} 

  //Executando a funcção saudacao
  saudacao() 
  outra_saudacao()
  mais_uma_saudacao() 

  return (
    <SafeAreaView>
          <Text style={estilos.meuTexto}>Olá mundo!</Text>
          {/*comentario dentro do jsx*/}
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  meuTexto: {
    fontSize: 20,
    color: 'red'
  }
})