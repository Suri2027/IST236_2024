import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
//Import Screens 
import StartGamesScreen from "./screens/StartScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import Colors from "./constants/colors";
//Import Constants


export default function App() {
  //Set up our custom fonts
  const [fontsLoaded] = useFonts({
    poker: require("./assets/fonts/Poker.ttf"),
    pokerGeneral: require("./assets/fonts/PokerKings-Regular.ttf"),
  });

  //Set state variable to determine which screen will be on
  const [currentScreen, setCurrentScreen] = useState("start");

  function newGameHandler() {
    setCurrentScreen("game");
  }
  function gameOverHandler() {
    setCurrentScreen("gameOver");
  }
  function restartHandler() {
    setCurrentScreen("start");
  }

  let screen = <StartGamesScreen onNext={newGameHandler} />;

  if (currentScreen === "game") {
    screen = <GameScreen onNext={gameOverHandler} />;
  }

  if (currentScreen === "gameOver") {
    screen = <GameOverScreen onNext={restartHandler} />;
  }

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}

//Styles
const styles = StyleSheet.create({
   container:{
    flex:1,
    backgroundColor:Colors.accent500,
   }
});