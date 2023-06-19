import { LinearGradient } from "expo-linear-gradient";
import { Button, Image, Stack, Text } from "native-base";
import { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, View, StyleSheet, TouchableOpacity } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

//Added:
import { HomeStackNavigationProps } from "../routes/HomeRoutes";

import {
  PasswordInput,
  UsernameInput,
} from "../components/AuthStack/LoginInput";
import { BackButton } from "..//components/BackButton";
import { AuthContext } from "../contexts/AuthContext";
import { ISignInProps } from "../contexts/interfaces/IAuthProvider";

export const Tutorial = () => {
  const navigation = useNavigation<HomeStackNavigationProps>();

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
        source={require("../../assets/images/ButtonContinue.png")}
        style={styles.image}
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

  image: {
    width: 45,
    height: 35,
  },

});