import { HStack, Image, Text, VStack } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NewMatchesStackNavigationProps } from "../routes/NewMatchesRoutes";
import { useState } from "react";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    name: "Tommy Tan",
    match: "Data Science",
    otherInterests: "Bouldering, Baking",
    number: "91234567",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb",
    name: "Joelle Tan",
    match: "Data Science",
    otherInterests: "Rock music, Swimming",
    number: "92345678",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-",
    name: "Bryan Tan",
    match: "Data Science",
    otherInterests: "Reading, Skiing",
    number: "93456789",
  },
];

interface IProps {
  name: string;
  match: string;
  otherInterests: string;
  number: string;
  handlePress: any;
}

export const ProfileCard = ({
  name,
  match,
  otherInterests,
  number,
  handlePress,
}: IProps) => {
  const navigation = useNavigation<NewMatchesStackNavigationProps>();
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 50,
        borderRadius: 5,
        borderWidth: 2,
      }}
      onPress={() => {
        handlePress();
      }}
    >
      <VStack space={4}>
        <HStack space={4}>
          <Image
            source={require("../../assets/images/ProfileIcon.png")}
            alt="avatar"
            height={50}
            width={30}
          />
          <VStack>
            <Text>{name}</Text>
            <Text>Match: {match}</Text>
          </VStack>
        </HStack>
        <VStack>
          <Text>Other interests:</Text>
          <Text>{otherInterests}</Text>
        </VStack>
      </VStack>
    </TouchableOpacity>
  );
};
