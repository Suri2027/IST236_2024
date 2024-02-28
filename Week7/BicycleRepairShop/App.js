import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { useState, useCallback } from "react";
import { useMemo } from "react";
import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
//Import Constants
import Colors from "./constants/colors";
//Import splashscreen library
import * as SplashScreen from "expo-splash-screen";
//Import screens
import HomeScreen from "./screens/HomeScreen";
import OrderReviewScreen from "./screens/OrderReviewScreen";

export default function App() {
  //Set up our custom fonts
  const [fontsLoaded, fontError] = useFonts({
    bicycleRegular: require("./assets/fonts/KodeMono-Regular.ttf"),
    bicycleMedium: require("./assets/fonts/KodeMono-Medium.ttf"),
    bicycleBold: require("./assets/fonts/KodeMono-Bold.ttf"),
  });

  // Hide splashscreen after fonts are loaded
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      //Turn of the the splashscreen when the font is uploaded
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // State variables
  const [currentScreen, setCurrentScreen] = useState("");
  const [currentPrice, setCurrentPrice] = useState(0);

  // radio button options for repair time
  const repairTimeRadioButtons = useMemo(
    () => [
      {
        id: "0",
        label: "Standard",
        value: "Standard",
        price: 0,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "1",
        label: "Expedited",
        value: "Expedited",
        price: 50,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "2",
        label: "Next Day",
        value: "Next Day",
        price: 100,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
    ],
    []
  );
  // State variables for repair time and services
  const [repairTimeId, setRepairTimeId] = useState(0);
  const [services, setServices] = useState([
    { id: 0, name: "Basic Tune-Up", value: false, price: 50 },
    { id: 1, name: "Comprehensive Tune-Up", value: false, price: 75 },
    { id: 2, name: "Flat Tire Repair", value: false, price: 20 },
    { id: 3, name: "Brake Servicing", value: false, price: 50 },
    { id: 4, name: "Gear Servicing", value: false, price: 40 },
    { id: 5, name: "Chain Servicing", value: false, price: 15 },
    { id: 6, name: "Frame Repair", value: false, price: 35 },
    { id: 7, name: "Safety Check", value: false, price: 25 },
    { id: 8, name: "Accessory Install", value: false, price: 10 },
  ]);
  // State variables for newsletter and rental membership
  const [newsletter, setNewsletter] = useState(false);
  const [rentalMembership, setRentalMembership] = useState(false);

  //Set the checkbox handler for services
  function setServicesHandler(id) {
    setServices((prevServices) =>
      prevServices.map((item) =>
        item.id === id ? { ...item, value: !item.value } : item
      )
    );
  }

  //Set the switch handler for newsletter
  function setNewsletterHandler() {
    setNewsletter((previous) => !previous);
  }
  // Switch handler for rental membership
  function setRentalMembershipHandler() {
    setRentalMembership((previous) => !previous);
  }
  // Handler to reset state and go to the home screen
  function HomeScreenHandler() {
    setCurrentPrice(0);
    setCurrentScreen("home");
  }
  // Handler to calculate the order review price
  function orderReviewHandler() {
    let price = 0;
    for (let i = 0; i < services.length; i++) {
      if (services[i].value) {
        price = price + services[i].price;
      }
    }
    // Add additional charges based on newsletter and rental membership
    if (newsletter) {
      price = price;
    }
    if (rentalMembership) {
      price = price + 100;
    }
    // Add repair time cost
    price = price + repairTimeRadioButtons[repairTimeId].price;
    // Update state
    setCurrentPrice(price);
    setCurrentScreen("review");
  }
  //Set screens to render
  let screen = (
    <HomeScreen
      repairTimeId={repairTimeId}
      services={services}
      newsletter={newsletter}
      rentalMembership={rentalMembership}
      repairTimeRadioButtons={repairTimeRadioButtons}
      onSetRepairTimeId={setRepairTimeId}
      onSetServices={setServicesHandler}
      onSetNewsletter={setNewsletterHandler}
      onSetRentalMembership={setRentalMembershipHandler}
      onNext={orderReviewHandler}
    />
  );

  if (currentScreen == "review") {
    screen = (
      <OrderReviewScreen
        repair={repairTimeRadioButtons[repairTimeId].value}
        services={services}
        newsletter={newsletter}
        rentalMembership={rentalMembership}
        price={currentPrice}
        onNext={HomeScreenHandler}
      />
    );
  }

  //Ensure that the whole app uploaded before you can see the first screen
  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    return (
      <>
        <StatusBar style="light" />
        <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
      </>
    );
  }
}
//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent500,
  },
});
