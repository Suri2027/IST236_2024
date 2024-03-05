import { Text, StyleSheet, useWindowDimensions } from "react-native";
import Colors from "../constants/colors";

//Function for the title
function Title(props) {
  const { width, height } = useWindowDimensions();
  return (
    <Text style={[styles.title, {fontSize: width * 0.10 }]}>
      {props.children}
    </Text>
  );
}
//To be able to export
export default Title;

// Define styles
const styles = StyleSheet.create({
  title: {
    fontFamily: "campground",
    color: Colors.primary500,
    textAlign: "center",
  },
});
