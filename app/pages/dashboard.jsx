import { ScrollView, View, Text, StyleSheet, Dimensions } from "react-native";
import { LineChart, PieChart } from "react-native-chart-kit";

const { width } = Dimensions.get('window');

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
  useShadowColorFromDataset: false 
};

const larguraTela = Dimensions.get("window").width;
const larguraGrafico = larguraTela - 70;

export default function Dashboard() {
  const dadosGraficoLinha = {
    labels: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    datasets: [
      {
        data: [3, 5, 7, 11, 13, 15, 18, 20, 22, 25, 30, 35],
      },
    ],
    legend: ["Medições"],
  };

  const dadosGraficoPizza = [
    {
      name: "Airport",
      temp: 45,
      color: "#135a4e",
      legendFontColor: "#333",
      legendFontSize: 12,
    },
    {
      name: "Centro",
      temp: 17,
      color: "#396fc0",
      legendFontColor: "#333",
      legendFontSize: 12,
    },
    {
      name: "Esplanada",
      temp: 27,
      color: "#3947c0",
      legendFontColor: "#333",
      legendFontSize: 12,
    },
  ];

  const chartConfig = {
    backgroundColor: "#1976D2",
    backgroundGradientFrom: "#1976D2",
    backgroundGradientTo: "#42A5F5",
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(255,255,255,${opacity})`,
    labelColor: (opacity = 1) => `rgba(255,255,255,${opacity})`,
    propsForDots: {
      r: "5",
      strokeWidth: "2",
      stroke: "#FFF",
    },
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>🌦 Clima em tempo real</Text>

      {/* Cards de Resumo */}
      <View style={styles.resumoContainer}>
        <View style={styles.resumoCard}>
          <Text style={styles.resumoNumero}>35°C</Text>
          <Text style={styles.resumoTexto}>Máxima</Text>
        </View>

        <View style={styles.resumoCard}>
          <Text style={styles.resumoNumero}>17°C</Text>
          <Text style={styles.resumoTexto}>Mínima</Text>
        </View>

        <View style={styles.resumoCard}>
          <Text style={styles.resumoNumero}>27°C</Text>
          <Text style={styles.resumoTexto}>Média</Text>
        </View>
      </View>

      {/* Gráfico Linha */}
      <View style={styles.card}>
        <Text style={styles.subtitulo}>📈 Medições Mensais</Text>

        <LineChart
          data={dadosGraficoLinha}
          width={larguraGrafico}
          height={220}
          chartConfig={chartConfig}
          bezier
          style={styles.grafico}
        />
      </View>

      {/* Gráfico Pizza */}
      <View style={styles.card}>
        <Text style={styles.subtitulo}>🌡 Temperatura por Região</Text>

        <PieChart
          data={dadosGraficoPizza}
          width={larguraGrafico}
          height={220}
          chartConfig={chartConfig}
          accessor="temp"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F1F5F9",
    paddingHorizontal: 12,
    paddingVertical: 20,
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1565C0",
    marginBottom: 25,
  },

  resumoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  resumoCard: {
    width: "31%",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    paddingVertical: 18,
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    elevation: 4,
  },

  resumoNumero: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1976D2",
  },

  resumoTexto: {
    fontSize: 13,
    color: "#666",
    marginTop: 5,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 15,
    marginBottom: 25,

    borderLeftWidth: 5,
    borderLeftColor: "#1976D2",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,

    elevation: 5,

    overflow: "hidden",
  },

  subtitulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1565C0",
    textAlign: "center",
    marginBottom: 15,
  },

  grafico: {
    borderRadius: 16,
    alignSelf: "center",
  },
});
