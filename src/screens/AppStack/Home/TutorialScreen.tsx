import { LinearGradient } from "expo-linear-gradient";
import { Button, Image, Stack, Text } from "native-base";
import { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, View, StyleSheet, TouchableOpacity } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

//Added:
import { HomeStackNavigationProps } from "../../../routes/HomeRoutes";

import {
  PasswordInput,
  UsernameInput,
} from "../../../components/AuthStack/LoginInput";
import { BackButton } from "../../../components/BackButton";
import { AuthContext } from "../../../contexts/AuthContext";
import { ISignInProps } from "../../../contexts/interfaces/IAuthProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";

const setAsNotNewProfile = async () => {
  try {
    await AsyncStorage.setItem("isNewProfile", "false");
  } catch (e) {
    console.log("issue with setting isNewProfile");
  }
};

export const TutorialScreen = () => {
  const navigation = useNavigation<HomeStackNavigationProps>();

  useEffect(() => {
    (async () => {
      setAsNotNewProfile();
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ContinueButton navigation={navigation} />
    </SafeAreaView>
  );
};

//Added Continue button
interface TutorialContinueButton {
  navigation: HomeStackNavigationProps;
}

//Continue button
const ContinueButton = ({ navigation }: TutorialContinueButton) => {
  return (
    <TouchableOpacity
      style={styles.ButtonContainer}
      onPress={() => {
        navigation.navigate("Home");
      }}
    >
      <Image
        source={require("../../../../assets/images/ButtonContinue.png")}
        style={{ width: 45, height: 35 }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFBEC",
    alignItems: "center",
  },

  ButtonContainer: {
    // Continue Button
    position: "absolute",
    bottom: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
});
