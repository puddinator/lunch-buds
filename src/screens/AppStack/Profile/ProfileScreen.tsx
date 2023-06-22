import { Text, Image, Button, VStack, HStack } from "native-base";
import { useContext, useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { AuthContext } from "../../../contexts/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { ProfileStackNavigationProps } from "../../../routes/ProfileRoutes";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ProfileScreen = () => {
  const navigation = useNavigation<ProfileStackNavigationProps>();
  const { signOut } = useContext(AuthContext);
  const [myProfile, setMyProfile] = useState<any>();

  const windowWidth = Dimensions.get("window").width;

  useEffect(() => {
    (async () => {
      // @ts-ignore
      setMyProfile(JSON.parse(await AsyncStorage.getItem("profile")));
    })();
  }, []);

  console.log("test", myProfile);

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#FFFBEC",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            alignSelf: "flex-start",
            marginLeft: 30,
            top: 40,
          }}
        ></View>

        <VStack flex={1} space={5} justifyContent={"center"}>
          <Image
            source={require("../../../../assets/images/ProfileIcon.png")}
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
              <Text flex={4} style={{ fontSize: 20 }}>
                {myProfile?.name}
                {/* Tan Xiao Ming */}
              </Text>
            </HStack>
            <HStack alignItems={"center"}>
              <Text flex={3} style={{ fontSize: 20, textAlign: "right" }}>
                H/P: &nbsp;
              </Text>
              <Text flex={4} style={{ fontSize: 20 }}>
                {myProfile?.number}
                {/* 912345678 */}
              </Text>
            </HStack>
            <HStack>
              <Text flex={3} style={{ fontSize: 20, textAlign: "right" }}>
                Interests: &nbsp;
              </Text>
              <VStack flex={4} space={2}>
                <Text style={{ fontSize: 20 }}>Music</Text>
                <Text style={{ fontSize: 20 }}>Drawing</Text>
              </VStack>
            </HStack>
          </VStack>
        </VStack>

        <View style={{ marginBottom: 30 }}>
          <Button onPress={signOut}>
            <Text style={{ fontSize: 20 }}>Sign out</Text>
          </Button>
        </View>
      </SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Edit Profile");
        }}
        style={{
          position: "absolute",
          backgroundColor: "#D9D9D9",
          padding: 10,
          borderRadius: 10,
          top: 100,
          left: 50,
        }}
      >
        <Text fontSize={20}>Edit</Text>
      </TouchableOpacity>
    </>
  );
};
