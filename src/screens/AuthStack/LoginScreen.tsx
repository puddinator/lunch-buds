import { LinearGradient } from "expo-linear-gradient";
import { Box, Button, Image, Stack } from "native-base";
import { useContext, useState } from "react";
import Spinner from "react-native-loading-spinner-overlay";

import {
  LoginFooter,
  PasswordInput,
  EmailInput,
} from "../../components/AuthStack/LoginInput";
import { AuthContext } from "../../contexts/AuthContext";
import { ISignInProps } from "../../contexts/interfaces/IAuthProvider";
import { View } from "react-native";

const logo = require("../../../assets/images/LunchBudsLogo.png");

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, isLoading } = useContext(AuthContext);

  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: "#FFFBEC",
        }}
      >
        <Box
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Stack space={20} w="100%" maxW="300px" alignItems="center">
            <Image source={logo} alt="LunchBuds logo" height={100} />
            <Stack space={4} w="75%" maxW="300px" alignItems="center">
              <EmailInput setEmail={setEmail} />
              <PasswordInput setPassword={setPassword} />
              <Button
                size="lg"
                onPress={() => {
                  const data = { email: email, password } as ISignInProps;
                  signIn(data);
                }}
                style={{ marginTop: 15 }}
              >
                Login
              </Button>
            </Stack>
          </Stack>
        </Box>
        <LoginFooter />
      </View>
      <Spinner visible={isLoading} />
    </>
  );
};
