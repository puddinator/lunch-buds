import DateTimePicker from "@react-native-community/datetimepicker";
import { Checkbox, HStack, Image, Text } from "native-base";
import { useState } from "react";
import {
  Button,
  Platform,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

//Search Button--------------------------------------------------------------------------------------
const SearchButton = () => {
  return (
    <TouchableOpacity style={styles.SearchbuttonContainer}>
      <Image
        source={require("../../../../assets/images/ButtonSearch.png")}
        style={styles.searchButtonimage}
      />
    </TouchableOpacity>
  );
};

const InterestForm = () => {
  const [groupValues, setGroupValues] = useState([]);
  return (
    <Checkbox.Group
      onChange={setGroupValues}
      value={groupValues}
      accessibilityLabel="choose numbers"
    >
      <Checkbox value="one" my={2}>
        UX Research
      </Checkbox>
      <Checkbox value="two">Software Development</Checkbox>
    </Checkbox.Group>
  );
};

export const MatchScreen = () => {
  // const WINDOW_HEIGHT = Dimensions.get("window").width;
  // const [searchTerm, setSearchTerm] = useState("");

  const handlePress = () => {};

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    if (Platform.OS === "android") {
      setShow(false);
      // for iOS, add a button that closes the picker
    }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  // Actual Screen here:

  return <Text>Test</Text>;
  // return (
  //   <SafeAreaView
  //     style={{
  //       flex: 1,
  //       alignItems: "center",
  //       justifyContent: "center",
  //       backgroundColor: "#FFFBEC",
  //     }}
  //   >
  //     <Text style={styles.titleText}>Find your LunchBuds!</Text>
  //     <View>
  //       <HStack>
  //         <Button onPress={showDatepicker} title="Select date" />
  //         <Button onPress={showTimepicker} title="Select time" />
  //       </HStack>
  //       <Text>selected: {date.toLocaleString()}</Text>
  //       {show && (
  //         <DateTimePicker
  //           testID="dateTimePicker"
  //           value={date}
  //           mode={mode}
  //           is24Hour={true}
  //           onChange={onChange}
  //         />
  //       )}
  //     </View>
  //     <Text style={styles.subtitleText}>Someone who is interested in...</Text>

  //     <InterestForm />

  //     <SearchButton />
  //   </SafeAreaView>
  // );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 30,
    padding: 10,
    marginBottom: 40,
  },
  subtitleText: {
    fontSize: 20,
    padding: 10,
    marginTop: 40,
  },
  searchButtonimage: {
    width: 135,
    height: 40,
  },
  SearchbuttonContainer: {
    position: "absolute",
    bottom: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
});
