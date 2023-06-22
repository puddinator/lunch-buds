import { useRef, ReactNode, useState } from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";
import { Video } from "expo-av";

export const LottieSplash = (props: {
  setIsAnimationFinish: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { setIsAnimationFinish } = props;

  return (
    <>
      <Video
        source={require("../../assets/videos/LunchBudsLoading.mp4")}
        style={{ flex: 1 }}
        shouldPlay={true}
        onPlaybackStatusUpdate={(playbackStatus) => {
          // @ts-ignore shld be a mistake in type of component
          if (playbackStatus.didJustFinish) {
            setIsAnimationFinish(true);
          }
        }}
      />

      <View
        style={{
          backgroundColor: "#FFFBEC",
          position: "absolute",
          height: 10000, // im not sure if this will cause any problems
          width: 10000, // otherwise get actual dimensions from Dimensions
          zIndex: -1,
        }}
      />
    </>
  );
};
