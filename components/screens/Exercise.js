import { StyleSheet, View, Text, Image } from "react-native";
import { useEffect, useState } from "react";
import { Button } from "./../partials/Button";


export function Exercise({ navigation, route }) {
  const { exercises, difficulty } = route.params;

  const [numberOfCurrentExercise, setNumberOfCurrentExercise] = useState(0);

  const [item, setItems] = useState({
    name: "",
    image: null,
    repetitionsOnEasy: 0,
    repetitionsOnMedium: 0,
    repetitionsOnHard: 0,
  });

  useEffect(() => {
    switch (exercises[numberOfCurrentExercise].name) {
      case "Pajacyki":
        setItems({
          name: exercises[numberOfCurrentExercise].name,
          image: require("./../../assets/images/pajacyki.png"),
          repetitionsOnEasy:
            exercises[numberOfCurrentExercise].repetitionsOnEasy,
          repetitionsOnMedium:
            exercises[numberOfCurrentExercise].repetitionsOnMedium,
          repetitionsOnHard:
            exercises[numberOfCurrentExercise].repetitionsOnHard,
        });
        break;
      case "Brzuszki":
        setItems({
          name: exercises[numberOfCurrentExercise].name,
          image: require("./../../assets/images/exersice_8.gif"),
          repetitionsOnEasy:
            exercises[numberOfCurrentExercise].repetitionsOnEasy,
          repetitionsOnMedium:
            exercises[numberOfCurrentExercise].repetitionsOnMedium,
          repetitionsOnHard:
            exercises[numberOfCurrentExercise].repetitionsOnHard,
        });
        break;
      case "Mountain Climber":
        setItems({
          name: exercises[numberOfCurrentExercise].name,
          image: require("./../../assets/images/mountain_climber.png"),
          repetitionsOnEasy:
            exercises[numberOfCurrentExercise].repetitionsOnEasy,
          repetitionsOnMedium:
            exercises[numberOfCurrentExercise].repetitionsOnMedium,
          repetitionsOnHard:
            exercises[numberOfCurrentExercise].repetitionsOnHard,
        });
        break;
      case "Podnoszenie nóg":
        setItems({
          name: exercises[numberOfCurrentExercise].name,
          image: require("./../../assets/images/podnoszenie_nog.jpg"),
          repetitionsOnEasy:
            exercises[numberOfCurrentExercise].repetitionsOnEasy,
          repetitionsOnMedium:
            exercises[numberOfCurrentExercise].repetitionsOnMedium,
          repetitionsOnHard:
            exercises[numberOfCurrentExercise].repetitionsOnHard,
        });
        break;
      case "Pompki":
        setItems({
          name: exercises[numberOfCurrentExercise].name,
          image: require("./../../assets/images/pompki.jpg"),
          repetitionsOnEasy:
            exercises[numberOfCurrentExercise].repetitionsOnEasy,
          repetitionsOnMedium:
            exercises[numberOfCurrentExercise].repetitionsOnMedium,
          repetitionsOnHard:
            exercises[numberOfCurrentExercise].repetitionsOnHard,
        });
        break;
      case "Triceps":
        setItems({
          name: exercises[numberOfCurrentExercise].name,
          image: require("./../../assets/images/exersice_3.gif"),
          repetitionsOnEasy:
            exercises[numberOfCurrentExercise].repetitionsOnEasy,
          repetitionsOnMedium:
            exercises[numberOfCurrentExercise].repetitionsOnMedium,
          repetitionsOnHard:
            exercises[numberOfCurrentExercise].repetitionsOnHard,
        });
        break;
      case "Pompki na podwyższeniu":
        setItems({
          name: exercises[numberOfCurrentExercise].name,
          image: require("./../../assets/images/pompki_na_podwyzszeniu.jpg"),
          repetitionsOnEasy:
            exercises[numberOfCurrentExercise].repetitionsOnEasy,
          repetitionsOnMedium:
            exercises[numberOfCurrentExercise].repetitionsOnMedium,
          repetitionsOnHard:
            exercises[numberOfCurrentExercise].repetitionsOnHard,
        });
        break;
      case "Przysiady":
        setItems({
          name: exercises[numberOfCurrentExercise].name,
          image: require("./../../assets/images/przysiady.jpg"),
          repetitionsOnEasy:
            exercises[numberOfCurrentExercise].repetitionsOnEasy,
          repetitionsOnMedium:
            exercises[numberOfCurrentExercise].repetitionsOnMedium,
          repetitionsOnHard:
            exercises[numberOfCurrentExercise].repetitionsOnHard,
        });
        break;
      case "Wypad w tył":
        setItems({
          name: exercises[numberOfCurrentExercise].name,
          image: require("./../../assets/images/wypad_w_tyl.jpg"),
          repetitionsOnEasy:
            exercises[numberOfCurrentExercise].repetitionsOnEasy,
          repetitionsOnMedium:
            exercises[numberOfCurrentExercise].repetitionsOnMedium,
          repetitionsOnHard:
            exercises[numberOfCurrentExercise].repetitionsOnHard,
        });
        break;
      case "Przyciąganie kolan":
        setItems({
          name: exercises[numberOfCurrentExercise].name,
          image: require("./../../assets/images/przyciaganie_kolan.jpg"),
          repetitionsOnEasy:
            exercises[numberOfCurrentExercise].repetitionsOnEasy,
          repetitionsOnMedium:
            exercises[numberOfCurrentExercise].repetitionsOnMedium,
          repetitionsOnHard:
            exercises[numberOfCurrentExercise].repetitionsOnHard,
        });
        break;
      case "Unoszenie ramion":
        setItems({
          name: exercises[numberOfCurrentExercise].name,
          image: require("./../../assets/images/unoszenie_ramion.jpg"),
          repetitionsOnEasy:
            exercises[numberOfCurrentExercise].repetitionsOnEasy,
          repetitionsOnMedium:
            exercises[numberOfCurrentExercise].repetitionsOnMedium,
          repetitionsOnHard:
            exercises[numberOfCurrentExercise].repetitionsOnHard,
        });
        break;
      case "Hip hinge":
        setItems({
          name: exercises[numberOfCurrentExercise].name,
          image: require("./../../assets/images/hip_hinge.jpg"),
          repetitionsOnEasy:
            exercises[numberOfCurrentExercise].repetitionsOnEasy,
          repetitionsOnMedium:
            exercises[numberOfCurrentExercise].repetitionsOnMedium,
          repetitionsOnHard:
            exercises[numberOfCurrentExercise].repetitionsOnHard,
        });
        break;
      case "Ćwiczenia ciosów":
        setItems({
          name: exercises[numberOfCurrentExercise].name,
          image: require("./../../assets/images/cwiczenie_ciosow.jpg"),
          repetitionsOnEasy:
            exercises[numberOfCurrentExercise].repetitionsOnEasy,
          repetitionsOnMedium:
            exercises[numberOfCurrentExercise].repetitionsOnMedium,
          repetitionsOnHard:
            exercises[numberOfCurrentExercise].repetitionsOnHard,
        });
        break;
      case "Wstawanie z podporu":
        setItems({
          name: exercises[numberOfCurrentExercise].name,
          image: require("./../../assets/images/wstawanie_z_podporu.jpg"),
          repetitionsOnEasy:
            exercises[numberOfCurrentExercise].repetitionsOnEasy,
          repetitionsOnMedium:
            exercises[numberOfCurrentExercise].repetitionsOnMedium,
          repetitionsOnHard:
            exercises[numberOfCurrentExercise].repetitionsOnHard,
        });
        break;

      default:
        setItems({
          name: exercises[numberOfCurrentExercise].name,
          image: require("./../../assets/images/exersice_8.gif"),
          repetitionsOnEasy:
            exercises[numberOfCurrentExercise].repetitionsOnEasy,
          repetitionsOnMedium:
            exercises[numberOfCurrentExercise].repetitionsOnMedium,
          repetitionsOnHard:
            exercises[numberOfCurrentExercise].repetitionsOnHard,
        });
        break;
    }
  }, [numberOfCurrentExercise]);

  const handleNextExercise = () => {
    const numberOfExercises = exercises.length;

    if (numberOfExercises - 1 <= numberOfCurrentExercise) {
      navigation.navigate('Koniec treningu', { difficulty: difficulty });
    } else {
      setNumberOfCurrentExercise((prev) => prev + 1);
    }
  };

  const generateRepetitionsText = () => {
    let numberOfRepetions;

    if (difficulty == "latwy") {
      numberOfRepetions = item.repetitionsOnEasy;
    } else if (difficulty == "sredni") {
      numberOfRepetions = item.repetitionsOnMedium;
    } else if (difficulty == "trudny") {
      numberOfRepetions = item.repetitionsOnHard;
    }

    if (numberOfRepetions == 1) {
      return String(numberOfRepetions + " powtórzenie");
    } else if (numberOfRepetions >= 2 && numberOfRepetions <= 4) {
      return String(numberOfRepetions + " powtórzenia");
    } else {
      return String(numberOfRepetions + " powtórzeń");
    }
  };

  const generateNextExerciseButtonText = () => {
    const numberOfExercises = exercises.length;

    if (numberOfExercises - 1 <= numberOfCurrentExercise) {
      return String("Gotowe");
    } else {
      return String("Następne");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image}></Image>
      <Text style={styles.exerciseName}>{item.name}</Text>
      <Text style={styles.repetitions}>{generateRepetitionsText()}</Text>
      <View style={styles.buttonBox}>
        <Button text="Odpoczynek" onPressHandle={() => {
          navigation.navigate('Odpoczynek');
        }}/>
        <Button
          text={generateNextExerciseButtonText()}
          onPressHandle={handleNextExercise}
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#323232",
    alignItems: "center",
    paddingTop: 30,
  },
  image: {
    width: 280,
    height: 280,
    borderRadius: 10,
    marginBottom: 30,
  },
  exerciseName: {
    fontSize: 30,
    color: "white",
    marginBottom: 30,
    textAlign: 'center'
  },
  repetitions: {
    fontSize: 25,
    color: "white",
    marginBottom: 40,
  },
  buttonBox: {
    height: 170,
    justifyContent: "space-between",
    alignItems: "center",
  },
});