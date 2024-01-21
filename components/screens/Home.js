import {ImageBackground, StyleSheet, Text, View, Pressable,} from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";


export function HomeScreen({ navigation }) {
  const img = "../../assets/images/welcome_img.jpg";

  return (
    <View style={styles.container}>
      <ImageBackground source={require(img)} style={styles.image}>
        <Text style={styles.title}>MyFit</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.button}
          onPress={() => {
            navigation.navigate("Poziom trudności");
          }}
        >
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    width: 240,
    height: 85,
    backgroundColor: "#528CE5",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#2A4299",
    borderWidth: 2,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 35,
  },
  title: {
    fontSize: 80,
    color: "white",
    marginTop: 50,
  },
});