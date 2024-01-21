import { StyleSheet, View, Text } from "react-native";
import { Button } from "./../partials/Button";
import { useEffect, useState } from "react";


export function Timer({ navigation }) {
  const [secondsLeft, setSecondsLeft] = useState(60);
  const [timerExpired, setTimerExpired] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prevSeconds) => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else {
          setTimerExpired(true);
          clearInterval(interval);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const progress = secondsLeft / 60;

  const generateSecondsLeftText = () => {
    if (secondsLeft === 1) {
      return String(secondsLeft + " sekunda");
    } else if (secondsLeft >= 2 && secondsLeft <= 4) {
      return String(secondsLeft + " sekundy");
    } else {
      return String(secondsLeft + " sekund");
    }
  };

  const getProgressBarColor = () => {
    if (progress < 0.2) {
      return String("#ff0000");
    } else if (progress >= 0.2 && progress <= 0.5) {
      return String("#e8db2a");
    } else {
      return String("#35c43b");
    }
  };

  useEffect(() => {
    if (timerExpired) {
      navigation.goBack();
    }
  }, [timerExpired, navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pozostało</Text>
      <View style={styles.progressBox}>
        <View
          style={[
            styles.progressBar,
            {
              width: `${progress * 100}%`,
              backgroundColor: getProgressBarColor(),
            },
          ]}
        ></View>
      </View>
      <Text style={styles.remaining}>{generateSecondsLeftText()}</Text>
      <Button
        text="Wróć"
        onPressHandle={() => {
          navigation.goBack();
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
  title: {
    fontSize: 40,
    color: "white",
    marginBottom: 60,
  },
  remaining: {
    fontSize: 40,
    color: "white",
    marginTop: 60,
    marginBottom: 100,
  },
  progressBox: {
    backgroundColor: "white",
    width: "90%",
    height: 20,
    borderRadius: 10,
  },
  progressBar: {
    height: 20,
    borderRadius: 10,
  },
});