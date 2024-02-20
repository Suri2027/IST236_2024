import { View, StyleSheet, Text, Modal, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
//Imoprt components
import NavButton from "../components/NavButton";
//Import constants
import Colors from "../constants/colors";

// RecipeView component to display details of a recipe in a modal
function RecipeView(props) {
  //Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();
  //Design the Home screen to display the title, image, tel, addres and website. Also display a button to go to the menu screen
  return (
    // Modal component to display the recipe details
    <Modal visible={props.visible} animationType="slide">
      {/* Main container for the RecipeView */}
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
        {/* Title container to display the recipe title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
        {/* ScrollView container for the recipe text to enable scrolling */}
        <ScrollView style={styles.textContainer}>
          <Text style={styles.text}>{props.text}</Text>
        </ScrollView>
        {/* Container for the navigation button to return to recipes */}
        <View style={styles.navButtonContainer}>
          <NavButton onNext={props.onClose}>Return To Recipes</NavButton>
        </View>
      </View>
    </Modal>
  );
}
// Export the component as the default export
export default RecipeView;

// Styles for the RecipeView component
const styles = StyleSheet.create({
  rootcontainer: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.accent800,
    alignItems: "center",
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontFamily: "paperNoteSketch",
    color: Colors.primary300,
    height: 35,
  },
  textContainer: {
    flex: 1,
    width: "90%",
    borderWidth: 3,
    borderColor: Colors.primary500,
    padding: 10,
    paddingTop: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  text: {
    color: Colors.primary300,
    fontSize: 20,
    fontFamily: "paperNote",
  },
  navButtonContainer: {
    marginTop: 10,
  },
});
