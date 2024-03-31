import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import custom screens and constants
import BookmarksScreen from "./screens/BookmarksScreen";
import FashionNewsScreen from "./screens/FashionNewsScreen";
import NewsDetailScreen from "./screens/NewsDetailScreen";
import UsNewsScreen from "./screens/UsNewsScreen";
import WorldNewsScreen from "./screens/WorldNewsScreen";
import Colors from "./constants/colors";

import BookmarksContextProvider from "./store/context/bookmarks-context";

// Import icons from Expo vector icons
import {
  FontAwesome,
  Fontisto,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

// Create navigation stacks, drawer, and tabs
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

// Drawer Navigator component for main navigation
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="News"
      screenOptions={{
        // Styles for header and drawer
        headerStyle: { backgroundColor: Colors.primary500 }, // Background color of the header
        headerTintColor: "white",
        headerTitleStyle: {
          fontFamily: "newsBold",
          fontSize: 40,
          color: Colors.accent800,
        },
        sceneContainerStyle: { backgroundColor: Colors.primary300 }, // Background color of scene container
        drawerContentStyle: { backgroundColor: Colors.primary500 }, // Background color of drawer content
        drawerInactiveTintColor: Colors.primary300, // Text color of inactive drawer items
        drawerActiveTintColor: Colors.primary500, // Text color of active drawer items
        drawerActiveBackgroundColor: Colors.primary800, // Background color of active drawer item
      }}
    >
      {/* Drawer screens */}
      <Drawer.Screen
        name="news"
        component={TabsNavigator}
        options={{
          title: "All News", // Title displayed in header
          drawerLabel: "News List", // Label displayed in drawer menu
          drawerIcon: ({ color, size }) => (
            // Icon for drawer item
            <FontAwesome name="list" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="BookmarkedNews"
        component={BookmarksScreen}
        options={{
          title: "Saved News",
          drawerLabel: "Save News",
          drawerIcon: ({ color, size }) => (
            <FontAwesome name="bookmark" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

// Tab Navigator component for news categories
function TabsNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={{
        // Styles for tab bar
        tabBarShowLabel: true, // Show labels for tabs
        tabBarActiveBackgroundColor: Colors.primary800, // Background color of active tab
        tabBarActiveTintColor: Colors.accent500, // Text color of active tab
        tabBarInactiveBackgroundColor: Colors.primary500, // Background color of inactive tab
        tabBarInactiveTintColor: Colors.primary300, // Text color of inactive tab
        tabBarLabelStyle: {
          // Styles for tab label
          fontFamily: "newsMedium",
          fontSize: 14,
        },
        tabBarStyle: {
          // Styles for tab bar
          backgroundColor: Colors.primary500,
        },
      }}
    >
      {/* Tabs for different news categories */}
      <Tabs.Screen
        name="UsNews"
        component={UsNewsScreen}
        options={{
          headerShown: false, // Hide header
          tabBarIcon: ({ color, size }) => (
            // Icon for tab
            <FontAwesome name="newspaper-o" size={size} color={color} />
          ),
          tabBarLabel: "UsNews", // Label for tab
        }}
      />
      <Tabs.Screen
        name="WorldNews"
        component={WorldNewsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="world" size={size} color={color} />
          ),
          tabBarLabel: "WorldNews",
        }}
      />
      <Tabs.Screen
        name="FashionNews"
        component={FashionNewsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="dresser" size={size} color={color} />
          ),
          tabBarLabel: "FashionNews",
        }}
      />
    </Tabs.Navigator>
  );
}

// Main App component
export default function App() {
  // Load the custom font
  const [fontsLoaded, fontError] = useFonts({
    newsBold: require("./assets/fonts/NewsBoldItalic.ttf"),
    newsLight: require("./assets/fonts/NewsLightItalic.ttf"),
    newsMedium: require("./assets/fonts/NewsMediumItalic.ttf"),
    newsRegular: require("./assets/fonts/NewsRegular.ttf"),
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
        <BookmarksContextProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="DrawerScreen"
              screenOptions={{
                // Styles for navigation header
                headerTintColor: Colors.primary300, // Text color of header
                headerStyle: { backgroundColor: Colors.primary500 }, // Background color of header
                contentStyle: { backgroundColor: "gray" }, // Background color of content
              }}
            >
              {/* Stack screens */}
              <Stack.Screen
                name="DrawerScreen"
                component={DrawerNavigator}
                options={{
                  headerShown: false, // Hide header
                }}
              />
              <Stack.Screen
                name="NewsDetail"
                component={NewsDetailScreen}
                options={{
                  headerBackTitleVisible: false, // Hide back button title
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </BookmarksContextProvider>
      </>
    );
  }
}

// Stylesheet for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
