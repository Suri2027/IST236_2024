import { View, StyleSheet, Image, Text, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
//Import components
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import NotesItem from "../components/NotesItem";
import NoteView from "../modals/NoteView";
import { useState } from "react";

function NotesScreen(props) {
  //Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();
  
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [modalNoteTitle, setModalNoteTitle] = useState("");
  const [modalNoteText, setModalNoteText] = useState("");

  function noteViewHandler(title, text) {
    setModalNoteTitle(title);
    setModalNoteText(text);
    setModalIsVisible(true);
  }
  function closeNoteViewHandler() {
    setModalIsVisible(false);
  }

  //Design the Home screen to display the title, image, tel, addres and website. Also display a button to go to the menu screen
  return (
    <View
      style={[
        styles.rootcontainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <View style={styles.titleContainer}>
        <Title>Current Thoughts</Title>
      </View>

      <View style={styles.itemContainer}>
        <FlatList
          data={props.currentNotes}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
          renderItem={(itemData) => {
            return (
              <NotesItem
                id={itemData.item.id}
                title={itemData.item.title}
                onView={noteViewHandler.bind(
                  this,
                  itemData.item.title,
                  itemData.item.text
                )}
                onDelete={props.onDelete.bind(this, itemData.item.id)}
              />
            );
          }}
        />
      </View>

      <NoteView
        visible={modalIsVisible}
        title={modalNoteTitle}
        text={modalNoteText}
        onClose={closeNoteViewHandler}
      />

      <View style={styles.navButtonContainer}>
        <View style={styles.navButton}>
          <NavButton onNext={props.onAdd}>Add New Note</NavButton>
        </View>
        <View style={styles.navButton}>
          <NavButton onNext={props.onHome}>Return Home</NavButton>
        </View>
      </View>
    </View>
  );
}

export default NotesScreen;

//Styles
const styles = StyleSheet.create({
  rootcontainer: {
    flex: 1,
    width: "90%",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  itemContainer: {
    flex: 6,
  },
  navButtonContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  navButton: {
    marginHorizontal: 10,
  },
});
