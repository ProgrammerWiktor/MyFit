import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "react-native-gesture-handler";
import { StyleSheet } from "react-native";

import { BottomNavButton } from "./components/partials/BottomNavButton";
import { DrawerNav } from "./navigations/DrawerNav";
import { StackNav } from "./navigations/StackNav";


const BottomTabs = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <BottomTabs.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: { ...styles.tabBarStyle },
          }}
        >
          <BottomTabs.Screen
            name="Cwiczenia"
            component={StackNav}
            options={{
              tabBarButton: (props) => (
                <BottomNavButton text="Ćwiczenia" props={props} />
              ),
            }}
          />
          <BottomTabs.Screen
            name="Więcej"
            component={DrawerNav}
            options={{
              tabBarButton: (props) => (
                <BottomNavButton text="Więcej" props={props} />
              ),
            }}
          />
        </BottomTabs.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 74,
    backgroundColor: "#3F3F3F",
    paddingBottom: 10,
  },
});