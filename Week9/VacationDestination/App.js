import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Importing screen components
import HomeScreen from "./screens/HomeScreen";
import DestinationsOverviewScreen from "./screens/DestinationsOverviewScreen";

// Importing custom colors from the constants file
import Colors from "./constants/colors";

// Creating a stack navigator
const Stack = createNativeStackNavigator();

// Main application component
export default function App() {
  // Load the custom font
  const [fontsLoaded, fontError] = useFonts({
    ojuLight: require("./assets/fonts/Ojuju-Light.ttf"),
    ojuMedium: require("./assets/fonts/Ojuju-Medium.ttf"),
    ojuRegular: require("./assets/fonts/Ojuju-Regular.ttf"),
    ojuBold: require("./assets/fonts/Ojuju-Bold.ttf"),
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
        {/* Navigation container for managing navigation state */}
        <NavigationContainer>
          {/* Stack navigator for managing the navigation stack */}
          <Stack.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
              headerStyle: { backgroundColor: Colors.primary500 },
              headerTintColor: Colors.primary300,
              headerTitleStyle: { fontFamily: "ojuBold", fontSize: 35 },
              contentStyle: { backgroundColor: Colors.primary800 },
            }}
          >
            {/* Screen for the home screen component */}
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                title: "Vacation Destinations",
              }}
            />
            {/* Screen for the destinations overview component */}
            <Stack.Screen
              name="DestinationsOverviewScreen"
              component={DestinationsOverviewScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

// StyleSheet for styling the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
