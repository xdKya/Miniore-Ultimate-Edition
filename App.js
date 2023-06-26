import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./Screens/Home";
import ISSLocationScreen from "./Screens/ISS";
import MeteorScreen from "./Screens/Meteor";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ISSLocation" component={ISSLocationScreen} />
        <Stack.Screen name="Meteors" component={MeteorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
