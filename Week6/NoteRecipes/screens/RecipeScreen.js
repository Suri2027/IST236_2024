import { View, StyleSheet, Image, Text, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
//Import components
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import RecipesItem from "../components/RecipesItem";
import RecipeView from "../modals/RecipeView";

import { useState } from "react";

function RecipesScreen(props) {
  //Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();
  
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [modalRecipeTitle, setModalRecipeTitle] = useState("");
  const [modalRecipeText, setModalRecipeText] = useState("");

  function recipeViewHandler(title, text) {
    setModalRecipeTitle(title);
    setModalRecipeText(text);
    setModalIsVisible(true);
  }
  function closeRecipeViewHandler() {
    setModalIsVisible(false);
  }

  //Design the Home screen to display the title, image, tel, addres and website. Also display a button to go to the menu screen
  return (
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
      <View style={styles.titleContainer}>
        <Title>Current Recipes</Title>
      </View>

      <View style={styles.itemContainer}>
        <FlatList
          data={props.currentRecipes}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
          renderItem={(itemData) => {
            return (
              <RecipesItem
                id={itemData.item.id}
                title={itemData.item.title}
                onView={recipeViewHandler.bind(
                  this,
                  itemData.item.title,
                  itemData.item.text
                )}
                onDelete={props.onDelete.bind(this, itemData.item.id)}
              />
            );
          }}
        />
      </View>

      <RecipeView
        visible={modalIsVisible}
        title={modalRecipeTitle}
        text={modalRecipeText}
        onClose={closeRecipeViewHandler}
      />

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

export default RecipesScreen;

//Styles
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
