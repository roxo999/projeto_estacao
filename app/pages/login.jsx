import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";

export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  function entrar() {
    if (usuario === "" || senha === "") {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    navigation.replace("Principal");
  }

  return (
    <View style={estilos.container}>
      <View style={estilos.card}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/1163/1163661.png",
          }}
          style={estilos.imagem}
        />

        <Text style={estilos.titulo}>☁️ MeteoStation</Text>

        <Text style={estilos.subtitulo}>
          Monitore as condições climáticas em tempo real
        </Text>

        <TextInput
          style={estilos.input}
          placeholder="Usuário ou E-mail"
          placeholderTextColor="#999"
          value={usuario}
          onChangeText={setUsuario}
        />

        <TextInput
          style={estilos.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity style={estilos.botao} onPress={entrar}>
          <Text style={estilos.textoBotao}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
          <Text style={estilos.criarConta}>
            Criar conta
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4A90E2",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  card: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    padding: 25,
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },

  imagem: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 15,
  },

  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1E3A5F",
    textAlign: "center",
    marginBottom: 10,
  },

  subtitulo: {
    fontSize: 15,
    color: "#666",
    textAlign: "center",
    marginBottom: 25,
  },

  input: {
    width: "100%",
    height: 55,
    backgroundColor: "#F5F7FA",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#D6E4F0",
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },

  botao: {
    width: "100%",
    height: 55,
    backgroundColor: "#2196F3",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    elevation: 3,
  },

  textoBotao: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  criarConta: {
    textAlign: "center",
    marginTop: 20,
    color: "#2196F3",
    fontSize: 15,
    fontWeight: "600",
  },
});