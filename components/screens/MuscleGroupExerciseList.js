import { StyleSheet, View } from "react-native";
import { useEffect, useState } from 'react';
import axios from "axios";
import { ExerciseItem } from "../partials/ExerciseItem";
import { ScrollView } from "react-native-gesture-handler";
// import { ExerciseData } from './../../ExerciseData';


export function MuscleGroupExerciseList({ navigation, route }) {
  const [data, setData] = useState([]);
  const { difficulty } = route.params;

  useEffect(() => {
    // setData(ExerciseData);
    axios.get("https://myfit-8ce9a-default-rtdb.europe-west1.firebasedatabase.app/ExerciseData.json").then(res => (
      setData(res.data)
    ));
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.container}>
            {data.map(item => (
              <ExerciseItem data={item} key={item.key} onPressHandler={() => {
                navigation.navigate('Ćwiczenia', { title: item.name, muscleGroup: item, difficulty: difficulty });
              }}/>
            ))}
        </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#323232",
    alignItems: 'center',
    paddingTop: 20
  },
  scroll: {
    flexGrow: 1
  }
});