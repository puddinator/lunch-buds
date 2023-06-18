import { Text, Image, HStack, VStack } from "native-base";
import { useContext } from "react";
import { View, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { AuthContext } from "../../../contexts/AuthContext";
import { BackButton } from "../../../components/BackButton";

export const ShopScreen = () => {
  const { signOut } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      {/*  Title and back button   ----------------------------------------------- */}
      <View style={styles.titleRow}>
        <TouchableOpacity style={styles.backButton} onPress={signOut}>
          <Image
            source={require("../../../../assets/images/BackButton.png")}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.titleText}> Shop </Text>
      </View>

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
        <TouchableOpacity onPress={signOut}>
          <Image
            source={require("../../../../assets/images/TicketCommon.png")}
            style={styles.ticketIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={signOut}>
          <Image
            source={require("../../../../assets/images/TicketRare.png")}
            style={styles.ticketIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={signOut}>
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
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
    paddingBottom: 0,
  },
  backButton: {
    position: "absolute",
    left: 20,
    padding: 10,
  },
  backIcon: {
    height: 45,
    width: 40,
  },
  titleText: {
    fontSize: 40,
    padding: 20,
    paddingTop: 20,
    textAlign: "center",
  },

  appleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 70,
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
    width: 295,
    height: 165,
    alignSelf: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
});
