import { useNavigation } from "@react-navigation/native";
import {
  Button,
  FlatList,
  HStack,
  Image,
  Modal,
  Text,
  VStack,
} from "native-base";
import { useEffect, useState } from "react";
import { Dimensions, TouchableOpacity, View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

import { BackButton } from "../../../components/BackButton";
import { ProfileCard } from "../../../components/ProfileCard";
import { NewMatchesStackNavigationProps } from "../../../routes/NewMatchesRoutes";
import { useQuery } from "react-query";
import { profileDatas } from "../../../utils/data";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ShowMatchesScreen = () => {
  const navigation = useNavigation<NewMatchesStackNavigationProps>();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(profileDatas[0]);
  const [myProfile, setMyProfile] = useState<any>();

  const windowHeight = Dimensions.get("window").height;

  const { isLoading, data: responseData } = useQuery(
    "openToMatchProfiles",
    async () => {
      return await axios.get(
        "https://lunch-buds-backend.vercel.app/api/users/"
      );
    }
  );

  useEffect(() => {
    (async () => {
      // @ts-ignore
      setMyProfile(JSON.parse(await AsyncStorage.getItem("profile")));
    })();
  }, []);

  const profileData = responseData?.data.users as typeof profileDatas;
  console.log(profileData);
  console.log(myProfile);

  return (
    <>
      <BackButton customStyle={{ marginTop: 3 }} />
      <View
        style={{
          flex: 1,
          backgroundColor: "#FFFBEC",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 30,
            padding: 10,
            marginTop: 20,
          }}
        >
          Search Results
        </Text>
        <FlatList
          data={profileData}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            if (item.email !== myProfile.email) {
              return (
                <ProfileCard
                  name={item.name}
                  match={myProfile.interests
                    .filter((value: string) => item.interests.includes(value))
                    .join(", ")}
                  otherInterests={item.interests.join(", ")}
                  number={item.number}
                  handlePress={() => {
                    setSelectedProfile(item);
                    setModalVisible(true);
                  }}
                />
              );
            } else return null;
          }}
          keyExtractor={(profile) => profile.id}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          ListFooterComponent={
            <VStack alignItems={"center"} space={2}>
              <Button onPress={() => {}}>Save your match search</Button>
              <Text>Let other's find you!</Text>
            </VStack>
          }
          ListFooterComponentStyle={{ margin: 10 }}
        />

        <Modal
          isOpen={modalVisible}
          onClose={() => setModalVisible(false)}
          avoidKeyboard
          justifyContent="center"
          bottom="4"
          size="lg"
        >
          <Modal.Content
            backgroundColor={"#FFFBEC"}
            height={windowHeight * 0.6}
          >
            <Modal.CloseButton />
            <Modal.Body>
              <VStack alignItems={"center"} space={2}>
                <Image
                  source={
                    Math.floor(Math.random() * 2) == 0
                      ? require("../../../../assets/images/ProfileIcon.png")
                      : require("../../../../assets/images/Female.png")
                  }
                  alt="avatar"
                  height={56}
                  width={32}
                />
                <HStack>
                  <Text>Name: </Text>
                  <Text>{selectedProfile.name}</Text>
                </HStack>
                <HStack>
                  <Text>Date and Time: </Text>
                  <Text>{selectedProfile.dateTime}</Text>
                </HStack>
                <HStack>
                  <Text>H/P Number: </Text>
                  <Text>{selectedProfile.number}</Text>
                </HStack>
                <HStack space={2}>
                  <Button>Message</Button>
                  <Button>Call</Button>
                </HStack>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(false);
                    navigation.navigate("Match Connect", {
                      myProfile,
                      selectedProfile,
                    });
                  }}
                  style={{ marginTop: 10 }}
                >
                  <HStack alignItems={"center"} space={2}>
                    {/* <Text fontSize={20} paddingBottom={3}>
                      Let's grow!
                    </Text> */}
                    <Image
                      source={require("../../../../assets/images/ButtonConnect.png")}
                      style={{
                        width: 150,
                        height: 100,
                      }}
                    />
                  </HStack>
                </TouchableOpacity>
              </VStack>
            </Modal.Body>
          </Modal.Content>
        </Modal>
      </View>

      <Spinner visible={isLoading} />
    </>
  );
};
