import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { useFonts } from "expo-font";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Colors from "./constants/colors";
import AddRecipeScreen from "./screens/AddRecipeScreen";
import RecipesScreen from "./screens/RecipeScreen";

export default function App() {
  //Set up our custom fonts
  const [fontsLoaded] = useFonts({
    noteFont: require("./assets/fonts/Note.ttf"),
    papernotes: require("./assets/fonts/Papernotes.ttf"),
    paperNoteSketch: require("./assets/fonts/Papernotes Sketch.ttf"),
    paperNoteBold: require("./assets/fonts/Papernotes Bold.ttf"),
  });

  //Set state variable for the current screen
  const [currentScreen, setCurrentScreen] = useState("home");
  const [currentID, setCurrentID] = useState(3);
  //Set state variable for the current screen
  const [currentRecipes, setCurrentRecipes] = useState([
    {
      id: 1,
      title: "Frozen berry yogurt",
      text: "Ingredients:\n250g frozen mixed berry\n250g Greek yogurt\n1tbsp honey or agave syrup\n\n" +
      "Blend berries, yogurt and honey or agave syrup in a food processor for 20 seconds, until it comes together" +
      "to a smooth ice-cream texture. Scoop into bowls and serve.",
    },
    {
      id: 2,
      title: "Quick fried rice",
      text: "Ingredients:\n2 tsp oil\n1 egg, beaten\n2 rashers bacon, chopped\n175g mushrooms, sliced\n200g frozen peas\n"+
      "1 garlic clove, crushed\nsmall knob of ginger, grated\n2 tsp dark soy sauce, plus extra to serve\n1 tsp sugar\n"+
      "250g cooked basmati rice\n\n" + "1.-Heat the oil in a frying pan, then tip in the egg. Leave to set for 30 secs-1 min, swirling" +
      "every now and again, then tip it out and finely slice. Add the bacon and mushrooms to pan, then fry until golden, about 3 mins." +
      "Add the peas, garlic and ginger, then cook for 1 min\n\n" + "2.-Mix the soy sauce and sugar together. Turn up the heat, add the cooked" +
      "rice to the pan, heat through, then splash in the sweet soy sauce. Stir through the egg and serve straight away, with more soy sauce if you like.",
    },
  ]);

  function homeScreenHandler() {
    setCurrentScreen("home");
  }

  function recipesScreenHandler() {
    setCurrentScreen("recipes");
  }

  function addRecipeScreenHandler() {
    setCurrentScreen("add");
  }

  function addRecipeHandler(enteredRecipeTitle, enteredRecipeText) {
    setCurrentRecipes((currentRecipes) => {
      return [
        ...currentRecipes,
        { id: currentID, title: enteredRecipeTitle, text: enteredRecipeText },
      ];
    });
    setCurrentID(currentID + 1);
    recipesScreenHandler();
  }

  function deleteRecipeHandler(id){
    setCurrentRecipes((currentRecipes)=> {
      return currentRecipes.filter((item) => item.id !== id);
    })
  }

  let screen = <HomeScreen onNext={recipesScreenHandler} />;

  if (currentScreen === "add") {
    screen = <AddRecipeScreen onAdd={addRecipeHandler} onCancel= {recipesScreenHandler}/>;
  }
  if (currentScreen === "recipes") {
    screen = (
      <RecipesScreen
        onHome={homeScreenHandler}
        onAdd={addRecipeScreenHandler}
        onDelete={deleteRecipeHandler}
        currentRecipes={currentRecipes}
      />
    );
  }

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary800,
    alignItems: "center",
    justifyContent: "center",
  },
});
