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

type MatchStackParamList = {
  Match: undefined;
  "Past Matches": undefined;
  "Find Matches": undefined;
  "Loading Matches": undefined;
  "Show Matches": undefined;
  "Match Profile": undefined;
  "Match Connect": undefined;
};

export type MatchStackNavigationProps =
  NativeStackNavigationProp<MatchStackParamList>;

const Match = createNativeStackNavigator<MatchStackParamList>();

export const ProfileRoutes = () => {
  return (
    <Match.Navigator
      initialRouteName="Match"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Match.Screen name="Match" component={MatchScreen} />
      <Match.Screen name="Past Matches" component={PastMatchesScreen} />
      <Match.Screen name="Find Matches" component={FindMatchesScreen} />
      <Match.Screen name="Loading Matches" component={LoadingMatchesScreen} />
      <Match.Screen name="Show Matches" component={ShowMatchesScreen} />
      <Match.Screen name="Match Profile" component={MatchProfileScreen} />
      <Match.Screen name="Match Connect" component={MatchConnectScreen} />
    </Match.Navigator>
  );
};
