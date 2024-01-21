import { StyleSheet, View, Text } from "react-native";
import { useState, useEffect } from "react";
import { Pedometer } from "expo-sensors";

export function PedometerScreen() {
  const [steps, setSteps] = useState(0);

  const subscribe = async () => {
    const isAvailable = await Pedometer.isAvailableAsync();

    if (isAvailable && Platform.OS === 'IOS') {
      const end = new Date();
      const start = new Date();
      start.setDate(end.getDate() - 1);

      const pastStepCountResult = await Pedometer.getStepCountAsync(start, end);
      if (pastStepCountResult) {
        setPastStepCount(pastStepCountResult.steps);
      }

      return Pedometer.watchStepCount(result => {
        setSteps(result.steps);
      });
    }
  };

  useEffect(() => {
    const subscription = subscribe();
    return () => subscription && subscription.remove();
  }, []);

  const generateStepsText = () => {
    if (steps === 1) {
      return String(steps + " krok");
    } else if (steps >= 2 && steps <= 4) {
      return String(steps + " kroki");
    } else {
      return String(steps + " kroków");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Wykonano</Text>
      <Text style={styles.text}>{generateStepsText()}</Text>
      <Text style={styles.text}>Kroków</Text>
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
  text: {
    fontSize: 40,
    color: "white",
    marginBottom: 40,
  },
});