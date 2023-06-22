import { useNavigation } from "@react-navigation/native";
import { Image, Modal, Text, VStack } from "native-base";
import React, { useEffect, useState } from "react";
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
  const [modalVisible, setModalVisible] = useState(false);

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
      <Image
        source={require("../../../../assets/images/Flower1.png")}
        style={styles.flower1}
      />
      <Image
        source={require("../../../../assets/images/Flower2.png")}
        style={styles.flower2}
      />
      <ShopButton navigation={navigation} />
      <WaterButton setModalVisible={setModalVisible} />
      <TutorialButton navigation={navigation} />

      <Modal
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
        avoidKeyboard
        justifyContent="center"
        bottom="4"
        size="lg"
      >
        <Modal.Content backgroundColor={"#FFFBEC"} width="380px" height="150px">
          <Modal.CloseButton />
          <Modal.Body>
            <VStack alignItems={"center"} space={2}>
              <Text style={{ fontSize: 20 }}>You have watered your</Text>
              <Text style={{ fontSize: 20 }}>trees for today!</Text>
              <Image
                source={require("../../../../assets/images/WateringCan.png")}
                style={styles.waterIcon}
              />
              <Text style={{ fontSize: 24 }}> 125 Apples collected.</Text>
              <Image
                source={require("../../../../assets/images/Apple.png")}
                style={styles.modalimage}
              />
            </VStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
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
        navigation.navigate("Shop");
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
const WaterButton = ({ setModalVisible }: any) => {
  return (
    <TouchableOpacity
      style={styles.RightbuttonContainer}
      onPress={() => setModalVisible(true)}
    >
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
  modalimage: {
    position: "absolute",
    top: 88,
    left: 25,
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
    marginTop: "35%",
  },
  tree1: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 340,
    left: 180,
  },
  tree2: {
    width: 80,
    height: 150,
    position: "absolute",
    top: 300,
    left: 85,
  },
  flower1: {
    width: 20,
    height: 20,
    position: "absolute",
    top: 450,
    left: 180,
  },
  flower2: {
    width: 20,
    height: 20,
    position: "absolute",
    top: 450,
    left: 250,
  },
});
