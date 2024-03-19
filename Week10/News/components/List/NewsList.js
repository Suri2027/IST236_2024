import { View, StyleSheet, FlatList } from "react-native";
import NewsItem from "./NewsItem";

// Functional component to render a list of news items
function NewsList(props) {
   // Function to render each news item
  function renderNewsItem(itemData) {
    // Extract individual news item data and pass it as props to NewsItem component
    const newsItemProps = {
      id: itemData.item.id,
      headline: itemData.item.headline,
      date: itemData.item.date,
      author: itemData.item.author,
      agency: itemData.item.agency,
      description: itemData.item.description,
      imageUrl: itemData.item.imageUrl,
      newsIndex: itemData.index,
    };
    return <NewsItem {...newsItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={props.items} // Data source for the list
        keyExtractor={(item) => item.id} // Function to extract keys from items
        renderItem={renderNewsItem} // Function to render each item
        showsVerticalScrollIndicator={false} // Hide vertical scroll indicator
      />
    </View>
  );
}

export default NewsList;

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "gray",
  },
  backgroundImage: {
    opacity: 0.1,
  },
});
