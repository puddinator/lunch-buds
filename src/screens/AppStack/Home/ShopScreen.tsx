import { Text, Image, HStack, VStack } from "native-base";
import { useContext } from "react";
import { View, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { AuthContext } from "../../../contexts/AuthContext";
import { BackButton } from "../../../components/BackButton";
import { useNavigation } from "@react-navigation/native";
import { HomeStackNavigationProps } from "../../../routes/HomeRoutes";

export const ShopScreen = () => {
  const navigation = useNavigation<HomeStackNavigationProps>();

  const handleBuyTicket = () => {
    navigation.navigate("Buy Ticket Result");
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      {/*  Title and back button   ----------------------------------------------- */}
      <BackButton />
      {/* Count of apples -------------------------------------------------------- */}

      <View style={styles.appleRow}>
        <Image
          source={require("../../../../assets/images/Apple.png")}
          style={styles.appleIcon}
        />
        <VStack>
          <Text style={styles.appleLabel}> You have: </Text>
          <Text style={styles.appleValue}> 2175 </Text>
        </VStack>
      </View>

      {/* Tickets, three different rarities -------------------------------------- */}
      <View style={styles.ticketContainer}>
        <TouchableOpacity onPress={handleBuyTicket}>
          <Image
            source={require("../../../../assets/images/TicketCommon.png")}
            style={styles.ticketIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleBuyTicket}>
          <Image
            source={require("../../../../assets/images/TicketRare.png")}
            style={styles.ticketIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleBuyTicket}>
          <Image
            source={require("../../../../assets/images/TicketEpic.png")}
            style={styles.ticketIcon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FFFBEC",
  },

  appleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 20,
  },

  appleIcon: {
    height: 50,
    width: 50,
  },

  appleLabel: {
    fontSize: 20,
    paddingTop: 10,
    textAlign: "center",
  },
  appleValue: {
    fontSize: 30,
    paddingTop: 15,
    textAlign: "center",
  },

  ticketContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center", // Align items to the center
    paddingLeft: 0,
    paddingBottom: 40, // Add bottom padding to shift text upwards
  },

  ticketIcon: {
    width: 270,
    height: 150,
    alignSelf: "center",
    justifyContent: "center",
    marginBottom: 25,
  },
});
