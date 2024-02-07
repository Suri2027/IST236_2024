import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
// Import component MovieItem
import MovieItem from './components/movieItem';

export default function App() {
  // Manage the list of movies
  const [movieItems, setMovieItems] = useState([
    {
      name: "Coco",
      image: require("./assets/images/coco.jpg"),
      rating: "9.5",
    },
    {
      name: "Avatar",
      image: require("./assets/images/avatar.jpg"),
      rating: "9.5",
    },
    {
      name: "UP",
      image: require("./assets/images/up.jpg"),
      rating: "9.0",
    },
    {
      name: "Ice Age",
      image: require("./assets/images/iceAge.jpg"),
      rating: "9.0",
    },
    {
      name: "The Lion King",
      image: require("./assets/images/theLionKing.jpg"),
      rating: "8.5",
    },
    {
      name: "The Whale",
      image: require("./assets/images/theWhale.jpg"),
      rating: "8.5",
    },
    {
      name: "The Creator",
      image: require("./assets/images/theCreator.jpg"),
      rating: "8.5",
    },
    {
      name: "Past Lives",
      image: require("./assets/images/pastLives.jpg"),
      rating: "8.0",
    },
    {
      name: "Inside Out",
      image: require("./assets/images/insideOut.jpg"),
      rating: "8.0",
    },
    {
      name: "Oppenheimer",
      image: require("./assets/images/oppenheimer.jpg"),
      rating: "7.5",
    },
  ]);
  return (
    <>
    {/* Add the status bar */}
    <StatusBar style='dark'/>
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Top 10 Movies</Text>
      </View>

      <View style={styles.listContainer}>
      {/* Enable scrolling for the movie list */}
        <ScrollView
        // Hide the vertical scroll indicator
        showsVerticalScrollIndicator={false}
        // Disable vertical bounce effect
        alwaysBounceVertical={false}
        >
          {/* Map through the movieItems array and render MovieItem components */}
            {movieItems.map((itemData) => (
              // MovieItem component with details passed as props
            <MovieItem 
            name={itemData.name} 
            image ={itemData.image} 
            rating={itemData.rating}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
    </>
  );
}

// Styles for different components within the app
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#c57bed',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40
  },
  titleContainer:{
    flex:1,
    justifyContent:"center",
    marginBottom: 20,
    paddingHorizontal: 5,
    borderWidth: 10,
    borderRadius: 10,
  },
  title: {
    fontSize:55,
    fontWeight:"bold",
  },
  listContainer:{
    flex:8,
    width: "90%"
  },
});

