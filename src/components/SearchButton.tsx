import DateTimePicker from "@react-native-community/datetimepicker";
import { Checkbox, HStack, Image, Text, Button, VStack } from "native-base";
import { SetStateAction, useState } from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

interface IProps {
  handleSearch: () => void;
}

export const SearchButton = ({ handleSearch }: IProps) => {
  return (
    <TouchableOpacity onPress={handleSearch}>
      <Image
        source={require("../../assets/images/ButtonSearch.png")}
        style={{
          width: 150,
          height: 60,
        }}
      />
    </TouchableOpacity>
  );
};
