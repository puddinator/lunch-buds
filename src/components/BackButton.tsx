import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text, View } from "react-native";
import { Box, Icon, Image } from "native-base";
import { Ionicons } from "@expo/vector-icons";

export const BackButton = () => {
  const navigation = useNavigation();

  return (
    // <View style={{ marginTop: 60, marginLeft: 30 }}>
    //   <TouchableOpacity
    //     onPress={() => {
    //       navigation.goBack();
    //     }}
    //   >
    //     <Ionicons name="arrow-back" size={50} />
    //   </TouchableOpacity>
    // </View>

    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 30,
        paddingBottom: 0,
      }}
    >
      <TouchableOpacity
        style={{
          position: "absolute",
          left: 20,
          padding: 10,
        }}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Image
          source={require("../../assets/images/BackButton.png")}
          style={{
            height: 45,
            width: 40,
          }}
        />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 40,
          padding: 20,
          paddingTop: 20,
          textAlign: "center",
        }}
      >
        {" "}
        Shop{" "}
      </Text>
    </View>
  );
};
