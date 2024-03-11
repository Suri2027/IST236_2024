import { LinearGradient } from "expo-linear-gradient";
import { Pressable, View,Text, StyleSheet, Platform } from "react-native";
import Colors from "../constants/colors";


function GenreGridTitle(props) {
  return (
    <View style={styles.gridItem}>
      {/* Make each country a pressable button */}
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color:"#CCC" }}
        onPress={props.onPress}
      >
        {/* Add a linear gradient to the button */}
        <LinearGradient
          colors={[
            props.color,
            props.color,
            props.color,
            props.color,
            props.color,
            props.color,
            Colors.accent800,
          ]}
          style={styles.innerContainer}
        >
          <Text style={styles.title}>{props.title}</Text>
        </LinearGradient>
      </Pressable>
    </View>
  );
}

export default GenreGridTitle;

const styles = StyleSheet.create({
    gridItem: {
      flex: 1,
      margin: 16,
      height: 150,
      borderRadius: 8,
      elevation: 4,
      backgroundColor: "white",
      shadowColor: "black",
      shadowOpacity: 0.25,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      overflow: Platform.OS === "android" ? "hidden" : "visible",
    },
    button: {
      flex: 1,
    },
    innerContainer: {
      flex: 1,
      padding: 16,
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      fontSize: 30,
      fontFamily: "jazzBold",
    },
  });