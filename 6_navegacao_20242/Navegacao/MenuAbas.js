import HomeScreen from '../Telas/HomeScreen';
import ContatoScreen from '../Telas/ContatoScreen';
import AtividadesScreen from '../Telas/AtividadesScreen';
import SobreScreen from '../Telas/SobreScreen';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

export default function MenuAbas(){
  const Tab = createBottomTabNavigator();

  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Atividades' component={AtividadesScreen} />
        <Tab.Screen name='Contato' component={ContatoScreen} />
        <Tab.Screen name='Sobre' component={SobreScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )    
}