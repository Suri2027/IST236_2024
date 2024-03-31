import { View, Text, StyleSheet, Image } from "react-native";
import { NEWS } from "../data/dummy_data";
import { useContext, useLayoutEffect, useState } from "react";
import BookmarkButton from "../components/BookmarkButton";
import Colors from "../constants/colors";
import { BookmarksContext } from "../store/context/bookmarks-context";

// Functional component to display details of a news item
function NewsDetailScreen(props) {
  // Get bookmarked news from context
  const bookmarkedNewsCtx = useContext(BookmarksContext);

  const newsId = props.route.params.newsId; // Extract newsId from navigation params
  const selectedNews = NEWS.find((news) => news.id === newsId); // Find the selected news item

  // Check if the news item is bookmarked
  const newsIsBookmarked = bookmarkedNewsCtx.ids.includes(newsId);

  // Function to handle bookmark status change
  function changeBookmarkStatusHandler() {
    if (newsIsBookmarked) {
      bookmarkedNewsCtx.removeFavorite(newsId);
    } else {
      bookmarkedNewsCtx.addFavorite(newsId);
    }
  }

  // Update navigation options
  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: "", // Hide the title
      headerRight: () => {
        return (
          <BookmarkButton // Render BookmarkButton component in the header
            pressed={newsIsBookmarked}
            onPress={changeBookmarkStatusHandler}
          />
        );
      },
    });
  }, [props.navigation, changeBookmarkStatusHandler]); // Update when navigation or button state changes

  // Render the news details
  return (
    <View style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: selectedNews.imageUrl }} />
      </View>

      {/* Display the news details */}
      <View style={styles.infoContainer}>
        <Text style={styles.headline}>{selectedNews.headline}</Text>
        <Text style={styles.date}> {selectedNews.date}</Text>
        <Text style={styles.author}>By {selectedNews.author}</Text>
        <Text style={styles.agency}> {selectedNews.agency}</Text>
        <Text style={styles.description}>{selectedNews.description}</Text>
      </View>
    </View>
  );
}

export default NewsDetailScreen;

// Styles for the component
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  imageContainer: {
    marginVertical: 10,
    height: 300,
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 7,
  },
  infoContainer: {
    borderRadius: 7,
    backgroundColor: Colors.primary500o8,
    flex: 1,
    alignItems: "center",
  },
  headline: {
    color: Colors.primary300,
    fontSize: 28,
    fontFamily: "newsBold",
    paddingBottom: 10,
    paddingTop: 10,
    textAlign: "center",
  },
  date: {
    color: Colors.primary300,
    fontSize: 20,
    fontFamily: "newsMedium",
    paddingBottom: 5,
  },

  author: {
    color: Colors.primary300,
    textAlign: "center",
    width: "100%",
    fontSize: 18,
    fontFamily: "newsLight",
    paddingBottom: 5,
  },
  agency: {
    color: Colors.primary300,
    fontSize: 15,
    fontFamily: "newsLight",
    marginBottom: 30,
  },
  description: {
    color: Colors.primary300,
    width: "90%",
    textAlign: "justify",
    fontSize: 17,
    fontFamily: "newsRegular",
  },
});
