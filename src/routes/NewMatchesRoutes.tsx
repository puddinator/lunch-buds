import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { FindMatchesScreen } from "../screens/AppStack/Match/FindMatchesScreen";
import { LoadingMatchesScreen } from "../screens/AppStack/Match/LoadingMatchesScreen";
import { MatchConnectScreen } from "../screens/AppStack/Match/MatchConnectScreen";
import { MatchProfileScreen } from "../screens/AppStack/Match/MatchProfileScreen";
import { MatchScreen } from "../screens/AppStack/Match/MatchScreen";
import { ShowMatchesScreen } from "../screens/AppStack/Match/ShowMatches";

type NewMatchesStackParamList = {
  Match: undefined;
  "Find Matches": undefined;
  "Loading Matches": undefined;
  "Show Matches": undefined;
  "Match Profile": undefined;
  "Match Connect": undefined;
};

export type NewMatchesStackNavigationProps =
  NativeStackNavigationProp<NewMatchesStackParamList>;

const NewMatches = createNativeStackNavigator<NewMatchesStackParamList>();

export const NewMatchesRoutes = () => {
  return (
    <NewMatches.Navigator
      initialRouteName="Match"
      screenOptions={{
        headerShown: false,
      }}
    >
      <NewMatches.Screen name="Match" component={MatchScreen} />
      <NewMatches.Screen name="Find Matches" component={FindMatchesScreen} />
      <NewMatches.Screen
        name="Loading Matches"
        component={LoadingMatchesScreen}
      />
      <NewMatches.Screen name="Show Matches" component={ShowMatchesScreen} />
      <NewMatches.Screen name="Match Profile" component={MatchProfileScreen} />
      <NewMatches.Screen name="Match Connect" component={MatchConnectScreen} />
    </NewMatches.Navigator>
  );
};
