import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { Button } from "react-native";

export default function CalculadoraIMC() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");

  return (
    <View style={Styles.container}>
      <Text>Atividade 2, IMC Calculadora</Text>
      <TextInput
        placeholder="Digite seu Peso em Kg"
        onChangeText={(pPeso) => setPeso(parseFloat(pPeso) || 0)}
      />
      <TextInput
        placeholder="Digite sua Altura em Centímetros"
        onChangeText={(pAltura) => setAltura(parseFloat(pAltura) || 0)}
      />
      <Button
        title="Ver IMC"
        onPress={() => {
          const pesoNum = parseFloat(peso) || 0;
          const alturaNum = parseFloat(altura) || 1;
          const IMC = pesoNum / ((alturaNum / 100) * (alturaNum / 100));

          let resultado;
          if (IMC < 18.5) resultado = "Abaixo do Peso";
          else if (IMC < 25) resultado = "Peso Normal";
          else if (IMC < 30) resultado = "Sobrepeso";
          else if (IMC < 35) resultado = "Obesidade Grau 1";
          else if (IMC < 40) resultado = "Obesidade Grau 2";
          else resultado = "Obesidade Grau 3";
          alert(resultado);
        }}
      />
    </View>
  );
}
