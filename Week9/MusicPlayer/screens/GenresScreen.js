import {
  View,
  Text,
  ImageBackground,
  FlatList,
  StyleSheet,
} from "react-native";
import { GENRES } from "../data/dummy-data";
import GenreGridTitle from "../components/GenreGridTitle";

function GenresScreen(props) {
  function renderGenreItem(itemData) {
    function pressHandler() {
      props.navigation.navigate("SongsOverview", {
        genreId: itemData.item.id,
      });
    }
    return (
      <GenreGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <ImageBackground
      source={require("../assets/images/music_back.jpeg")}
      resizeMode="cover"
      style={styles.container}
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.container}>
        <FlatList
          data={GENRES}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={renderGenreItem}
          numColumns={2}
        />
      </View>
    </ImageBackground>
  );
}

export default GenresScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.1,
  },
});
