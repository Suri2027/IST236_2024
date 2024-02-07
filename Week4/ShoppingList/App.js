import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Pressable, FlatList, Alert} from 'react-native';

import Item from './components/Item';
import ItemInputModal from './modals/ItemInputModal';

export default function App() {
  //Create state management variables
  const [modalIsVisible, setModalIsVisible] = useState(false);
  //Create a shopping list
  const [shoppingItems, setShoppingItems] = useState([]);
  const [currentID, setCurrentID] = useState(0);

  //Create modal Screen Handler Functions
  function StartAddItemHandler() {
    setModalIsVisible(true);
  }

  function endAddItemHandler() { 
    setModalIsVisible(false);
  }

  function addItemHandler(enteredItemText) {
    setShoppingItems((currentShoppingItems) => [
      ...currentShoppingItems, 
      { text: enteredItemText, id: currentID }
    ]);
    setCurrentID(currentID + 1);
    endAddItemHandler();
  }
  function deleteItemHandler(id){
    Alert.alert("Delete an Item", 
    "Are you sure you want to delete?",
    [
      {
        text:"Cancel",
        style:"cancel"
      }, 
      {
        text: "Confirm",
        style:"default",
        onPress: () => {
          setShoppingItems((currentShoppingItems) => {
            return currentShoppingItems.filter((item) => item.id !== id);
          });
        },
      },
    ]);
  }
  
  return (
    <>
      {/* set status bar styling */}
      <StatusBar style='light'/>

      {/* Set SafeAreaView screen container */}
      <SafeAreaView style={styles.appContainer}>
        {/* Set title container */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Shopping List</Text>
        </View>

        {/* Set add item button container  */}
        <View style={styles.buttonContainer}>
            <Pressable
              // Add the android ripple 
              android_ripple = {{color: "#b180f0"}}
              //Style th ebutton when pressed
              style={({pressed})=> pressed && styles.pressedButton}
              //When pressed, open model screen
              onPress={StartAddItemHandler}>
              <View style={styles.addButton}>
                <Text style={styles.addButtonText}>Add New Item</Text>
              </View>
            </Pressable>
          </View>
        
        {/* Set Items to Get title container */}
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>My Items to Get</Text>
        </View>
        {/* Set the List of Items container */}
        <View style={styles.listContainer}>
          <FlatList
            data={shoppingItems}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            renderItem ={(itemData) => {
              return(<Item text={itemData.item.text} 
                id ={itemData.item.id} 
                onDeleteItem={deleteItemHandler} />); 
            }}
          />
        </View>

        <ItemInputModal onAddItem ={addItemHandler} onCancel={endAddItemHandler} visible ={modalIsVisible}/>
      </SafeAreaView>
    </>
  );
}


const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#1e085a',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,  
  },
  titleContainer: {
    flex: 1,
    margin: 10,
    padding: 5, 
    paddingHorizontal: 30,
    justifyContent: "center",
    backgroundColor: "white", 
    borderBottomRightRadius: 20, 
    borderTopLeftRadius: 20
  }, 
  title:{
    fontSize: 40,
    color: "#5e08cc",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
  }, 
  addButton:{
    backgroundColor: "white", 
    borderWidth: 1,
    borderRadius: 5, 
    padding: 10, 
  },
  addButtonText:{
    fontSize: 20,
    fontWeight: "bold",
    color: "#5e08cc"
  },
  pressedButton: {
    opacity: 0.8,
  },
  subtitleContainer: {
    flex: 1, 
    margin: 10,
    padding: 5, 
    paddingHorizontal: 30,
    justifyContent: "center",
    backgroundColor: "white", 
    borderBottomRightRadius: 20, 
    borderTopLeftRadius: 20
  }, 
  subtitle:{
    fontSize: 30,
    color: "#5e08cc",
  },

  listContainer: {
    flex: 7,
    width:"90%",
    alignItems: "center",
  }, 
  listText:{
    fontSize:20, 
    color: "black",
  },

});
