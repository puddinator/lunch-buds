import { LinearGradient } from "expo-linear-gradient";
import { Button, Image, Stack } from "native-base";
import { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

import {
  PasswordInput,
  EmailInput,
} from "../../components/AuthStack/LoginInput";
import { BackButton } from "../../components/BackButton";
import { AuthContext } from "../../contexts/AuthContext";
import { ISignInProps } from "../../contexts/interfaces/IAuthProvider";
import { AuthStackNavigationProps } from "../../routes/AuthRoutes";

const logo = require("../../../assets/images/LunchBudsLogo.png");

export const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { signUp, isLoading } = useContext(AuthContext);

  const navigation = useNavigation<AuthStackNavigationProps>();

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
            <Image source={logo} alt="LunchBuds logo" height={100} />
            <Stack space={4} w="75%" maxW="300px" alignItems="center">
              <EmailInput setEmail={setEmail} />
              <PasswordInput setPassword={setPassword} />
              <PasswordInput
                setPassword={setConfirmPassword}
                placeholder="Confirm Password"
              />
              <Button
                size="lg"
                onPress={() => {
                  const data = { email: email, password } as ISignInProps;
                  // signUp(data);
                  navigation.navigate("New Profile", data);
                }}
                style={{ marginTop: 15 }}
              >
                Continue
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
