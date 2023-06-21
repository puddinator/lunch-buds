import { useNavigation } from "@react-navigation/native";
import { Image } from "native-base";
import React from "react";
import { TouchableOpacity, View, ViewStyle } from "react-native";

interface IProps {
  customStyle?: ViewStyle;
}

export const BackButton = ({ customStyle }: IProps) => {
  const navigation = useNavigation();

  return (
    <View
      style={[
        {
          position: "absolute",
          zIndex: 10,
          marginTop: 60,
          marginLeft: 30,
        },
        customStyle,
      ]}
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
