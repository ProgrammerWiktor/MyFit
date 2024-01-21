import { StyleSheet, View, Text, Image } from "react-native";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";


export function ExerciseDescription({ route }) {
  const { exercise } = route.params;
  
  const [item, setItem] = useState({
    name: "",
    image: null,
    description: ''
  });


  useEffect(() => {
    switch (exercise.name) {
      case "Pajacyki":
        setItem({
          name: exercise.name,
          image: require("./../../assets/images/pajacyki.png"),
          description: exercise.description
        });
        break;
      case "Brzuszki":
        setItem({
          name: exercise.name,
          image: require("./../../assets/images/exersice_8.gif"),
          description: exercise.description
        });
        break;
      case "Mountain Climber":
        setItem({
          name: exercise.name,
          image: require("./../../assets/images/mountain_climber.png"),
          description: exercise.description
        });
        break;
      case "Podnoszenie nóg":
        setItem({
          name: exercise.name,
          image: require("./../../assets/images/exersice_5.gif"),
          description: exercise.description
        });
        break;
      case "Pompki":
        setItem({
          name: exercise.name,
          image: require("./../../assets/images/pompki.jpg"),
          description: exercise.description
        });
        break;
      case "Triceps":
        setItem({
          name: exercise.name,
          image: require("./../../assets/images/exersice_3.gif"),
          description: exercise.description
        });
        break;
      case "Pompki na podwyższeniu":
        setItem({
          name: exercise.name,
          image: require("./../../assets/images/pompki_na_podwyzszeniu.jpg"),
          description: exercise.description
        });
        break;
      case "Przysiady":
        setItem({
          name: exercise.name,
          image: require("./../../assets/images/przysiady.jpg"),
          description: exercise.description
        });
        break;
      case "Wypad w tył":
        setItem({
          name: exercise.name,
          image: require("./../../assets/images/wypad_w_tyl.jpg"),
          description: exercise.description
        });
        break;
      case "Przyciąganie kolan":
        setItem({
          name: exercise.name,
          image: require("./../../assets/images/przyciaganie_kolan.jpg"),
          description: exercise.description
        });
        break;
      case "Unoszenie ramion":
        setItem({
          name: exercise.name,
          image: require("./../../assets/images/unoszenie_ramion.jpg"),
          description: exercise.description
        });
        break;
      case "Hip hinge":
        setItem({
          name: exercise.name,
          image: require("./../../assets/images/hip_hinge.jpg"),
          description: exercise.description
        });
        break;
      case "Ćwiczenia ciosów":
        setItem({
          name: exercise.name,
          image: require("./../../assets/images/cwiczenie_ciosow.jpg"),
          description: exercise.description
        });
        break;
      case "Wstawanie z podporu":
        setItem({
          name: exercise.name,
          image: require("./../../assets/images/wstawanie_z_podporu.jpg"),
          description: exercise.description
        });
        break;
      

      default:
        setItem({
          name: exercise.name,
          image: require("./../../assets/images/klatka_piersiowa.jpg"),
          description: exercise.description
        });
        break;
    }
  }, []);


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.exerciseName}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#323232",
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  image: {
    width: 280,
    height: 280,
    borderRadius: 10,
    marginBottom: 20
  },
  exerciseName: {
    fontSize: 40,
    color: 'white',
    marginBottom: 20,
    textAlign: 'center'
  },
  description: {
    fontSize: 18,
    color: 'white',
    width: '90%'
  },
});