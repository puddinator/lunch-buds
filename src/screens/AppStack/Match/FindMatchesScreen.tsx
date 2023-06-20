import { Stack, Text } from "native-base";
import { useState } from "react";
import { InterestForm } from "../../../components/InterestForm";
import { LunchBudsDateTimePicker } from "../../../components/LunchBudsDateTimePicker";
import { SearchButton } from "../../../components/SearchButton";
import { useNavigation } from "@react-navigation/native";
import { NewMatchesStackNavigationProps } from "../../../routes/NewMatchesRoutes";

export const FindMatchesScreen = () => {
  const navigation = useNavigation<NewMatchesStackNavigationProps>();
  const [date, setDate] = useState(new Date(Date.now()));

  const handleSearch = () => {
    navigation.navigate("Show Matches");
  };

  return (
    <Stack
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFBEC",
      }}
      space={5}
    >
      <Text
        style={{
          fontSize: 30,
          padding: 10,
        }}
      >
        Find your LunchBuds!
      </Text>

      <LunchBudsDateTimePicker date={date} setDate={setDate} />

      <Text
        style={{
          fontSize: 20,
          padding: 10,
        }}
      >
        Someone who is interested in...
      </Text>

      <InterestForm />
      <SearchButton handleSearch={handleSearch} />
    </Stack>
  );
};
