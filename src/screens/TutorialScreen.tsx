import { LinearGradient } from "expo-linear-gradient";
import { Button, Image, Stack, Text } from "native-base";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, View, StyleSheet, TouchableOpacity } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

//Added:
import { HomeStackNavigationProps } from "../routes/HomeRoutes";

import {
  PasswordInput,
  UsernameInput,
} from "../components/AuthStack/LoginInput";
import { BackButton } from "../components/BackButton";
import { AuthContext } from "../contexts/AuthContext";
import { ISignInProps } from "../contexts/interfaces/IAuthProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Video } from "expo-av";

const setAsNotNewProfile = async () => {
  try {
    await AsyncStorage.setItem("isNewProfile", "false");
  } catch (e) {
    console.log("issue with setting isNewProfile");
  }
};

export const TutorialScreen = () => {
  const navigation = useNavigation<HomeStackNavigationProps>();
  const [isPlaybackComplete, setIsPlaybackComplete] = useState(false);
  // const video = useRef(null);

  useEffect(() => {
    (async () => {
      setAsNotNewProfile();
    })();
  });

  return (
    <>
      <Video
        source={require("../../assets/videos/LunchBudsTutorialV2.mp4")}
        style={{ flex: 1 }}
        shouldPlay={true}
        onPlaybackStatusUpdate={() => setIsPlaybackComplete(true)}
      />

      <View
        style={{
          backgroundColor: "#FFFBEC",
          position: "absolute",
          height: 10000, // im not sure if this will cause any problems
          width: 10000, // otherwise get actual dimensions from Dimensions
          zIndex: -1,
        }}
      ></View>
      {isPlaybackComplete && <ContinueButton navigation={navigation} />}
    </>
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
      style={{
        flex: 1,
        position: "absolute",
        bottom: "10%",
        left: "30%",
      }}
      onPress={() => {
        navigation.navigate("Home");
      }}
    >
      <Image
        source={require("../../assets/images/ButtonContinue.png")}
        style={{ width: 150, height: 50 }}
      />
    </TouchableOpacity>
  );
};
