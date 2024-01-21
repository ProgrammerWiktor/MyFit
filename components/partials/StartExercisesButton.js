import { StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";


const { width, height } = Dimensions.get('window');

export function StartExercisesButton({ text, onPressHandler }) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={onPressHandler}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#528CE5",
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#2A4299",
    position: 'absolute',
    left: (width / 2) - 100,
    top: height - (height * 0.24)
  },
  buttonText: {
    fontSize: 20,
  },
});