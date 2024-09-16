import {Text, View, StyleSheet} from 'react-native';

export default function AtividadeScreen(){

  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Atividades</Text>

      <Text style={styles.texto}>Integer urna ante, finibus in risus quis, mollis fringilla mauris. Phasellus tempus metus sed arcu interdum, eu accumsan mauris varius. Aenean in egestas ante. Phasellus maximus lacus et ipsum placerat, non sollicitudin nisl vehicula. Nullam condimentum justo eget metus cursus dapibus. Aenean euismod, sapien convallis sollicitudin convallis, nibh nunc hendrerit nulla, quis dictum ipsum purus vitae nisi. Donec vulputate facilisis quam suscipit iaculis. Cras consequat bibendum massa. Suspendisse suscipit felis elit, eu posuere arcu ultricies sed. Mauris quis rhoncus massa.
</Text>
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