import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { Button } from "react-native";
import { Styles } from "./Styles";

export default function CalculatorChurras() {
  const [qntHomem, setQntHomem] = useState("");
  const [qntMulher, setQntMulher] = useState("");
  const [qntCrianca, setQntCrianca] = useState("");

  return (
    <View style={Styles.container}>
      <Text>Atividade 3, Churras Calculator</Text>
      <TextInput
        placeholder="Digite quantos homens estarão no churrasco"
        onChangeText={(pQntHomem) => setQntHomem(parseFloat(pQntHomem))}
      />
      <TextInput
        placeholder="Digite quantas mulheres estarão no churrasco"
        onChangeText={(pQntMulher) => setQntMulher(parseFloat(pQntMulher))}
      />
      <TextInput
        placeholder="Digite quantas crianças estarão no churrasco"
        onChangeText={(pQntCrianca) => setQntCrianca(parseFloat(pQntCrianca))}
      />

      <Button
        title="Calcular quantidade de carne e carvão necessário"
        onPress={() => {
          const carneHomem = (qntHomem * 400) / 1000;
          const carneMulher = (qntMulher * 300) / 1000;
          const carneCrianca = (qntCrianca * 200) / 1000;
          const totalCarne = carneCrianca + carneMulher + carneHomem;
          const totalCarvao = (totalCarne / 6) * 5;

          alert(`A quantidade total de carne necessária é: ${totalCarne} kg.
        ${carneHomem} kg é o necessário para os homens.
        ${carneMulher} kg é o necessário para as mulheres.
        ${carneCrianca} kg é o necessário para as crianças.
        
        O total de carvão necessário é ${totalCarvao} kg
        `);
        }}
      />
    </View>
  );
}
