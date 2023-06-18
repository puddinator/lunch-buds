import React from "react";
import { Text, Image } from "native-base";
import { View, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../../assets/images/LunchBudsLogo.png")}
        style={styles.logo}
      />
      <ShopButton />
      <WaterButton />
    </SafeAreaView>
  );
};

//Shop Button--------------------------------------------------------------------------------------
const ShopButton = () => {
  return (
    <TouchableOpacity style={styles.LeftbuttonContainer}>
      <Image
        source={require("../../../assets/images/Apple.png")}
        style={styles.image}
      />
      <Text style={styles.buttonText}>Shop</Text>
    </TouchableOpacity>
  );
};
//Watering Button--------------------------------------------------------------------------------------
const WaterButton = () => {
  return (
    <TouchableOpacity style={styles.RightbuttonContainer}>
      <Image
        source={require("../../../assets/images/WateringCan.png")}
        style={styles.image}
      />
      <Text style={styles.buttonText}>Water</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFBEC",
    alignItems: "center",
  },
  LeftbuttonContainer: {
    // SHOP BUTTON
    position: "absolute",
    left: "5%",
    bottom: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  RightbuttonContainer: {
    // WATER BUTTON
    position: "absolute",
    right: "5%",
    bottom: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 45,
    height: 35,
  },
  buttonText: {
    marginTop: 5,
    fontSize: 18,
  },
  logo: {
    width: 300,
    height: 90,
    marginTop: 60,
  },
});
