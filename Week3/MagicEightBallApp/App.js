import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, Pressable, TextInput, Modal } from 'react-native';

export default function App() {
   
  // Array of possible responses from the Magic Eight Ball
  const responses = [ "It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it",
  "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later",
  "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no",
  "My sources say no", "Outlook not so good","Very doubtful"];
  //Create state management variables
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [userQuestion, setUserQuestion] = useState("");
  const [response, setResponse] = useState("");
   
   // Function to generate a random response from the responses array
  function randomAnswer() {
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    setResponse(randomResponse);

  }
     
  return (
    <>
      {/* set status bar styling */}
      <StatusBar style="auto"/>
      {/* Set SafeAreaView screen container */}
      <SafeAreaView style={styles.container}>
        {/* Tittle of the app */}
        <View style={styles.titleContainer}>
          <View style={styles.titleBackground}>
            <Text style={styles.title}>Magic Eight Ball App</Text>
          </View>
        </View>
        {/* Get the user question as an input */}
        <Text style={styles.inputLabel}>Enter Your Question:</Text>
        <TextInput
          style={styles.textInput}
          // Update userQuestion state
          onChangeText={(text) => setUserQuestion(text)} 
        />
        {/* submit Button */}
        <View style={styles.submitButtonContainer}>
          <Pressable
            // Add the android ripple 
            android_ripple = {{color: "#ff6f6f"}}
            //Style the button when pressed
            style={({ pressed }) => pressed && styles.pressedButton}
            //When pressed, open model screen
            onPress={() => {
              randomAnswer();
              setModalIsVisible(true);
            }}
            >
            <View style={styles.submitButton}> 
              <Text style={styles.submitButtonText}>Submit</Text>
            </View>
          </Pressable>
        </View>

        {/* Modal for displaying the user's question and the generated response */}
        <Modal visible={modalIsVisible} animationType="slide">
          <SafeAreaView style={styles.modalRoot}>
            <Text style={styles.inputLabel}>User Question:</Text>
            <Text style={styles.resultText}>{userQuestion}</Text>

            <Text style={styles.inputLabel}>Response:</Text>
            <Text style={styles.resultText}>{response}</Text>

            <View style={styles.modalButtonContainer}>
              <View style={styles.modalButton}>
                <Button title="Close" color="black" onPress={() => setModalIsVisible(false)}/>
              </View>
            </View>
          </SafeAreaView>
        </Modal>     

      </SafeAreaView>
    </>
  );
}

// set the styles 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bb4a15",
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  titleContainer:{
    flex: 1,
    justifyContent: "center",
  },
  titleBackground:{
    backgroundColor: "#df8b0e",
    padding: 10,
    paddingHorizontal: 20,
    borderWidth: 3, 
    borderRadius: 7, 
  },
  title:{
    fontSize: 45, 
    fontWeight: "bold",
    textAlign: "center", 
    fontStyle: "italic",
  },
  inputLabel:{
    fontSize: 30,
    color: "white",
    marginTop:20,  
   },
   textInput:{
    backgroundColor: "#eca682",
    borderWidth:1,
    borderRadius: 6,  
    padding:10,
    color: "#531d07",
    marginBottom:30,

   },
   submitButtonContainer: {
    flex:1,
    justifyContent: "center"
  },
  pressedButton: {
    opacity: 0.8,
  },
  submitButton:{
    backgroundColor: "brown",
    padding: 10, 
    paddingHorizontal:15, 
    borderWidth: 3, 
    borderRadius: 5,
  },
  submitButtonText: {
    fontSize: 25,
  },
  modalRoot:{
    flex: 1,
    backgroundColor: "#bb4a15",
    alignItems: 'center',
   },
   inputLabel:{
    fontSize: 25,
    color: "white",
    marginTop:20,  
   },
   resultText:{
    backgroundColor: "#eca682",
    borderWidth:1,
    borderRadius: 6,  
    padding:10,
    color: "#531d07",
    marginBottom:30,
   },
   modalButtonContainer:{
    flexDirection: "row",
    marginTop:16,
   },
   modalButton:{
    backgroundColor: "brown",
    padding: 10, 
    paddingHorizontal:15, 
    borderWidth: 3, 
    borderRadius: 5,
    fontSize: 25,
    
   },

});
