import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import GenresScreen from "./screens/GenresScreen";
import SongsOverviewScreen from "./screens/SongsOverviewScreen";

import Colors from "./constants/colors";

// Creating a stack navigator
const Stack = createNativeStackNavigator();

export default function App() {
  // Load the custom font
  const [fontsLoaded, fontError] = useFonts({
    house: require("./assets/fonts/House Music.ttf"),
    jazz: require("./assets/fonts/Jazz Music-Italic.otf"),
    jazzBold: require("./assets/fonts/Jazz Music-Bold-Italic.otf"),
    jazzInverse: require("./assets/fonts/Jazz Music-Inverse.otf"),
  });

  // Callback function to be executed when the root view layout changes
  const onLayoutRootView = useCallback(async () => {
    // Hide the splash screen once the fonts are loaded or an error occurs
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // If fonts are not loaded and there is no font error, return null
  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    // Otherwise, return the main application structure
    return (
      <>
        <StatusBar style="light" />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="SongGenres"
            screenOptions={{
              headerStyle: { backgroundColor: Colors.primary500 },
              headerTintColor: "white",
              headerTitleStyle: {
                fontFamily: "house",
                fontSize: 40,
                color: Colors.accent800,
              },
              contentStyle: { backgroundColor: Colors.primary800 },
            }}
          >
            <Stack.Screen
              name="SongGenres"
              component={GenresScreen}
              options={{
                title: "Music Genres",
              }}
            />
            <Stack.Screen
              name="SongsOverview"
              component={SongsOverviewScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
