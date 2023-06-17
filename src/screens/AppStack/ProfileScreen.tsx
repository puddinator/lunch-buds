import { Text } from "native-base";
import { useContext } from "react";
import { View, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { AuthContext } from "../../contexts/AuthContext";

export const ProfileScreen = () => {
  const { signOut } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.editButton}>
        <TouchableOpacity onPress={signOut}>
          <Text> Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.profileContainer}>
        <View style={styles.row}>
          <Text style={styles.profileLabel}> Name:</Text>
          <Text style={styles.profileValue}> Lai Peng Yeo </Text>
        </View>

        <View style={[styles.row, styles.ageRow]}>
          <Text style={styles.profileLabel}> H/P:</Text>
          <Text style={styles.profileValue}> 912345678 </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.profileLabel}> Interest:</Text>
          <Text style={styles.interests}>insert buttons here</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    flexDirection: "column",
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
  },
});
