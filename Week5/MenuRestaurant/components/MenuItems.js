import { View, StyleSheet, Text, Image } from "react-native";
//import constants
import Colors from "../constants/colors";


// Funtion to prop each menu item, be able to use in a flatlist
function MenuItem(props){
    return(
        <View style={styles.itemContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.name}</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={props.image}/>
            </View>
            <View style={styles.priceContainer}>
                <Text style={styles.price}>{props.price}</Text>
            </View>
        </View>

    );
}
// be able to import in other parts of the code
export default MenuItem

//Styles fo menuitem
const styles = StyleSheet.create({
    itemContainer: {
        marginBottom: 20
    },
    titleContainer: {
        backgroundColor: Colors.primary500, 
        borderWidth: 3, 
        borderRadius: 5, 
    },
    title: {
        fontSize: 30,
        textAlign: "center", 
        fontFamily: "protest", 
    }, 
    imageContainer: {
        alignItems: "center", 
        borderWidth: 3, 
        borderRadius: 5, 
        backgroundColor: "black"
    }, 
    image: {
        width: "100%", 
        height: 200, 
        resizeMode: "cover", 
    }, 
    priceContainer: {
        backgroundColor: Colors.primary500, 
        borderWidth: 3, 
        borderRadius: 5,
    }, 
    price: {
        fontSize: 40, 
        textAlign: "center", 
        fontFamily: "protest",
        fontWeight: "bold"

    }, 
  });