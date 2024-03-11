import { Modal, View, Button, Image, StyleSheet, Text } from "react-native";

// Functional component for displaying an image with description in a modal
function ImageViewModal(props) {
  // Rendering the modal component
  return (
    <View style={styles.container}>
      <Modal
        visible={props.isVisible}
        animationType="slide"
        transparent={false}
      >
        {/* Container for the modal content */}
        <View style={styles.modalContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
          {/* Container for the image description */}
          <View style={styles.descriptionContainer}>
            {/* Text displaying the image description */}
            <Text style={styles.description}>{props.description}</Text>
          </View>
          {/* Button to close the modal and return to the main view */}
          <Button title="Return to Countries" onPress={props.onClose} />
        </View>
      </Modal>
    </View>
  );
}

// Exporting the component as the default export
export default ImageViewModal;

// StyleSheet for styling the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7a4f80",
  },
  image: {
    width: "90%",
    height: "50%",
    resizeMode: "contain",
  },
  descriptionContainer: {
    flex: 1,
    paddingBottom: 80,
  },
  description: {
    textAlign: "center",
    fontFamily: "ojuRegular",
    fontSize: 20,
  },
});
