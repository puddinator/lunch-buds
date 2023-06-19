import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { ShopScreen } from "../screens/AppStack/Home/ShopScreen";
import { ProfileScreen } from "../screens/AppStack/Profile/ProfileScreen";
import { MatchScreen } from "../screens/AppStack/Match/MatchScreen";
import { FindMatchesScreen } from "../screens/AppStack/Match/FindMatchesScreen";
import { LoadingMatchesScreen } from "../screens/AppStack/Match/LoadingMatchesScreen";
import { ShowMatchesScreen } from "../screens/AppStack/Match/ShowMatches";
import { MatchProfileScreen } from "../screens/AppStack/Match/MatchProfileScreen";
import { PastMatchesScreen } from "../screens/AppStack/Match/PastMatchesScreen";
import { MatchConnectScreen } from "../screens/AppStack/Match/MatchConnectScreen";

type PastMatchesStackParamList = {
  "Past Matches": undefined;
  "Match Profile": undefined;
  "Match Connect": undefined;
};

export type PastMatchesStackNavigationProps =
  NativeStackNavigationProp<PastMatchesStackParamList>;

const PastMatches = createNativeStackNavigator<PastMatchesStackParamList>();

export const PastMatchesRoutes = () => {
  return (
    <PastMatches.Navigator
      initialRouteName="Past Matches"
      screenOptions={{
        headerShown: false,
      }}
    >
      <PastMatches.Screen name="Past Matches" component={PastMatchesScreen} />
      <PastMatches.Screen name="Match Profile" component={MatchProfileScreen} />
      <PastMatches.Screen name="Match Connect" component={MatchConnectScreen} />
    </PastMatches.Navigator>
  );
};
