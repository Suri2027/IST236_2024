import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Functional component for displaying a news item
function NewsItem(props) {
  const navigation = useNavigation();

  // Function to handle when a news item is selected
  function selectedNewsHandler() {
    // Navigate to the NewsDetail screen and pass the news id as a parameter
    navigation.navigate("NewsDetail", {
      newsId: props.id,
    });
  }

  return (
    <View
      style={[
        styles.itemContainer,
        // Apply alternating background color based on news index
        { backgroundColor: props.newsIndex % 2 == 0 ? "#ccc" : "#fff" },
      ]}
    >
      {/* Pressable area to select the news item */}
      <Pressable onPress={selectedNewsHandler}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.headline}>{props.headline}</Text>
          <Text style={styles.date}>{props.date}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default NewsItem;

// Styles for the component
const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 5,
    paddingTop: 5,
    marginBottom: 10,
    borderRadius: 7,
  },
  imageContainer: {
    height: 300,
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 7,
  },
  infoContainer: {
    flex: 1,
    alignItems: "center",
  },
  headline: {
    fontSize: 28,
    fontFamily: "newsBold",
    paddingBottom: 10,
    paddingTop: 10,
  },
  date: {
    textAlign: "center",
    width: "100%",
    fontSize: 20,
    fontFamily: "newsMedium",
    paddingBottom: 5,
  },
});
