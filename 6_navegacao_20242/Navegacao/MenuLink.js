import HomeScreen from '../Telas/HomeScreen';
import ContatoScreen from '../Telas/ContatoScreen';
import AtividadesScreen from '../Telas/AtividadesScreen';
import SobreScreen from '../Telas/SobreScreen';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {Button, View, StyleSheet} from 'react-native';

function TelaInicial({navigation}){
  return(
    <View style={styles.container}>
      <Button title='Home' onPress={() => navigation.navigate('Home')}/>
      <Button title='Ativadades' color='red' onPress={() => navigation.navigate('Atividades')}/>
      <Button title='Contato' color= 'yellow' onPress={() => navigation.navigate('Contato')}/>
      <Button title='Sobre' color='orange' onPress={() => navigation.navigate('Sobre')}/>    
    </View>
  );
}


export default function MenuLink(){
  const Stack = createStackNavigator();

  return(
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name = 'Menu principal' component={TelaInicial} />
      <Stack.Screen name = 'Home' component={HomeScreen} />
      <Stack.Screen name = 'Atividades' component={AtividadesScreen} />
      <Stack.Screen name = 'Contato' component={ContatoScreen} />
      <Stack.Screen name = 'Sobre' component={SobreScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
