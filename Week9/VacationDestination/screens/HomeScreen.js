import { View, Text, FlatList } from "react-native";

// Importing dummy data for countries
import { COUNTRIES } from "../data/dummy-data";

// Importing the CountryGridTitle component for rendering individual country items
import CountryGridTitle from "../components/CountryGridTitle";

// Functional component for rendering the list of countries on the home screen
function HomeScreen(props) {
  // Function to render individual country items in the FlatList
  function renderCountryItem(itemData) {
    // Function to handle the press event for a country item
    function pressHandler() {
      // Navigating to the DestinationsOverviewScreen with the selected countryId
      props.navigation.navigate("DestinationsOverviewScreen", {
        countryId: itemData.item.id,
      });
    }
    // Rendering the CountryGridTitle component with specified props
    return (
      <CountryGridTitle
        name={itemData.item.name}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  // Rendering the main view
  return (
    <View>
      {/* FlatList to display the grid of countries */}
      <FlatList
        data={COUNTRIES}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={renderCountryItem}
        numColumns={2}
      />
    </View>
  );
}

// Exporting the HomeScreen component as the default export
export default HomeScreen;
