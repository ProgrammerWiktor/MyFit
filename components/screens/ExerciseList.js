import { StyleSheet, View, ScrollView } from "react-native";
import React from 'react';
import { ExerciseItem } from "../partials/ExerciseItem";
import { StartExercisesButton } from "../partials/StartExercisesButton";


export function ExerciseList({ navigation, route }) {
  const { title, muscleGroup, difficulty } = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
    });
  }, [navigation, title]);

  return (
    <>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.container}>
          {muscleGroup.exercises.map((item) => (
            <ExerciseItem
              data={item}
              key={item.key}
              onPressHandler={() => {
                navigation.navigate("Opis ćwiczenia", { exercise: item });
              }}
            />
          ))}
        </View>
      </ScrollView>
      <StartExercisesButton text="Zacznij ćwiczyć" onPressHandler={() => {
        navigation.navigate('Aktualne ćwiczenie', { exercises: muscleGroup.exercises, difficulty: difficulty });
      }}/>
    </>
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