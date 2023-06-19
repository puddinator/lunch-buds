import { Text, Image, Button } from "native-base";
import { useContext } from "react";
import { View, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { AuthContext } from "../../../contexts/AuthContext";

export const EditProfileScreen = () => {
  const { signOut } = useContext(AuthContext);

  return (
    // <View style={styles.background}>
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.editButton}>
        <TouchableOpacity onPress={signOut}>
          <Text fontSize={20}>Edit</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.profileContainer}>
        <Image
          source={require("../../../../assets/images/ProfileIcon.png")}
          style={styles.profileIcon}
        />

        <View style={styles.row}>
          <Text style={styles.profileLabel}> Name:</Text>
          <Text style={styles.profileValue}> Tan Xiao Ming </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.profileLabel}> H/P:</Text>
          <Text style={styles.profileValue}> 912345678 </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.profileLabel}> Interest:</Text>
          <Text style={styles.interests}>insert buttons here</Text>
        </View>
      </View>

      <View style={{ flex: 1, alignItems: "center", marginBottom: 50 }}>
        <Button style={{ width: "40%" }} onPress={signOut}>
          <Text>Sign out</Text>
        </Button>
      </View>
    </SafeAreaView>
    // </View>
  );
};

const styles = StyleSheet.create({
  //  background: {
  // backgroundColor: "black",
  // },
  safeAreaContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FFFBEC",
  },
  editButton: {
    position: "relative",
    top: 0,
    left: 0,
    margin: 20,
    alignSelf: "flex-start",
    justifyContent: "center",
    marginLeft: 30,
    backgroundColor: "#D9D9D9",
    padding: 10,
    borderRadius: 10,
  },
  // profileIconContainer: {
  // backgroundColor: "#D9D9D9",
  // },
  profileIcon: {
    width: 120,
    height: 120,
    alignSelf: "center",
    justifyContent: "center",
    marginBottom: 60,
  },
  profileContainer: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "flex-start", // Align items to the left side
    paddingLeft: 0,
    paddingBottom: 40, // Add bottom padding to shift text upwards
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
    width: "80%",
  },
  ageRow: {
    marginBottom: 30, //gap between hp row and interests row
  },
  profileLabel: {
    textAlign: "right",
    width: "50%",
    paddingRight: 10,
    fontSize: 20,
  },
  profileValue: {
    textAlign: "left",
    width: "50%",
    paddingLeft: 10,
    fontSize: 20,
  },
  interests: {
    textAlign: "left",
    width: "50%",
    paddingLeft: 10,
    fontSize: 10,
    marginBottom: 180,
  },
});