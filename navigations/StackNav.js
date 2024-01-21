import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./../components/screens/Home";
import { Difficulty } from "./../components/screens/Difficulty";
import { MuscleGroupExerciseList } from './../components/screens/MuscleGroupExerciseList';
import { ExerciseList } from "../components/screens/ExerciseList";
import { ExerciseDescription } from "../components/screens/ExerciseDescription";
import { Exercise } from "../components/screens/Exercise";
import { Finished } from "../components/screens/Finished";
import { Timer } from "../components/screens/Timer";

export function StackNav() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#3F3F3F',
      },
      headerTintColor: 'white'
    }}>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Poziom trudności" component={Difficulty} />
      <Stack.Screen name="Lista ćwiczeń" component={MuscleGroupExerciseList} />
      <Stack.Screen name="Ćwiczenia" component={ExerciseList} />
      <Stack.Screen name="Opis ćwiczenia" component={ExerciseDescription} />
      <Stack.Screen name="Aktualne ćwiczenie" component={Exercise} />
      <Stack.Screen name="Koniec treningu" component={Finished} />
      <Stack.Screen name="Odpoczynek" component={Timer} />
    </Stack.Navigator>
  );
}