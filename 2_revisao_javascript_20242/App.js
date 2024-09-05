//Imports de biblioteca
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import Conta from './Conta';

//Função principal (App)
export default function App() {
  //Área JavaScript

  //Comentario de linha
  /*Comentario de bloco */
  //Variaveis
  //Constante
  const numero = 7;

  var nome = 'Juca';
  let sobrenome = 'Pereira';

  console.log(nome + ' ' + sobrenome);
  //alert(nome + ' ' + sobrenome);

  //Tipos de dados
    //String
    //Boolean
    //Number
    //undefined
    //null

    let disciplina = 'Programação mobile';
    let cargaHoraria = 80;
    let esta_aprovado = true;
    let _curso = undefined;
    let campus = null;


    //Verificando os tipos de dados
    console.log(typeof(disciplina));
    console.log(typeof(esta_aprovado));
    console.log(typeof(_curso));
    console.log(typeof(cargaHoraria));
    console.log(typeof(campus));
    campus = 123;
    console.log(typeof(campus));
    campus = 'Maracanã';
    console.log(typeof(campus));

    //Objetos
    let pessoa = {
      nome : 'João',
      sobrenome : 'Pereira',
      idade : 33,
      profissao : 'Programador',
      endereco : {
        'rua' : 'Rua ABC',
        'numero' : 333,
        'cidade' : 'RJ'}
    }

    pessoa.salario = 5000;
    pessoa['departamento'] = 'TI';

    //Arrays (listas)
    //Não tamanho fixo
    let Lista_cursos = ['Adm. Redes', 'Adm. Banco de dados', 'ADS', 'SI', 'Gestão de TI'];

    Lista_cursos[5] = pessoa;
    Lista_cursos[6] = 445556;

    //sub-rotina
      //função: possui retorno
      //procedimentos: executa uma tarefa

    function saudacao(){
      console.log('Ola');
    }

    function saudacao_com_parametro(nome){
      console.log('Olá, ' + nome)
    }

    function calcula_media(n1, n2){
      return (n1 + n2) / 2;
    }

    saudacao()
    saudacao_com_parametro(nome)
    console.log(calcula_media(5, 7))

    const quadrado = function(a, b){
      return a * b;
    }

    console.log(quadrado(3,3));

    pessoa.func1 = quadrado

    //Arrow function
    const soma_numeros = (a, b, c) => {
      return a + b + c;
    }

    let cc = new Conta('1234', '8765', 25000);
    
    cc.exibeDados();


    console.log(soma_numeros(4,5,6));
  //Área de renderização (JSX)
  return (
    <SafeAreaView style={styles.container}>
      <Text>{nome + ' ' + sobrenome}</Text>

      {/* Comentario JSX*/}
      <Text>Nome: {pessoa.nome}</Text>
      <Text>Sobrenome: {pessoa.sobrenome}</Text>
      <Text>Idade: {pessoa.idade}</Text>
      <Text>Profissao: {pessoa.profissao}</Text>
      <Text>Rua: {pessoa.endereco.rua}</Text>
      <Text>Numero: {pessoa.endereco.numero}</Text>
      <Text>Cidade: {pessoa.endereco.cidade}</Text>
      <Text>Salario: R${pessoa.salario}</Text>
      <Text>Departamento: {pessoa.departamento}</Text>
      
    </SafeAreaView>
  );
}

//Área de estilização
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
