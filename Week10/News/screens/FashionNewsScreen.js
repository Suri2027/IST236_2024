import NewsList from "../components/List/NewsList";
import { NEWS } from "../data/dummy_data";

// Functional component to display fashion news
function FashionNewsScreen() {
  const type = "FashionNews"; // Define the type of news to display
  // Filter the news items based on their type
  const displayedNews = NEWS.filter((newsItem) => {
    return newsItem.type === type;
  });

  // Render the NewsList component with filtered news items as props
  return <NewsList items={displayedNews} />;
}

export default FashionNewsScreen;
