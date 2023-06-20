import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { MatchConnectScreen } from "../screens/AppStack/Match/MatchConnectScreen";
import { MatchProfileScreen } from "../screens/AppStack/Match/MatchProfileScreen";
import { PastMatchesScreen } from "../screens/AppStack/Match/PastMatchesScreen";

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
