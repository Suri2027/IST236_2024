import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
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
        <Text style={styles.text}>Add items button goes there</Text>
      </View>
      {/* Set Items to Get title container */}
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>My Items to Get</Text>
      </View>
      {/* Set the List of Items container */}
      <View style={styles.listContainer}>
        <Text style={styles.list}>List of Items Goes Here</Text>
      </View>
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
    backgroundColor: "white"
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
    backgroundColor: "#ffffff",
    justifyContent: "center",

  }, 

});
