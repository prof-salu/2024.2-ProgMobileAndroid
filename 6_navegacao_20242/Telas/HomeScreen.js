import {Text, View, StyleSheet} from 'react-native';

export default function HomeScreen(){

  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Home</Text>

      <Text style={styles.texto}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit et orci pellentesque eleifend eu ac felis. Nam lectus ante, dignissim et tellus quis, tempor consectetur felis. Curabitur nunc justo, tristique et neque in, consectetur sodales nibh. Nam urna libero, suscipit eget vulputate nec, sagittis nec purus. Nam a malesuada erat, et mollis tellus. Quisque vel posuere enim, eu vehicula felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis ultrices quam.</Text>
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