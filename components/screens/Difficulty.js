import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { Button } from "../partials/Button";


export function Difficulty({ navigation }) {
  const hantle = require("./../../assets/images/hantle.png");

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image source={hantle} style={styles.hantleImage} />
        <Button
          text="Łatwy"
          onPressHandle={() => {
            navigation.navigate("Lista ćwiczeń", { difficulty: "latwy" });
          }}
        />
        <Button
          text="Średni"
          onPressHandle={() => {
            navigation.navigate("Lista ćwiczeń", { difficulty: "sredni" });
          }}
        />
        <Button
          text="Trudny"
          onPressHandle={() => {
            navigation.navigate("Lista ćwiczeń", { difficulty: "trudny" });
          }}
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#323232",
    justifyContent: "center",
    alignItems: "center",
  },
  hantleImage: {
    width: 230,
    height: 120,
    marginBottom: 30,
  },
  wrapper: {
    height: "65%",
    justifyContent: "space-between",
    alignItems: "center",
  }
});