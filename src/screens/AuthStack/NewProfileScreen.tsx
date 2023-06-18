import { LinearGradient } from "expo-linear-gradient";
import { Button, Image, Stack, Text } from "native-base";
import { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

import {
  PasswordInput,
  UsernameInput,
} from "../../components/AuthStack/LoginInput";
import { BackButton } from "../../components/BackButton";
import { AuthContext } from "../../contexts/AuthContext";
import { ISignInProps } from "../../contexts/interfaces/IAuthProvider";

const avatar = require("../../../assets/images/ProfileIcon.png");

export const NewProfileScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { signUp, isLoading } = useContext(AuthContext);

  const navigation = useNavigation();

  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: "#FFFBEC",
        }}
      >
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Stack space={20} w="100%" maxW="300px" alignItems="center">
            <Image
              source={avatar}
              alt="avatar"
              height={100}
              width={70}
              borderColor={"black"}
              borderWidth={5}
              paddingX={10}
            />
            <Stack space={4} w="75%" maxW="300px" alignItems="center">
              <View style={styles.row}>
                <Text style={styles.profileLabel}> Name:</Text>
                <Text style={styles.profileValue}> Tan Xiao Ming </Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.profileLabel}> H/P:</Text>
                <Text style={styles.profileValue}> 912345678 </Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.profileLabel}> Interest:</Text>
                <Text style={styles.interests}>insert buttons here</Text>
              </View>

              <Button
                size="lg"
                onPress={() => {
                  const data = { username, password } as ISignInProps;
                  signUp(data);
                }}
                style={{ marginTop: 15 }}
              >
                Sign Up
              </Button>
            </Stack>
          </Stack>
        </View>
      </View>

      <View style={{ position: "absolute" }}>
        <BackButton />
      </View>

      <Spinner visible={isLoading} />
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  profileLabel: {
    textAlign: "right",
    width: "50%",
    fontSize: 20,
  },
  profileValue: {
    textAlign: "left",
    width: "50%",
    fontSize: 20,
  },
  interests: {
    textAlign: "left",
    width: "50%",
    fontSize: 10,
  },
});
