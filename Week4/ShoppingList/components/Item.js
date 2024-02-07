import { Pressable, StyleSheet, View, Text } from "react-native";


function Item(props){
    console.log("Item Component - Text:", props.text, "ID:", props.id);

    return(
        <View style={styles.item}>
            <Pressable
                android_ripple={{color: "#421879"}}
                style={({pressed }) => pressed && styles.pressedItem}
                onPress={props.onDeleteItem.bind(this, props.id)}
            >
                <Text style={styles.itemText}>{props.text}</Text>

            </Pressable>
        </View>
    );
}

export default Item;

const styles = StyleSheet.create({
    item: {
        margin:8, 
        borderRadius: 6,
        backgroundColor: "#5e08cc",
        width: 300
    },
    pressedItem: {
        opacity: 0.5,
    }, 
    itemText: {
        color:"white",
        padding: 8,
    },
});