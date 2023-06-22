import { View, Text, VStack, Input, Image } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NewMatchesStackNavigationProps } from "../../../routes/NewMatchesRoutes";
import { GrowTreeScreen } from "../Home/GrowTreeScreen";
import { BackButton } from "../../../components/BackButton";
import axios from "axios";
import { useMutation } from "react-query";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const updateMatch = (data: any) => {
  console.log("data", data);
  return axios.post("https://lunch-buds-backend.vercel.app/api/matches/", data);
};
// { creatorID, targetID, commonDateTime, commonInterests }

export const MatchConnectScreen = ({ route }: any) => {
  const { myProfile, selectedProfile } = route.params;

  const navigation = useNavigation<NewMatchesStackNavigationProps>();

  const {
    isLoading,
    data: responseData,
    mutate,
  } = useMutation({
    mutationFn: updateMatch,
  });

  useEffect(() => {
    const data = {
      creatorID: myProfile.id,
      targetID: selectedProfile.id,
      commonDateTime: "filler",
      commonInterests: myProfile.interests
        .filter((value: string) => selectedProfile.interests.includes(value))
        .join(", "),
    };
    mutate(data);
  }, []);

  console.log("TES", responseData?.data.match);
  AsyncStorage.setItem("matchID", responseData?.data.match._id);

  return (
    <>
      <BackButton customStyle={{ marginTop: 24 }} />
      <View
        style={{
          flex: 1,
          backgroundColor: "#FFFBEC",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <VStack alignItems="center">
          <Text>Your code: 1234</Text>
          <Text style={{ fontSize: 24 }}>Enter LunchBuds's code:</Text>
          <Input style={{ width: 150, height: 50, flex: 0 }}></Input>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Grow Tree");
            }}
          >
            <Image
              source={require("../../../../assets/images/ButtonContinue.png")}
              style={{
                width: 150,
                height: 60,
              }}
            />
          </TouchableOpacity>
        </VStack>
      </View>
    </>
  );
};
