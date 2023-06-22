import DateTimePicker from "@react-native-community/datetimepicker";
import { Button, HStack, Text, VStack } from "native-base";
import { useState } from "react";
import { SafeAreaView, View } from "react-native";

interface IProps {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
}

export const LunchBudsDateTimePicker = (props: IProps) => {
  const { date, setDate } = props;

  const [isPickerShow, setIsPickerShow] = useState(false);
  const [mode, setMode] = useState<"date" | "time">("date");

  return (
    <VStack space={4}>
      {/* Display the selected date */}
      <View
        style={{
          padding: 20,
          backgroundColor: "#eee",
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: "black",
          }}
        >
          {date
            .toLocaleString("en-SG", { timeZone: "UTC" })
            // bad hack to remove seconds
            .split(":")
            .slice(0, -1)
            .join(":")
            .concat(
              date.toLocaleString("en-SG", { timeZone: "UTC" }).slice(-3)
            )}
        </Text>
      </View>

      {/* The button that used to trigger the date picker */}
      {!isPickerShow && (
        <HStack space={1}>
          <Button
            onPress={() => {
              setIsPickerShow(true);
              setMode("date");
            }}
          >
            Change Date
          </Button>
          <Button
            onPress={() => {
              setIsPickerShow(true);
              setMode("time");
            }}
          >
            Change Time
          </Button>
        </HStack>
      )}

      {/* The date picker */}
      {isPickerShow && (
        <DateTimePicker
          value={date}
          mode={mode}
          onChange={(event, date: Date | undefined) => {
            if (date !== undefined) {
              setDate(date);
              setIsPickerShow(false);
            }
          }}
        />
      )}
    </VStack>
  );
};
