import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';

//Import screens
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
//Import constants
import Colors from './constants/colors';

export default function App() {
  //Set up our custom fonts
  const [fontsLoaded] = useFonts({
    "protest": require("./assets/fonts/ProtestRiot-Regular.ttf"),
  
  })

  //Set state variable for the current screen
  const [currentScreen, setCurrentScreen] = useState("Home");
  
  function menuScreenHandler(){
    setCurrentScreen("menu");
  }

  function homeScreenHandler(){
    setCurrentScreen("home");
  }

  //Determine which screen to be on 
  let screen = < HomeScreen onNext={menuScreenHandler}/>;

  if(currentScreen === "menu"){
    screen = <MenuScreen onNext={homeScreenHandler}/>;
  }

  return (
    <>
    <StatusBar style='light'/>
    <SafeAreaProvider style={styles.container}>{screen}   
    </SafeAreaProvider>
    </>
    
  );
}
//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent500,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

