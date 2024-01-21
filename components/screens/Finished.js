import { StyleSheet, View, Text, Image } from "react-native";
import { Button } from "./../partials/Button";


export function Finished({ navigation, route }) {
  const { difficulty } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={require("./../../assets/images/gratulacje.png")}
        style={styles.image}
      />
      <Text style={styles.gratulations}>Gratulacje</Text>
      <Text style={styles.info}>Trening został zakończony</Text>
      <Button
        text="Wróć"
        onPressHandle={() => {
          navigation.navigate("Lista ćwiczeń", { difficulty: difficulty });
        }}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#323232",
    alignItems: "center",
    justifyContent: "center",
  },
  gratulations: {
    fontSize: 40,
    color: "white",
    marginBottom: 30,
  },
  info: {
    fontSize: 28,
    color: "white",
    marginBottom: 80,
  },
  image: {
    width: 260,
    height: 260,
    marginBottom: 10,
  },
});