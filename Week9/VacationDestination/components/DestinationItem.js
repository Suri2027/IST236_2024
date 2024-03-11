import { useState } from "react";
import { Pressable, View, Text, Image, StyleSheet } from "react-native";
// Importing custom components and constants
import Colors from "../constants/colors";
import ImageViewModal from "../modals/ImageViewModal";

// Functional component for rendering a destination item
function DestinationItem(props) {
  // State to manage the visibility of the image view modal
  const [modalIsVisible, setModalIsVisible] = useState(false);

  // Handler function to open the image view modal
  function viewImageHandler() {
    setModalIsVisible(true);
  }

  // Handler function to close the image view modal
  function closeImageHandler() {
    setModalIsVisible(false);
  }

  return (
    // Container for the destination item with alternating background color
    <View
      style={[
        styles.itemContainer,
        { backgroundColor: props.listIndex % 2 == 0 ? "#ccc" : "#fff" },
      ]}
    >
      {/* Pressable component with ripple effect for handling image view */}
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: Colors.primary300 }}
        onPress={viewImageHandler}
      >
        {/* Container for the entire content of the destination item */}
        <View style={styles.rowContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{props.name}</Text>
            <View style={styles.innerRowContainer}>
              <Text style={styles.cost}>
                Cost per night:$ {props.costVisit}
              </Text>
            </View>
              <Text style={styles.year}>Year Founded: {props.foundedYear}</Text>
              <Text style={styles.rating}>Rating: {props.rating} /5</Text>
          </View>
        </View>
      </Pressable>

      {/* Image view modal component */}
      <ImageViewModal
        isVisible={modalIsVisible}
        imageUrl={props.imageUrl}
        description={props.description}
        onClose={closeImageHandler}
      />
    </View>
  );
}

// Exporting the component as the default export
export default DestinationItem;

// StyleSheet for styling the components
const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#CCC",
    paddingHorizontal: 5,
    paddingTop: 3,
    marginBottom: 3,
    borderRadius: 7,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  rowContainer: {
    height: 120,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  image: {
    width: "28%",
    height: "120%",
    resizeMode: "contain",
    borderRadius: 15,
  },
  infoContainer: {
    width: "75%",
    paddingLeft: 20,
  },
  name: {
    textAlign: "left",
    fontSize: 25,
    fontFamily: "ojuBold",
  },
  cost: {
    width: "85%",
    fontSize: 15,
    fontFamily: "ojuMedium",
  },
  year: {
    fontSize: 15,
    fontFamily:"ojuRegular",
  },
  innerRowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rating: {
    fontSize: 14,
    fontFamily: "ojuLight",
  },
});
