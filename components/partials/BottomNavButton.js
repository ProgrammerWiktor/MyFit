import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

export function BottomNavButton({ text, props }) {
  return (
    <TouchableOpacity {...props}>
      <View style={styles.bottomTabButton}>
        <Text style={styles.bottomTabButtonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  bottomTabButton: {
    width: 135,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#535353",
    borderRadius: 10,
  },
  bottomTabButtonText: {
    fontSize: 20,
    color: "white",
  },
});
