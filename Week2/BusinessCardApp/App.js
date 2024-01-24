import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, Linking } from 'react-native';

export default function App() {
  return (
    <>
    {/* set status bar styling */}
    <StatusBar style="light"/>
    {/* Set SafeAreaView screen container */}
    <SafeAreaView style={styles.container}>
      {/* Set image(photo) container */}
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("./assets/images/photo.jpg")}/>
      </View >
      {/* Set the information container  */}
      <View style={styles.informationContainer}>
        <Text style={styles.text}>Yutsuri Danae Dobrusin</Text>
        {/* set the links with the email, phone and GitHub  */}
        <Text style={styles.text} onPress={() => Linking.openURL ("mailto:www.yutsuri.dobrusin@gmail.com")}>www.yutsuri.dobrusin@gmail.com</Text>
        <Text style={styles.text} onPress={() => Linking.openURL("tel:+18087563763")}>(808)-756-3763</Text>
        <Text style={styles.text} onPress={() => Linking.openURL("https://github.com/Suri2027")}>Git Hub Page</Text>
      </View>
    </SafeAreaView>
    </>
  );
}

// set the styles 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1bafee",
    alignItems: 'center',
    justifyContent: 'flex-end',
    
  },
  imageContainer: {
    flex: 2,
    marginTop: 45,
    width: "80%", 
    borderWidth: 10, 
    borderColor: "#0379ff",
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
  },
  image:{
    height: 300, 
    width: "100%",
    resizeMode: "cover",
    
  },
  informationContainer: {
    flex: 2.9,
    justifyContent: "center",
    alignItems: "center",
    
  },
  text:{ 
    fontSize: 20, 
    fontStyle: 'italic', 
  }
});
