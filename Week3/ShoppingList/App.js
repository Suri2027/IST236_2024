import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Modal, Image, Button, TextInput, Pressable} from 'react-native';

export default function App() {
  //Create state management variables
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [shoppingItems, setShoppingItems] = useState("");
  const [enteredItemText, setEnteredItemText] = useState("");

  //Create modal Screen Handler Functions
  function StartAddItemHandler() {
    setModalIsVisible(true);
  }

  function endAddItemHandler() { 
    setModalIsVisible(false);
  }

  function itemInputHandler(enteredText){
    setEnteredItemText(enteredText);
  }

  function AddItemHandler(){
    console.log(enteredItemText);
    if (shoppingItems === ""){
      setShoppingItems(enteredItemText);
   }else{
      setShoppingItems(shoppingItems + "\n" + enteredItemText);
   }
   setEnteredItemText("");
   endAddItemHandler();
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
          <Text style={styles.listText}>{shoppingItems}</Text>
        </View>

        <Modal visible={modalIsVisible} animationType="slide">
          <SafeAreaView style={styles.appContainer}>
            <View style={styles.inputContainer}>
              <Image 
                style={styles.image} 
                source={require("./assets/images/ShoppingCart.png")}
              />

              <TextInput 
                style={styles.textInput}
                placeholder= "Enter Item Here"
                onChangeText={itemInputHandler}
                value={enteredItemText}
              />

              <View style={styles.modalButtonContainer}>
                <View style={styles.modalbutton}>
                  <Button 
                    title="Add Item"
                    color="#b180f0"
                    onPress={AddItemHandler}
                  />
                </View>

                <View style={styles.button}>
                  <Button title="Cancel"
                  color="#f1449b"
                  onPress={endAddItemHandler}
                  />
                </View>
              </View>
            </View>
         </SafeAreaView>
        </Modal>
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
  addbuttonContainer:{
    
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
    backgroundColor: "#ffffff",
    alignItems: "center",
  }, 
  listText:{
    fontSize:20, 
    color: "black",
  },
  inputContainer: {
    flex:1, 
    justifyContent:"center",
    alignItems: "center",
    padding: 16,
    width: "90%",
    backgroundColor: "#311b6b",
  },
  image:{
    width:100,
    height:100,
    margin:20,
  },
  textInput:{
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438", 
    borderRadius: 6, 
    width: "100%",
    padding:12,
  },
  modalButtonContainer:{
    flexDirection: "row",
    marginTop: 16,

  }, 
  modalButton:{
    width:"30%",
    marginHorizontal: 8,
  },

});
