import { Text, Image, Button, VStack, HStack, Input } from "native-base";
import { useContext } from "react";
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
import { BackButton } from "../../../components/BackButton";

export const EditProfileScreen = () => {
  const navigation = useNavigation<ProfileStackNavigationProps>();
  const { signOut } = useContext(AuthContext);

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
              <Input flex={4} style={{ fontSize: 20 }}>
                Tan Xiao Ming
              </Input>
            </HStack>
            <HStack alignItems={"center"}>
              <Text flex={3} style={{ fontSize: 20, textAlign: "right" }}>
                H/P: &nbsp;
              </Text>
              <Input flex={4} style={{ fontSize: 20 }}>
                912345678
              </Input>
            </HStack>
            <HStack>
              <Text flex={3} style={{ fontSize: 20, textAlign: "right" }}>
                Interests: &nbsp;
              </Text>
              <VStack flex={4} space={2}>
                <Input style={{ fontSize: 20 }}>Reading</Input>
                <Input style={{ fontSize: 20 }}>Drawing</Input>
              </VStack>
            </HStack>
          </VStack>
        </VStack>

        <View style={{ marginBottom: 30 }}>
          <Button
            onPress={() => {
              navigation.navigate("Profile");
            }}
          >
            <Text style={{ fontSize: 20 }}>Update</Text>
          </Button>
        </View>
      </SafeAreaView>
    </>
  );
};
