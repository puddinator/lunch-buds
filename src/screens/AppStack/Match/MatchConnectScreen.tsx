import { View, Text, VStack, Input, Image } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NewMatchesStackNavigationProps } from "../../../routes/NewMatchesRoutes";
import { GrowTreeScreen } from "../Home/GrowTreeScreen";

export const MatchConnectScreen = () => {
  const navigation = useNavigation<NewMatchesStackNavigationProps>();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFFBEC",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <VStack>
        <Text>Your code: 1234</Text>
        <Text>Enter LunchBuds's code</Text>
        <Input></Input>
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
  );
};
