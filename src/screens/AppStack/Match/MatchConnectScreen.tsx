import { View, Text, VStack, Input, Image } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NewMatchesStackNavigationProps } from "../../../routes/NewMatchesRoutes";
import { GrowTreeScreen } from "../Home/GrowTreeScreen";
import { BackButton } from "../../../components/BackButton";

export const MatchConnectScreen = () => {
  const navigation = useNavigation<NewMatchesStackNavigationProps>();

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
          <Input style={{ width: 150, height: 50, flex:0 }}></Input>
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
