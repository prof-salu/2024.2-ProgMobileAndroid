import {Text, View, StyleSheet} from 'react-native';

export default function ContatoScreen(){

  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Contato</Text>

      <Text style={styles.texto}>Phasellus risus sem, congue eu mi sit amet, tristique mollis erat. Nullam sed est ornare, egestas augue ac, commodo sapien. Nam convallis gravida felis ac lobortis. Maecenas tempus dapibus mi, eu ultrices lorem interdum ac. Cras a tellus a tellus posuere dictum. Proin ac venenatis tellus. Praesent tempor mattis sem id interdum. Ut eleifend libero in erat fringilla, a vestibulum purus volutpat.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  }, titulo: {
    fontSize: 40,
    fontWeight: ' bolder',
    textAlign: 'center',
    marginBottom: 5,
    padding: 4,
  }, texto:{
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 5,
    padding: 2,
  },
})