import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function Relatorio() {

  const medicoes = [
    {
      id: '1',
      temperatura: '28°C',
      humidade: '65%',
      vento: '12 km/h'
    },
    {
      id: '2',
      temperatura: '30°C',
      humidade: '58%',
      vento: '15 km/h'
    },
    {
      id: '3',
      temperatura: '25°C',
      humidade: '72%',
      vento: '8 km/h'
    }
  ];

  return (
    <View style={styles.container}>

      <Image
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/1779/1779940.png'
        }}
        style={styles.imagem}
      />

      <Text style={styles.titulo}>Relatório de Medições</Text>

      <FlatList
        data={medicoes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.texto}>
              🌡️ Temperatura: {item.temperatura}
            </Text>

            <Text style={styles.texto}>
              💧 Humidade: {item.humidade}
            </Text>

            <Text style={styles.texto}>
              💨 Velocidade do Vento: {item.vento}
            </Text>

            <TouchableOpacity style={styles.botao}>
              <Text style={styles.textoBotao}>Detalhes</Text>
            </TouchableOpacity>
          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF6FF',
    padding: 20,
  },

  imagem: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 10,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0A4D68',
    textAlign: 'center',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 4,
  },

  texto: {
    fontSize: 18,
    marginBottom: 5,
    color: '#333',
  },

  botao: {
    backgroundColor: '#0A4D68',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
  },

  textoBotao: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});