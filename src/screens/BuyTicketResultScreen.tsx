import { TouchableOpacity, View } from "react-native";
import { Video } from "expo-av";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { HomeStackNavigationProps } from "../routes/HomeRoutes";
import { Image } from "native-base";
import ConfettiCannon from "react-native-confetti-cannon";

export const BuyTicketResultScreen = () => {
  const navigation = useNavigation<HomeStackNavigationProps>();
  const [isPlaybackComplete, setIsPlaybackComplete] = useState(false);

  // coin toss
  const win = Math.floor(Math.random() * 2) == 0;

  return (
    <>
      <Video
        source={
          win
            ? require("../../assets/videos/LunchBudsUnboxingWin.mp4")
            : require("../../assets/videos/LunchBudsUnboxingLose.mp4")
        }
        style={{ flex: 1 }}
        shouldPlay={true}
        onPlaybackStatusUpdate={(playbackStatus) => {
          // @ts-ignore shld be a mistake in type of component
          if (playbackStatus.didJustFinish) {
            setIsPlaybackComplete(true);
          }
        }}
      />

      <View
        style={{
          backgroundColor: "#FFFBEC",
          position: "absolute",
          height: 10000,
          width: 10000,
          zIndex: -1,
        }}
      />

      {isPlaybackComplete && <ContinueButton navigation={navigation} />}
      {isPlaybackComplete && win && (
        <ConfettiCannon count={200} origin={{ x: -10, y: 0 }} />
      )}
    </>
  );
};

const ContinueButton = ({ navigation }: any) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        position: "absolute",
        bottom: "10%",
        left: "30%",
      }}
      onPress={() => {
        // navigation.pop(2); // go back 2 screens to home doesn't seem to work
        // navigation.back();
        navigation.navigate("Shop");
      }}
    >
      <Image
        source={require("../../assets/images/ButtonContinue.png")}
        style={{ width: 150, height: 50 }}
      />
    </TouchableOpacity>
  );
};
