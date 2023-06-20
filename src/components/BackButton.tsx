import { useNavigation } from "@react-navigation/native";
import { Image } from "native-base";
import React from "react";
import { TouchableOpacity, View } from "react-native";

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
        // flexDirection: "row",
        // alignItems: "center",
        // justifyContent: "center",
        marginTop: 60,
        marginLeft: 30,
      }}
    >
      <TouchableOpacity
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
    </View>
  );
};
