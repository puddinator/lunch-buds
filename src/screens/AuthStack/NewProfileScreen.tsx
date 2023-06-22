import { Text, Image, Button, VStack, HStack, Input } from "native-base";
import { useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { AuthContext } from "../../contexts/AuthContext";

import { useNavigation } from "@react-navigation/native";
import { ISignInProps } from "../../contexts/interfaces/IAuthProvider";
import { BackButton } from "../../components/BackButton";

const setAsNewProfile = async () => {
  try {
    await AsyncStorage.setItem("isNewProfile", "true");
  } catch (e) {
    console.log("issue with setting isNewProfile");
  }
};

export const NewProfileScreen = ({ route }: any) => {
  const { email, password } = route.params;

  const { signUp, isLoading } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [interests, setInterests] = useState([""]);

  // const navigation = useNavigation();

  const windowWidth = Dimensions.get("window").width;

  return (
    <>
      <BackButton />
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#FFFBEC",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <VStack flex={1} space={5} justifyContent={"center"}>
          <Image
            source={require("../../../assets/images/ProfileIcon.png")}
            style={{
              width: 160,
              height: 160,
              alignSelf: "center",
            }}
          />

          <VStack space={3} width={windowWidth * 0.8}>
            <HStack alignItems={"center"}>
              <Text flex={3} style={{ fontSize: 20, textAlign: "right" }}>
                Name: &nbsp;
              </Text>
              <Input
                flex={4}
                style={{ fontSize: 20 }}
                onChangeText={(text) => setName(text)}
              >
                Tan Xiao Ming
              </Input>
            </HStack>
            <HStack alignItems={"center"}>
              <Text flex={3} style={{ fontSize: 20, textAlign: "right" }}>
                H/P: &nbsp;
              </Text>
              <Input
                flex={4}
                style={{ fontSize: 20 }}
                onChangeText={(text) => setNumber(text)}
              >
                912345678
              </Input>
            </HStack>
            <HStack>
              <Text flex={3} style={{ fontSize: 20, textAlign: "right" }}>
                Interests: &nbsp;
              </Text>
              <VStack flex={4} space={2}>
                <Input
                  style={{ fontSize: 20 }}
                  onChangeText={(text) => setInterests([text])}
                >
                  Reading
                </Input>
                <Input style={{ fontSize: 20 }}>Drawing</Input>
              </VStack>
            </HStack>
          </VStack>
        </VStack>

        <View style={{ marginBottom: 30 }}>
          <Button
            size="lg"
            onPress={() => {
              setAsNewProfile();
              const profileData = {
                email,
                password,
                name,
                number,
                interests,
              } as ISignInProps;
              signUp(profileData);
            }}
            style={{ marginTop: 15 }}
          >
            Sign Up
          </Button>
        </View>
      </SafeAreaView>
    </>
  );
};
