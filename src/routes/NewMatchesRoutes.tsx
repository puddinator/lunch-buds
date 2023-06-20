import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { MatchConnectScreen } from "../screens/AppStack/Match/MatchConnectScreen";
import { FindMatchesScreen } from "../screens/AppStack/Match/FindMatchesScreen";
import { ShowMatchesScreen } from "../screens/AppStack/Match/ShowMatches";

type NewMatchesStackParamList = {
  "Find Matches": undefined;
  "Show Matches": undefined;
  "Match Connect": undefined;
  "Grow Tree": undefined; // not actl in stack
};

export type NewMatchesStackNavigationProps =
  NativeStackNavigationProp<NewMatchesStackParamList>;

const NewMatches = createNativeStackNavigator<NewMatchesStackParamList>();

export const NewMatchesRoutes = () => {
  return (
    <NewMatches.Navigator
      initialRouteName="Find Matches"
      screenOptions={{
        headerShown: false,
      }}
    >
      <NewMatches.Screen name="Find Matches" component={FindMatchesScreen} />
      <NewMatches.Screen name="Show Matches" component={ShowMatchesScreen} />
      <NewMatches.Screen name="Match Connect" component={MatchConnectScreen} />
    </NewMatches.Navigator>
  );
};
