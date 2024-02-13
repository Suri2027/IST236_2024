import { View, StyleSheet, Text, Image, Linking } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";


function HomeScreen(props){
    //Set Safe Area Screen Boundaries
    const insets = useSafeAreaInsets();

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
                <Title>House of Blues</Title>
            </View>

            <View style={styles.imageContainer}>
                <Image 
                style={styles.image}
                source={require("../assets/images/venue.jpg")}
                />
            </View>

            <View style={styles.infoContainer}>
            <Text 
            style={styles.infoText}
            onPress={() => Linking.openURL("tel:843-272-3000")}
            >
            843-272-3000
            </Text>
            <Text 
            style={styles.infoText}
            onPress={() => Linking.openURL("https://maps.app.goo.gl/ijVD6FfjU4aiegdM6")}
            >
            4640 Hwy 17 S{"\n"} North Myrtle Beach{"\n"} SC 29582
            </Text>
            <Text 
            style={styles.infoText}
            onPress={() => Linking.openURL("https://www.houseofblues.com/myrtlebeach/concert-events")}
            >
            www.houseofblues.com
            </Text>
            </View>
        <View style={styles.buttonContainer}>
            <NavButton onPress={props.onNext}>View Events</NavButton>
        </View>
        </View>
    );
}

export default HomeScreen;

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
    }, 
    image:{
        resizeMode:"cover",
        height: "100%",
        width: 380,
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
        fontFamily: "squealer",
    },
    buttonContainer: {
        flex: 1, 
        marginTop: 20,
        alignItems: "center",
    }, 
  });