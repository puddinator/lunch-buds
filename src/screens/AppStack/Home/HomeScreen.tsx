import { useNavigation } from "@react-navigation/native";
import { Image, Text } from "native-base";
import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { HomeStackNavigationProps } from "../../../routes/HomeRoutes";
import AsyncStorage from "@react-native-async-storage/async-storage";


const checkIfNewProfile = async () => {
  try {
    const value = await AsyncStorage.getItem("isNewProfile");
    if (value === "true") {
      return true;
    }
    return false;
  } catch (e) {
    console.log("error with getting isNewProfile");
  }
};


export const HomeScreen = () => {
  const navigation = useNavigation<HomeStackNavigationProps>();

  useEffect(() => {
    (async () => {
      if ((await checkIfNewProfile()) === true) {
        navigation.navigate("Tutorial");
      }
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../../../assets/images/LunchBudsLogo.png")}
        style={styles.logo}
      />
      <Image
        source={require("../../../../assets/images/Garden.png")}
        style={styles.maingarden}
      />
      <Image
        source={require("../../../../assets/images/TreeGreen.png")}
        style={styles.tree1}
      />
      <Image
        source={require("../../../../assets/images/TreeRed.png")}
        style={styles.tree2}
      />
      <ShopButton navigation={navigation} />
      <WaterButton />
      <TutorialButton navigation={navigation} />
    </SafeAreaView>
  );
};

interface IShopButton {
  navigation: HomeStackNavigationProps;
}
interface TotutorialButton {
  navigation: HomeStackNavigationProps;
}

//Shop Button--------------------------------------------------------------------------------------
const ShopButton = ({ navigation }: IShopButton) => {
  return (
    <TouchableOpacity
      style={styles.LeftbuttonContainer}
      onPress={() => {
        navigation.navigate("Prompts");
      }}
    >
      <Image
        source={require("../../../../assets/images/Apple.png")}
        style={styles.image}
      />
      <Text style={styles.buttonText}>Shop</Text>
    </TouchableOpacity>
  );
};

//Tutorial Button--------------------------------------------------------------------------------------
const TutorialButton = ({ navigation }: TotutorialButton) => {
  return (
    <TouchableOpacity
      style={styles.TopLeftbuttonContainer}
      onPress={() => {
        navigation.navigate("Tutorial");
      }}
    >
      <Image
        source={require("../../../../assets/images/ButtonTutorial.png")}
        style={styles.image1}
      />
    </TouchableOpacity>
  );
};

//Watering Button--------------------------------------------------------------------------------------
const WaterButton = () => {
  return (
    <TouchableOpacity style={styles.RightbuttonContainer}>
      <Image
        source={require("../../../../assets/images/WateringCan.png")}
        style={styles.waterIcon}
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
    left: "8%",
    bottom: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  TopLeftbuttonContainer: {
    // TO TUTORIAL BUTTON
    position: "absolute",
    right: "1%",
    top: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
  RightbuttonContainer: {
    // WATER BUTTON
    position: "absolute",
    right: "8%",
    bottom: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 45,
    height: 35,
  },
  image1: {
    width: 100,
    height: 100,
  },
  waterIcon: {
    width: 45,
    height: 35,
    paddingRight: 10,
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
  maingarden: {
    width: 300,
    height: 200,
    marginTop: "50%",
  },
  tree1: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 450,
  },
  tree2: {
    width: 80,
    height: 150,
    position: "absolute",
    top: 370,
    left: 85,
  },
});
