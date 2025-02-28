import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export function Likes() {
  const [likes, setlikes] = useState(0);
  const [deslikes, setDeslikes] = useState(0);

  return (
    <View>
      <Text>Likes: {likes} </Text>
      <TouchableOpacity onPress={() => setlikes(likes + 1)}>
        <Text>Curtir 👍</Text>
      </TouchableOpacity>

      <Text>Descurtir: {deslikes} </Text>
      <TouchableOpacity onPress={() => setlikes(deslikes + 1)}>
        <Text>Descurtir 👍</Text>
      </TouchableOpacity>
    </View>
  );
}
