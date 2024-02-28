import { Pressable, View, StyleSheet, Text } from "react-native";
//Import constants
import Colors from "../constants/colors";

//Button function
function NavButton(props) {
  return (
    <Pressable android_ripple={{ color: "grey" }} onPress={props.onPress}>
      <View style={styles.buttonContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{props.children}</Text>
        </View>
      </View>
    </Pressable>
  );
}
// export to be able to import NavButton in other parts of the code
export default NavButton;

//Styles fo the button
const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: Colors.primary500,
    backgroundColor: Colors.accent800,
    width: "100%",
    paddingHorizontal: 10,
  },
  textContainer: {},
  text: {
    padding: 8,
    fontSize: 25,
    textAlign: "center",
    fontFamily: "poker",
    color: Colors.primary500,
  },
});
