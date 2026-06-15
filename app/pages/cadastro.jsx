import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function Cadastro() {
  const [temp, setTemp] = useState('');
  const [hum, setHum] = useState('');
  const [vento, setVento] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>🌦️ Cadastro de Medição</Text>

      <Text style={styles.label}>🌡️ Temperatura</Text>
      <TextInput
        style={styles.input}
        placeholder="0°C"
        placeholderTextColor="#8aa0b8"
        value={temp}
        onChangeText={setTemp}
      />

      <Text style={styles.label}>💧 Umidade</Text>
      <TextInput
        style={styles.input}
        placeholder="0%"
        placeholderTextColor="#8aa0b8"
        value={hum}
        onChangeText={setHum}
      />

      <Text style={styles.label}>💨 Velocidade do Vento</Text>
      <TextInput
        style={styles.input}
        placeholder="0 km/h"
        placeholderTextColor="#8aa0b8"
        value={vento}
        onChangeText={setVento}
      />

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}>Salvar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#EAF6FF',
    padding: 25,
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0A4D68',
    marginBottom: 35,
  },

  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1B4965',
    marginBottom: 8,
    marginTop: 12,
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#5DADE2',
    borderRadius: 15,
    padding: 15,
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
    elevation: 3,
  },

  botao: {
    backgroundColor: '#0A4D68',
    padding: 16,
    borderRadius: 15,
    marginTop: 30,
    alignItems: 'center',
    elevation: 5,
  },

  textoBotao: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});