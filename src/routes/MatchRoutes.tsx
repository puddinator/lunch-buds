import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NewMatchesRoutes } from "./NewMatchesRoutes";
import { PastMatchesRoutes } from "./PastMatchesRoutes";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native";

const Match = createMaterialTopTabNavigator();

export const MatchRoutes = () => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView>
      {/* // <View
    //   style={{
    //     paddingTop: insets.top,
    //     paddingBottom: insets.bottom,

    //     flex: 1,
    //     justifyContent: "space-between",
    //     alignItems: "center",
    //   }}
    // > */}
      <Match.Navigator initialRouteName="New Matches Routes">
        <Match.Screen name="New Matches Routes" component={NewMatchesRoutes} />
        <Match.Screen
          name="Past Matches Routes"
          component={PastMatchesRoutes}
        />
      </Match.Navigator>
      {/* // </View> */}
    </SafeAreaView>
  );
};
