import HomeScreen from '../Telas/HomeScreen';
import ContatoScreen from '../Telas/ContatoScreen';
import AtividadesScreen from '../Telas/AtividadesScreen';
import SobreScreen from '../Telas/SobreScreen';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

export default function MenuLateral(){
  const Drawer = createDrawerNavigator();

  return(
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Home' component={HomeScreen} />
        <Drawer.Screen name='Atividades' component={AtividadesScreen} />
        <Drawer.Screen name='Contato' component={ContatoScreen} />
        <Drawer.Screen name='Sobre' component={SobreScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )    
}