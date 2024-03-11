import { View, Text, StyleSheet, FlatList } from "react-native";
import { useLayoutEffect } from "react";

// Importing dummy data for countries and destinations
import { COUNTRIES, DESTINATIONS } from "../data/dummy-data";

// Importing the DestinationItem component for rendering individual destination items
import DestinationItem from "../components/DestinationItem";

// Functional component for rendering the list of destinations for a specific country
function DestinationsOverviewScreen(props) {
  // Extracting the countryId from the route parameters
  const countryId = props.route.params.countryId;

  // Setting the screen title based on the selected country
  useLayoutEffect(() => {
    const country = COUNTRIES.find((country) => country.id == countryId);
    props.navigation.setOptions({ title: country ? country.name : null });
  }, [countryId, props.navigation]);

  // Filtering destinations based on the selected countryId
  const displayedDestinations = DESTINATIONS.filter((destinationItem) => {
    return destinationItem.countryId === countryId;
  });

  // Function to render individual destination items in the FlatList
  function renderDestinationItem(itemData) {
    const destinationItemProps = {
      name: itemData.item.name,
      imageUrl: itemData.item.imageUrl,
      costVisit: itemData.item.costVisit,
      foundedYear: itemData.item.foundedYear,
      rating: itemData.item.rating,
      description: itemData.item.description,
      listindex: itemData.item.index,
    };
    // Rendering the DestinationItem component with the specified props
    return <DestinationItem {...destinationItemProps} />;
  }

  // Rendering the main view
  return (
    <View style={StyleSheet.container}>
      {/* FlatList to display the list of destinations */}
      <FlatList
        data={displayedDestinations}
        keyExtractor={(item) => item.id}
        renderItem={renderDestinationItem}
      />
    </View>
  );
}

// Exporting the DestinationsOverviewScreen component as the default export
export default DestinationsOverviewScreen;

// StyleSheet for styling the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
