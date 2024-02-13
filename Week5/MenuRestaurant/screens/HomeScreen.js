import { View, StyleSheet, Text, Image, Linking } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
//Import components
import Title from "../components/Title";
import NavButton from "../components/NavButton";
//Import constants
import Colors from "../constants/colors";


function HomeScreen(props){
    //Set Safe Area Screen Boundaries
    const insets = useSafeAreaInsets();
    //Design the Home screen to display the title, image, tel, addres and website. Also display a button to go to the menu screen
    return (
        <View style={[
            styles.rootContainer,
            {
                paddingTop: insets.top, 
                paddingBottom: insets.bottom,
                paddingLeft: insets.left, 
                paddingRight: insets.right

            }
        ]}>
            <View style={styles.titleContainer}>
                <Title>Cracker Barrel</Title>
            </View>

            <View style={styles.imageContainer}>
                <Image 
                style={styles.image}
                source={require("../assets/images/crackerbarrel.jpg")}
                />
            </View>

            <View style={styles.infoContainer}>
            <Text 
            style={styles.infoText}
            onPress={() => Linking.openURL("tel:843-916-8241")}
            >
            843-916-8241
            </Text>
            <Text 
            style={styles.infoText}
            onPress={() => Linking.openURL("https://maps.app.goo.gl/hZfi7SMzxxiHfmmH8")}
            >
            1208 N. Retail Court{"\n"} Myrtle Beach{"\n"} SC 29577
            </Text>
            <Text 
            style={styles.infoText}
            onPress={() => Linking.openURL("https://www.crackerbarrel.com/menu/breakfast-all-day/pancakes-n-such")}
            >
            www.crackerbarrel.com
            </Text>
            </View>
        <View style={styles.buttonContainer}>
            <NavButton onPress={props.onNext}>Menu</NavButton>
        </View>
        </View>
    );
}
//To be able to export 
export default HomeScreen;
//Styles
const styles = StyleSheet.create({
    rootcontainer: {
      flex: 1,
      alignItems: 'center',
    },
    titleContainer:{
        flex:1,
        justifyContent: "center",
    },
    imageContainer: {
        flex:4,
        paddingTop:15,
    }, 
    image:{
        resizeMode:"cover",
        height: "100%",
        width: 380,
        borderWidth: 5,
        borderColor: "white", 
        borderRadius: 20,
    },
    infoContainer:{
        flex: 3,
        justifyContent: "center",
    },
    infoText:{ 
        fontSize: 30,
        textAlign: "center", 
        padding: 7,
        color: Colors.primary500,
        fontFamily: "protest",
    },
    buttonContainer: {
        flex: 1, 
        marginTop: 20,
        alignItems: "center",
    }, 
  });