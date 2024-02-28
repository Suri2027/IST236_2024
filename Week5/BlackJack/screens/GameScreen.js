import { View, Image, StyleSheet,} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
//Import components
import NavButton from "../components/NavButton";
import Header from "../components/Header";
//Import Constants
import Cards from "../constants/cards";

function GameScreen(props) {
  //Set the safe area screen boundaries
  const insets = useSafeAreaInsets();

  return (
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
        <Header>Computer's Hand</Header>
      </View>

      <View style={styles.computerImageContainer}>
        <Image
          style={styles.computerImage}
          source={require("../assets/images/cardback2.png")}
        />
        <Image 
        style={styles.computerImage}
        source={Cards.aceSpades.picture} 
        />
      </View>

      <View style={styles.headerContainer}>
        <Header>Player's Hand</Header>
      </View>

      <View style={styles.playerImageContainer}>
        <Image 
        style={styles.playerImage} 
        source={Cards.jackSpades.picture} 
        />
        <Image 
        style={styles.playerImage} 
        source={Cards.aceSpades.picture} />
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <NavButton onPress={props.onNext}>Hit Me!</NavButton>
        </View>
        <View style={styles.buttonContainer}>
          <NavButton onPress={props.onNext}>Stay!</NavButton>
        </View>
      </View>
    </View>
  );
}

export default GameScreen;

//Styles fo the button 
const styles = StyleSheet.create({
  rootcontainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 1, 
    justifyContent:"center",
    alignItems: "center",
  },
  computerImageContainer:{
    flex:3,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  computerImage:{
    height:150,
    width:100,
    resizeMode:"contain",
  },
  playerImageContainer:{
    flex:3,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  playerImage:{
    height:150,
    width:100,
    resizeMode:"contain",
  },
  buttonsContainer: {
    flex:1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  buttonContainer: {
    flex:1,
    height: "100%",
    justifyContent:"center",
    marginHorizontal: 10,
  },
});
