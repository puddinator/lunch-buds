import { LinearGradient } from "expo-linear-gradient";
import { Button, Image, Stack, Text } from "native-base";
import { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

import {
  PasswordInput,
  UsernameInput,
} from "../components/AuthStack/LoginInput";
import { BackButton } from "..//components/BackButton";
import { AuthContext } from "../contexts/AuthContext";
import { ISignInProps } from "../contexts/interfaces/IAuthProvider";

export const Tutorial = () => {
  const navigation = useNavigation();

  return <></>;
};
