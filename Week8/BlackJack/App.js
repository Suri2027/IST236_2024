import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useCallback, useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
//Import Screens
import StartGameScreen from "./screens/StartScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
//Import Constants
import Colors from "./constants/colors";

import * as SplashScreen from "expo-splash-screen";

export default function App() {
  //Set up our custom fonts
  const [fontsLoaded, fontError] = useFonts({
    poker: require("./assets/fonts/Poker.ttf"),
    pokerGeneral: require("./assets/fonts/PokerKings-Regular.ttf"),
  });

  //Set the app to do not display until the fonts are fully charged, in the main time show and splash image
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      //Turn of the the splashscreen when the font is uploaded
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  //Set state variable to determine which screen will be on
  const [currentScreen, setCurrentScreen] = useState("start");
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  function newGameHandler() {
    setCurrentScreen("game");
  }
  function gameOverHandler() {
    setCurrentScreen("gameOver");
  }
  function restartHandler() {
    setCurrentScreen("start");
  }
  function setUserScoreHandler(score) {
    setUserScore(score);
  }
  function setComputerScoreHandler(score) {
    setComputerScore(score);
  }

  let screen = <StartGameScreen onNext={newGameHandler} />;

  if (currentScreen === "game") {
    screen = (
      <GameScreen
        onNext={gameOverHandler}
        onSetUserScore={setUserScoreHandler}
        onSetComputerScore={setComputerScoreHandler}
      />
    );
  }

  if (currentScreen === "gameOver") {
    screen = (
      <GameOverScreen
        onNext={restartHandler}
        user={userScore}
        computer={computerScore}
      />
    );
  }

  //Ensure that the whole app uploaded before you can see the first screen 
  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    return (
      <>
        <StatusBar style="auto" />
        <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
      </>
    );
  }
}

//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent500,
  },
});
