import { Video } from "expo-av";
import { View, Text, Image, Modal, VStack, HStack } from "native-base";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { HomeStackNavigationProps } from "../../../routes/HomeRoutes";
import { Button, Dimensions, TouchableOpacity } from "react-native";

export const GrowTreeScreen = () => {
  const navigation = useNavigation<HomeStackNavigationProps>();
  const [modalVisible, setModalVisible] = useState(false);
  const [isPlaybackComplete, setIsPlaybackComplete] = useState(false);

  const windowHeight = Dimensions.get("window").height;

  return (
    <>
      <Video
        source={require("../../../../assets/videos/GrowingAnimation.mp4")}
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
      <PromptButton navigation={navigation} setModalVisible={setModalVisible} />
      {isPlaybackComplete && <DoneButton navigation={navigation} />}

      <Modal
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
        avoidKeyboard
        justifyContent="center"
        bottom="4"
        size="lg"
      >
        <Modal.Content backgroundColor={"#FFFBEC"} height={windowHeight * 0.6}>
          <Modal.CloseButton />
          <Modal.Header>Conversation Starters</Modal.Header>
          <Modal.Body>
            <VStack alignItems={"center"} space={2}>
              <Text>Why are you gae</Text>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                }}
                style={{ marginTop: 10 }}
              >
                <Text>Next</Text>
              </TouchableOpacity>
            </VStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
};

const DoneButton = ({ navigation }: any) => {
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
        top: "10%",
        left: "30%",
      }}
      onPress={() => {
        setModalVisible(true);
      }}
    >
      <Image
        source={require("../../../../assets/images/ButtonPrompt.png")}
        style={{ width: 150, height: 50 }}
      />
    </TouchableOpacity>
  );
};
