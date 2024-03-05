import {
  Pressable,
  View,
  StyleSheet,
  Text,
  useWindowDimensions,
} from "react-native";
import Colors from "../constants/colors";

//Button function
function NavButton(props) {
  const { width, height } = useWindowDimensions();

  return (
    <Pressable
      //Using the bind keyword we can preconfigure a function with a set input value
      //Instead of having to create another local function to call the provided function
      onPress={props.onPress}
      //By providing style and checking for pressed you can set a temporary styles
      //that will only be active while pressed. This will take effect on iOS and Android
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.buttonContainer}>
        <View style={styles.textContainer}>
          <Text style={[styles.text, {fontSize: width * 0.06 }]}>
            {props.children}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
// export to be able to import NavButton in other parts of the code
export default NavButton;

// Define styles
const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary500,
    borderRadius: 300,
    width: 1000,
    maxWidth: "70%",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  pressedItem: {
    opacity: 0.5,
  },
  text: {
    padding: 8,
    fontFamily: "campground",
    textAlign: "center",
    color: Colors.primary300,
  },
});
