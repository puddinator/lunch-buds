import { Button } from "native-base";
import { useContext } from "react";
import { Text, View } from "react-native";
import { AuthContext } from "../../contexts/AuthContext";

export const ProfileScreen = () => {
  const { signOut } = useContext(AuthContext);

  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center", flexDirection:'column'}}>
      <View style={{flexDirection:'row' }}>
      <Text> Name:</Text>
      <Text> Lai Peng Yeo </Text>
      </View>
      <View style={{flexDirection:'row' }}>
      <Text> HP:</Text>
      <Text> 91234567 </Text>
      </View>
      <Button onPress={signOut}>
        <Text>Sign out</Text>
      </Button>
    </View>
  );
};
