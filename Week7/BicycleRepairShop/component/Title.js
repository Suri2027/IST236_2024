import { Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";


//Function for the title
function Title(props){
    return <Text style={styles.title}>{props.children}</Text>;
}
//To be able to export 
export default Title; 

//Styles
const styles = StyleSheet.create({
    title: {
      fontSize: 30,
      color: Colors.primary500, 
      textAlign: "center", 
      fontFamily: "bicycleBold",
      paddingTop: 20,

    },
  });