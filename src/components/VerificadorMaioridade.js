import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export function VerificadorMaioridade() {
  const [idade, setIdade] = useState("");

  return (
    <View style={styles.container}>
      <Text>Atividade 1, Calculadora de Maioridade</Text>
      <TextInput
        placeholder="Digite a sua idade"
        onChangeText={(pIdade) => setIdade(pIdade)}
      />

      <Button
        title="Ver se possui Maioridade"
        onPress={() => {
          if (idade < 18) {
            alert("Menor de idade");
          } else {
            alert("Vocé é maior");
          }
        }}
      />
    </View>
  );
}
