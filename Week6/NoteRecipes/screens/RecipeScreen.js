import { View, StyleSheet, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
//Import components
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import RecipesItem from "../components/RecipesItem";
//Import modal
import RecipeView from "../modals/RecipeView";
// Import state management from React
import { useState } from "react";

// Define the RecipesScreen component
function RecipesScreen(props) {
  //Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();
  // Declare state variables for modal visibility and recipe details
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [modalRecipeTitle, setModalRecipeTitle] = useState("");
  const [modalRecipeText, setModalRecipeText] = useState("");

  // Function to handle displaying recipe details in a modal
  function recipeViewHandler(title, text) {
    setModalRecipeTitle(title);
    setModalRecipeText(text);
    setModalIsVisible(true);
  }
  // Function to handle closing the recipe details modal
  function closeRecipeViewHandler() {
    setModalIsVisible(false);
  }
  // Return the structure for the RecipesScreen component
  return (
    // Main container for the RecipesScreen based on safe area insets
    <View
      style={[
        styles.rootcontainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      {/* Container for the title with styling */}
      <View style={styles.titleContainer}>
        <Title>Current Recipes</Title>
      </View>
      {/* Container for the list of recipes with FlatList */}
      <View style={styles.itemContainer}>
        {/* FlatList to display individual recipe items */}
        <FlatList
          data={props.currentRecipes}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
          renderItem={(itemData) => {
            return (
              // Individual recipe item component
              <RecipesItem
                id={itemData.item.id}
                title={itemData.item.title}
                // Event handler to view recipe details
                onView={recipeViewHandler.bind(
                  this,
                  itemData.item.title,
                  itemData.item.text
                )}
                // Event handler to delete the recipe
                onDelete={props.onDelete.bind(this, itemData.item.id)}
              />
            );
          }}
        />
      </View>
      {/* RecipeView modal to display detailed recipe information */}
      <RecipeView
        visible={modalIsVisible}
        title={modalRecipeTitle}
        text={modalRecipeText}
        onClose={closeRecipeViewHandler}
      />
      {/* Container for navigation buttons with styling */}
      <View style={styles.navButtonContainer}>
        <View style={styles.navButton}>
          <NavButton onNext={props.onAdd}>Add New Recipe</NavButton>
        </View>
        <View style={styles.navButton}>
          <NavButton onNext={props.onHome}>Return Home</NavButton>
        </View>
      </View>
    </View>
  );
}
// Export the component as the default export
export default RecipesScreen;

// Stylesheet for styling the components
const styles = StyleSheet.create({
  rootcontainer: {
    flex: 1,
    width: "95%",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  itemContainer: {
    flex: 6,
  },
  navButtonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  navButton: {
    marginHorizontal: 10,
  },
});
