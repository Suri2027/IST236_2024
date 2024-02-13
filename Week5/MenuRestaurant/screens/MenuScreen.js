import { View, StyleSheet, Text, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";

//Import components 
import NavButton from "../components/NavButton";
import Title from "../components/Title";
import MenuItem from "../components/MenuItems";

//Function for the Main Screen 
function MenuScreen(props){
    //Set Safe Area Screen Boundaries
    const insets = useSafeAreaInsets();
    // Array to display each item with the flatlist
    const [menuItems, setMenuItems] = useState([
        {
            name: "Stuffed Cheesecake Pancake Breakfast",
            image: require("../assets/images/cheesecakepancakes.avif"),
            price: "$10.99",
            id: 1,
        },
        {
            name: "Homestyle Chicken French Toast",
            image: require("../assets/images/chickenfrenchtoast.avif"),
            price: "$11.99",
            id: 2,
        },
        {
            name: "Grandma's Sampler Pancake Breakfast",
            image: require("../assets/images/grandmapancakes.avif"),
            price: "$10.49",
            id: 3,
        },
        {
            name: "Momma's Pancake Breakfast",
            image: require("../assets/images/mommaspancakes.avif"),
            price: "$8.99",
            id: 4,
        },
        {
            name: "Pancake Tacos",
            image: require("../assets/images/pancaketacos.avif"),
            price: "$11.99",
            id: 5,
        },
    ]);
    // Design the Menu Screen with the title, images, and cost display on a flatlist. Also display a button to go to the home screen
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
                <Title>Menu</Title>
            </View>

            <View style={styles.listContainer}>
                <FlatList
                data= {menuItems}
                keyExtractor={(item) => item.id}

                alwaysBounceVertical= {false}
                showsVerticalScrollIndicator = {false}
                renderItem={(itemData) => {
                    return (
                        <MenuItem
                            name={itemData.item.name}
                            image={itemData.item.image}
                            price={itemData.item.price}
                        />
                    );
                }}
                
                />
            </View>
            <View style={styles.buttonContainer}>
                <NavButton onPress={props.onNext}>Home Page</NavButton>
            </View>
        </View>
    );
}
// To be able to export
export default MenuScreen;

// styles 
const styles = StyleSheet.create({
    rootcontainer: {
      flex: 1,
      width: 400,
      alignItems: 'center',
    },
    titleContainer:{
        flex:1,
        justifyContent: "center",
    },
    listContainer:{
        flex: 7, 
        width: "95%",
    },
    buttonContainer:{
        flex: 1,
        marginTop: 20,
        alignItems: "center",
    },
 
  });