import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { BookmarksContext } from "../store/context/bookmarks-context";
import { NEWS } from "../data/dummy_data";
import NewsList from "../components/List/NewsList";
import Colors from "../constants/colors";

// BookmarksScreen component
function BookmarksScreen() {
  // Get bookmarked news from context
  const bookmarkedNewsCtx = useContext(BookmarksContext);

  // Filter bookmarked news from dummy data
  const bookmarkedNews = NEWS.filter((newsItem) => {
    return bookmarkedNewsCtx.ids.includes(newsItem.id);
  });

  // Render text if no bookmarks, otherwise render NewsList
  if (bookmarkedNews.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You Have no saved listings yet...</Text>
      </View>
    );
  } else {
    return <NewsList items={bookmarkedNews} />;
  }
}

export default BookmarksScreen;

// Styles for the component
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  text: {
    fontSize: 25,
    textAlign: "center",
    fontFamily: "newsBold",
    color: Colors.primary300,
    opacity: 0.6,
  },
});
