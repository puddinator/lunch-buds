import { useNavigation } from "@react-navigation/native";
import {
  Button,
  FlatList,
  FormControl,
  HStack,
  Input,
  Modal,
  Text,
  VStack,
  Image,
} from "native-base";
import { Dimensions, TouchableOpacity, View } from "react-native";
import { ProfileCard } from "../../../components/ProfileCard";
import { NewMatchesStackNavigationProps } from "../../../routes/NewMatchesRoutes";
import { profileData } from "../../../utils/data";
import { useState } from "react";
import { BackButton } from "../../../components/BackButton";
import { SearchButton } from "../../../components/SearchButton";

export const ShowMatchesScreen = () => {
  const navigation = useNavigation<NewMatchesStackNavigationProps>();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(profileData[0]);

  const windowHeight = Dimensions.get("window").height;

  return (
    <>
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
          renderItem={({ item }) => (
            <ProfileCard
              name={item.name}
              match={item.match}
              otherInterests={item.otherInterests}
              number={item.number}
              handlePress={() => {
                setSelectedProfile(item);
                setModalVisible(true);
              }}
            />
          )}
          keyExtractor={(profile) => profile.id}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
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
                  source={require("../../../../assets/images/ProfileIcon.png")}
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
                    navigation.navigate("Match Connect");
                  }}
                  style={{ marginTop: 10 }}
                >
                  <HStack alignItems={"center"} space={2}>
                    <Text fontSize={20} paddingBottom={3}>
                      Let's grow!
                    </Text>
                    <Image
                      source={require("../../../../assets/images/NextButton.png")}
                      style={{
                        width: 64,
                        height: 54,
                      }}
                    />
                  </HStack>
                </TouchableOpacity>
              </VStack>
            </Modal.Body>
          </Modal.Content>
        </Modal>
      </View>
    </>
  );
};
