import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { Video } from "expo-av";
import { Button, Image, Modal, Text, VStack, View } from "native-base";
import React, { useEffect, useState } from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { useMutation } from "react-query";
import { HomeStackNavigationProps } from "../../../routes/HomeRoutes";

const getPrompts = async () => {
  const mid = await AsyncStorage.getItem("matchID");
  console.log("test", mid);
  const data = { isCreator: true };
  return axios.post(
    `https://lunch-buds-backend.vercel.app/api/matches/prompts/${mid}`,
    data
  );
};

export const GrowTreeScreen = () => {
  const navigation = useNavigation<HomeStackNavigationProps>();
  const [modalVisible, setModalVisible] = useState(false);
  const [promptIndex, setPromptIndex] = useState(0);
  const [isPlaybackComplete, setIsPlaybackComplete] = useState(false);

  const {
    isLoading: isLoadingPrompts,
    data: responseData,
    mutate,
  } = useMutation({
    mutationFn: getPrompts,
  });

  useEffect(() => {
    mutate();
  }, []);

  const windowHeight = Dimensions.get("window").height;
  // @ts-ignore
  const prompts = responseData?.data.prompts;

  console.log("TEST", modalVisible, isLoadingPrompts, prompts);

  return (
    <>
      <Spinner visible={modalVisible && isLoadingPrompts} />
      <Video
        source={require("../../../../assets/videos/GrowingAnimation.mp4")}
        style={{
          flex: 1,
          transform: [{ rotate: "90deg" }],
          width: 580,
          height: 300,
          right: 100,
          top: 35,
        }}
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
          height: 10000, // im not sure if this will cause any problems
          width: 10000, // otherwise get actual dimensions from Dimensions
          zIndex: -1,
        }}
      ></View>
      <PromptButton navigation={navigation} setModalVisible={setModalVisible} />
      {isPlaybackComplete && <DoneButton navigation={navigation} />}

      {!isLoadingPrompts && prompts && (
        <Modal
          isOpen={modalVisible}
          onClose={() => {
            setModalVisible(false);
            setPromptIndex(0);
          }}
          avoidKeyboard
          justifyContent="center"
          bottom="4"
          size="lg"
        >
          <Modal.Content
            backgroundColor={"#FFFBEC"}
            // height={windowHeight * 0.6}
          >
            <Modal.CloseButton />
            <Modal.Header>Conversation Starters</Modal.Header>
            <Modal.Body>
              <VStack alignItems={"center"} space={2}>
                <Text fontSize={20}>{prompts[promptIndex]}</Text>

                <Button
                  onPress={() => {
                    setPromptIndex((current) => (current += 1));
                  }}
                  style={{ marginTop: 10 }}
                >
                  <Text fontSize={20} color={"white"}>
                    Next
                  </Text>
                </Button>
              </VStack>
            </Modal.Body>
          </Modal.Content>
        </Modal>
      )}
    </>
  );
};

const DoneButton = ({ navigation }: any) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        position: "absolute",
        bottom: "1%",
        left: "30%",
      }}
      onPress={() => {
        navigation.navigate("Home");
      }}
    >
      <Image
        source={require("../../../../assets/images/ButtonDone.png")}
        style={{ width: 150, height: 50 }}
      />
    </TouchableOpacity>
  );
};

const PromptButton = ({ navigation, setModalVisible }: any) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        position: "absolute",
        top: "5%",
        left: "30%",
      }}
      onPress={() => {
        setModalVisible(true);
      }}
    >
      <Image
        source={require("../../../../assets/images/ButtonPrompt.png")}
        style={{
          width: 170,
          height: 100,
          justifyContent: "center",
        }}
      />
    </TouchableOpacity>
  );
};
