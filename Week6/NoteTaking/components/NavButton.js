import { Pressable, View, StyleSheet, Text} from "react-native";
//Import constants
import Colors from "../constants/colors";

//Button function
function NavButton(props){
    return(
        <Pressable
        onPress={props.onNext}
        style={({pressed}) => pressed && styles.pressedItem}
        >
            <View style={styles.buttonContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{props.children}</Text>
                </View>
            </View>
        </Pressable>
    )

}
// export to be able to import NavButton in other parts of the code
export default NavButton;

//Styles fo the button 
const styles = StyleSheet.create({
    buttonContainer: {
      justifyContent: "center",
      alignItems: "center", 
      backgroundColor: Colors.accent500,
      width: 150,
      height:75, 
      margin:8,
      borderRadius: 6,
    },
    pressedItem: {
        opacity: 0.8,
    },
    text: {
        padding:8, 
        fontSize:25, 
        textAlign: "center", 
        fontFamily: "paperNoteBold",
        color: Colors.primary300, 
    },
  });
  