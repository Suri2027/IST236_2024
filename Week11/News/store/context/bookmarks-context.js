import { createContext, useState } from "react";

// Create a context for managing bookmarks
export const BookmarksContext = createContext({
  ids: [], // Array to store bookmarked news item IDs
  addFavorite: (id) => {}, // Function to add a news item to bookmarks
  removeFavorite: (id) => {}, // Function to remove a news item from bookmarks
});

// BookmarksContextProvider component to manage bookmark state
function BookmarksContextProvider({ children }) {
  // State to store bookmarked news item IDs
  const [bookmarkIds, setBookmarkIds] = useState([]);

  // Function to add a news item to bookmarks
  function addFavoriteBookmark(id) {
    setBookmarkIds((currentBookmarkIds) => {
      return [...currentBookmarkIds, id]; // Add new ID to the array
    });
  }
  // Function to remove a news item from bookmarks
  function removeFavoriteBookmark(id) {
    setBookmarkIds((currentBookmarkIds) => {
      return currentBookmarkIds.filter((newsId) => newsId != id); // Remove ID from the array
    });
  }
  // Create value object with bookmark state and functions
  const value = {
    ids: bookmarkIds, // Array of bookmarked news item IDs
    addFavorite: addFavoriteBookmark, // Function to add a news item to bookmarks
    removeFavorite: removeFavoriteBookmark, // Function to remove a news item from bookmarks
  };

  // Provide the value to the context
  return (
    <BookmarksContext.Provider value={value}>
      {children}
    </BookmarksContext.Provider>
  );
}

//export the cotext
export default BookmarksContextProvider;
