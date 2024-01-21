import { StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


export function Button({ text, onPressHandle }) {
  return (
    <TouchableOpacity
        activeOpacity={0.7}
        style={styles.container}
        onPress={onPressHandle}
    >
      <Text style={styles.buttonText}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  container: {
    width: 215,
    height: 74,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#528CE5",
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#2A4299",
  },
  buttonText: {
    fontSize: 28,
  },
});