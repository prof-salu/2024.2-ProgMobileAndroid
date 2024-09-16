import {useState} from 'react';

import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView
} from 'react-native';

export default function App() {

  //Operador ternario de atribuição
  let idade = (1 > 5)? 10:2;
  console.log(idade)

  //Inicio da area JS
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [tel, setTel] = useState('');
  const [agenda, setAgenda] = useState([
    {'nome':'Juca', 'email':'juca@email.com', 'tel':'1234'},
    {'nome':'Ana', 'email':'ana@email.com', 'tel':'1234'},
    {'nome':'Mario', 'email':'mario@email.com', 'tel':'1234'},
    {'nome':'Pedro', 'email':'pedro@email.com', 'tel':'1234'},
    {'nome':'Zeca', 'email':'zeca@email.com', 'tel':'1234'},]);
 
  function gravarContato(){
    //alert('Nome: ' + nome + ', E-mail: ' + email);
    setAgenda((agenda) => [
      ...agenda, {
        nome: nome,
        email : email,
        tel: tel
      },
    ]);
  }

  function alterarContato(){
    setAgenda(agenda.map((contato) => 
      contato.email == email
      ?{...contato, nome: nome, tel: tel}
      :{...contato}
      )
    );
  }

  const buscaIndice = agenda.findIndex(
    (item) => item.email == email
  )

  function apagarContato(){
    setAgenda([
      ...agenda.slice(0, buscaIndice),
      ...agenda.slice(buscaIndice+1, agenda.length)
    ])
  }
  
  function renderItem({item}){
    return (
      <View style={styles.lista}>
        <Text style={styles.itemLista}>Nome: {item.nome}</Text>
        <Text style={styles.itemLista}>E-mail: {item.email}</Text>
        <Text style={styles.itemLista}>Tel: {item.tel}</Text>
      </View>
    );
  }

  //Fim da area JS
  return (
    <View style={styles.container}>
      <View style={styles.container_input}>
        <Text style={styles.titulo}>Agenda FlatList</Text>

        <TextInput
          style={styles.entrada}
          placeholder="E-mail"
          keyboardType="email-address" 
          value={email}
          onChangeText={setEmail}/>

        <TextInput 
          style={styles.entrada} 
          placeholder="Nome" 
          value = {nome}
          onChangeText={setNome}/>

        <TextInput
          style={styles.entrada}
          placeholder="Tel"
          keyboardType="phone-pad" 
          value={tel}
          onChangeText={setTel} /> 

        <TouchableOpacity style={styles.botao} onPress={gravarContato}>
          <Text>Gravar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao}
         onPress={alterarContato}>
          <Text>Alterar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao}
          onPress={apagarContato}>
          <Text>Apagar</Text>
        </TouchableOpacity>
      </View> 
        <ScrollView>
          <FlatList  
            data={agenda}
            renderItem={renderItem} 
            showVerticalScrollIndicator={true}/> 
        </ScrollView>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 5,
  },
  container_input: {
    marginTop: 20,
  },
  titulo: {
    fontSize: 24,
    textAlign: 'center',
    padding: 4,
    backgroundColor: 'blue',
    fontWeight: 'bolder',
    marginVertical: 10,
    color: 'white',
  },
  entrada: {
    textAlign: 'center', //Centraliza o texto
    borderWidth: 2, //Largura da borda (adiciona) ao componente
    marginBottom: 5, //Margem inferior
    fontSize: 30, //Tamanho da fonte
  },
  botao: {
    alignItems: 'center', // Centraliza o componente
    backgroundColor: 'orange', //Cor de fundo
    padding: 10, //Margem interna
    marginBottom: 5,
    borderRadius: 20, //Arredonda a borda do botao
    fontSize: 20,
  }, itemLista: {
    marginBottom: 1,
    padding: 2,
    color: 'purple',
    fontSize: 10,
  }, lista: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 4,
    marginVertical: 5,
  }
});
