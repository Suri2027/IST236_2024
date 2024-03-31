import List from "../components/List/List";
import { LISTINGS } from "../data/dummy_data";

function  TownhousesListingsScreen() {
  const type = "Townhouse";
  const displayedListings = LISTINGS.filter((listingItem) => {
    return listingItem.type === type;
  });

  return <List items={displayedListings} />;
}

export default TownhousesListingsScreen;
