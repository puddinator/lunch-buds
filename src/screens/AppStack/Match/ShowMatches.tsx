import {
  FlatList,
  HStack,
  Stack,
  Text,
  VStack,
  Image,
  Box,
  Button,
} from "native-base";
import { useState } from "react";
import { InterestForm } from "../../../components/InterestForm";
import { LunchBudsDateTimePicker } from "../../../components/LunchBudsDateTimePicker";
import { SearchButton } from "../../../components/SearchButton";
import { useNavigation } from "@react-navigation/native";
import { NewMatchesStackNavigationProps } from "../../../routes/NewMatchesRoutes";
import { TouchableOpacity, View } from "react-native";

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
    name: "Tommy Tan",
    match: "Data Science",
    otherInterests: "Bouldering, Baking",
    number: "91234567",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-",
    name: "Tommy Tan",
    match: "Data Science",
    otherInterests: "Bouldering, Baking",
    number: "91234567",
  },
];

const ProfileCard = ({
  name,
  match,
  otherInterests,
  number,
}: Partial<typeof DATA[0]>) => (
  <TouchableOpacity
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 50,
      borderRadius: 5,
      borderWidth: 2,
    }}
    onPress={() => {}}
  >
    <VStack space={4}>
      <HStack space={4}>
        <Image
          source={require("../../../../assets/images/ProfileIcon.png")}
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

export const ShowMatchesScreen = () => {
  const navigation = useNavigation<NewMatchesStackNavigationProps>();

  return (
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
        data={DATA}
        renderItem={({ item }) => (
          <ProfileCard
            name={item.name}
            match={item.match}
            otherInterests={item.otherInterests}
            number={item.number}
          />
        )}
        keyExtractor={(profile) => profile.id}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />
    </View>
  );
};
