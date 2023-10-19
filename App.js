import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <View style = {styles.header}>
      <Text style = { styles.textHeader}>LISTAS</Text>
    </View>

      <View style={[styles.article,{backgroundColor:'#fba2a4'}]}>
        <Text style ={[styles.animals,{color: '#c11824',fontSize: 20}]}>
          Animais
        </Text>
      </View>

      <View style={[styles.article,{backgroundColor:'#eba3fe'}]}>
        <Text style={[styles.car,{color: '#7421c5',fontSize: 20,}]}>
          Carros
        </Text>
      </View>

      <View style={[styles.article,{backgroundColor:'#a8d5ff'}]}>
        <Text style={[styles.fish,{color: '#3278c5',fontSize: 20,}]}>
          Peixes
        </Text>
      </View>

      <View style={[styles.article,{backgroundColor:'#a9ffc3'}]}>
        <Text style={[styles.team,{color: '#35c748',fontSize: 20,}]}>
          Times 
        </Text>
      </View>

      <View style={[styles.article,{backgroundColor:'#d1d6d3'}]}>
        <Text style={[styles.film,{color: '#434944',fontSize: 20,}]}>
          Filmes
        </Text>
      </View>

      <View style={[styles.article,{backgroundColor:'#e8efbe'}]}> 
        <Text style={[styles.language,{color: '#737d14',fontSize: 20,}]}>
          Linguagens
        </Text>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    },

  header:{
    backgroundColor: '#299F91',
    padding: 10,
    paddingTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: '10%',
  },

  textHeader:{
    color: '#fff',
    fontSize: 25,
    letterSpacing: 1.5,
    fontWeight: '800',
  },

  article:{
    paddingVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    margin: 10,
  },
});
