import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../constants/colors";

function RecipesItem(props) {
  return (
    <View style={styles.item}>
      <View style={styles.itemTitleContainer}>
        <Text style={styles.itemTitle}>{props.title}</Text>
      </View>
      <View style={styles.itemButtonsContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: Colors.primary500 }]}
          onPress={props.onView}
        >
          <Text style={styles.buttonText}>View</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: Colors.primary500 }]}
          onPress={props.onDelete}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default RecipesItem;

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
    alignItems: "center", // Alinea el contenido al centro verticalmente
    justifyContent: "center", // Alinea el contenido al centro horizontalmente
  },
  buttonText: {
    color: Colors.primary800,
    textAlign: "center"
  },
});
