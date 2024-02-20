import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
//import constants
import Colors from "../constants/colors";

// RecipesItem component for displaying individual recipe items
function RecipesItem(props) {
  return (
    // Container for the entire recipe item
    <View style={styles.item}>
      {/* Container for the recipe title */}
      <View style={styles.itemTitleContainer}>
        {/* Text component for the recipe title */}
        <Text style={styles.itemTitle}>{props.title}</Text>
      </View>
      {/* Container for the action buttons (View and Delete) */}
      <View style={styles.itemButtonsContainer}>
        {/* TouchableOpacity for the View button */}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: Colors.primary500 }]}
          onPress={props.onView}
        >
          <Text style={styles.buttonText}>View</Text>
        </TouchableOpacity>
        {/* TouchableOpacity for the Delete button */}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: Colors.primary500 }]}
          onPress={props.onDelete}
        >
          {/* Text component for the Delete button label */}
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
// Export the component as the default export
export default RecipesItem;
// Stylesheet for styling the components
const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 8,
    borderRadius: 6,
    backgroundColor: Colors.accent500,
  },
  itemTitleContainer: {
    justifyContent: "center",
  },
  itemTitle: {
    fontFamily: "paperNoteSketch",
    fontSize: 20,
    color: Colors.primary300,
    padding: 8,
  },
  itemButtonsContainer: {
    flexDirection: "row",
  },
  button: {
    marginVertical: 5,
    marginHorizontal: 3,
    borderRadius: 5,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: Colors.primary800,
    textAlign: "center",
  },
});
