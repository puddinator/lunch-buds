import { MaterialIcons } from "@expo/vector-icons";
import { Icon, Input, Pressable, Text, Image, Stack } from "native-base";
import { useState } from "react";
import { Dimensions, TouchableOpacity, View } from "react-native";

const handlePress = () => {};

export const MatchScreen = () => {
  // const WINDOW_HEIGHT = Dimensions.get("window").width;
  // const [searchTerm, setSearchTerm] = useState("");

  const next = require("../../../assets/images/next-button.png");

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Find your LunchBuds!</Text>
      <TouchableOpacity onPress={() => handlePress()} style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text>Search</Text>
          <Image source={next} alt="itinero logo" size="xs" />
        </View>
      </TouchableOpacity>
    </View>
    // <>
    //   <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    //     <Stack space={10}>
    //       <Text fontSize={"3xl"} color="white" fontWeight={600}>
    //         Let's make your next travel incredible
    //       </Text>
    //       <Input
    //         size="xl"
    //         InputLeftElement={
    //           <Pressable onPress={() => handlePress()}>
    //             <Icon
    //               as={<MaterialIcons name="search" />}
    //               size={5}
    //               mr="2"
    //               color="grey"
    //             />
    //           </Pressable>
    //         }
    //         placeholder="Search for guides, users, attractions..."
    //         placeholderTextColor="black"
    //         onChangeText={setSearchTerm}
    //       />
    //     </Stack>
    //   </View>
    // </>
  );
};
