import { View, StyleSheet, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
//Import Components
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";

function StartGamesScreen(props) {
  //Set the safe area screen boundaries
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
      colors={[
        Colors.accent800,
        Colors.accent200,
        Colors.accent800,
        Colors.accent200,
      ]}
      style={styles.rootcontainer}
    >
      <View
        style={[
          styles.rootcontainer,
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          },
        ]}
      >
        <View style={styles.titleContainer}>
          <Title>BlackJack 21</Title>
        </View>

        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/blackjackbg.png")}
          />
        </View>

        <View style={styles.buttonContainer}>
          <NavButton onPress={props.onNext}>Play Now</NavButton>
        </View>
      </View>
    </LinearGradient>
  );
}

export default StartGamesScreen;

//Styles
const styles = StyleSheet.create({
  rootcontainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  imageContainer: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    resizeMode: "contain",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
