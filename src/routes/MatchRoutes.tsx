import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NewMatchesRoutes } from "./NewMatchesRoutes";
import { PastMatchesRoutes } from "./PastMatchesRoutes";
import { useSafeArea } from "react-native-safe-area-view";
import { View } from "react-native";

const Match = createMaterialTopTabNavigator();

export const MatchRoutes = () => {
  const safeArea = useSafeArea();

  return (
    <View
      style={{ flex: 1, paddingTop: safeArea.top, backgroundColor: "#FFFBEC" }}
    >
      <Match.Navigator
        initialRouteName="New Match"
        screenOptions={{
          tabBarLabelStyle: { fontSize: 15, fontFamily: "minecraft-bold" },
          tabBarActiveTintColor: "#4f92ca",
          tabBarStyle: {
            backgroundColor: "#FFFBEC",
            borderColor: "#FFFBEC",
          },
        }}
      >
        <Match.Screen name="New Match" component={NewMatchesRoutes} />
        <Match.Screen name="Past Matches" component={PastMatchesRoutes} />
      </Match.Navigator>
    </View>
  );
};
