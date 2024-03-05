import { Text, StyleSheet, useWindowDimensions } from "react-native";
//Import constants
import Colors from "../constants/colors";

//Function for the title
function Title(props){
    const{ width, height} =useWindowDimensions();
    return <Text style={[styles.title, {fontSize: width * 0.13 }]}>{props.children}</Text>;
}
//To be able to export 
export default Title; 

//Styles
const styles = StyleSheet.create({
    title: {
     fontFamily: "hotel",
      color: Colors.primary500, 
      textAlign: "center", 

    },
  });