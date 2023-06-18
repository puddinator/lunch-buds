import { MaterialIcons } from "@expo/vector-icons";
import {
  Icon,
  Input,
  Pressable,
  Text,
  Image,
  Stack,
  HStack,
  Checkbox,
} from "native-base";
import { useState } from "react";
import {
  Button,
  Dimensions,
  Platform,
  TouchableOpacity,
  View,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

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

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Text style={styles.titleText}>Find your LunchBuds!</Text>
      <View>
        <HStack>
          <Button onPress={showDatepicker} title="Select date" />
          <Button onPress={showTimepicker} title="Select time" />
        </HStack>
        <Text>selected: {date.toLocaleString()}</Text>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
          />
        )}
      </View>
      <Text style={styles.subtitleText}>Someone who is interested in...</Text>

      <InterestForm />

      <SearchButton />
    </SafeAreaView>

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

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFBEC",
  },
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
