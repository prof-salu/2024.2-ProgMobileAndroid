import {Text, View, StyleSheet} from 'react-native';

export default function SobreScreen(){

  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Sobre</Text>

      <Text style={styles.texto}>Nulla eget mi neque. Nunc ut pharetra sapien, nec ultricies est. Donec ac vehicula eros. Nulla tortor lorem, gravida ac quam ac, sagittis mattis sapien. In in nulla porta tellus elementum maximus. Nullam tempus sollicitudin magna, quis egestas nisl luctus in. Aenean et eleifend est, ac cursus sapien. Duis tincidunt ligula id sem tristique, tincidunt ultrices lorem dignissim. Cras vehicula mi at rutrum tempus. Aenean eu quam neque. Cras mi felis, pretium nec nisi et, volutpat dictum sem. Vivamus aliquam tellus dui, quis molestie libero euismod a. Curabitur iaculis quam a nibh dictum pellentesque. Nulla eu aliquet lorem, quis viverra lectus. Maecenas id nulla quis odio posuere convallis in ut eros.</Text>
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