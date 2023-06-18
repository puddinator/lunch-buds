import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { ShopScreen } from "../screens/AppStack/Home/ShopScreen";
import { ProfileScreen } from "../screens/AppStack/Profile/ProfileScreen";
import { MatchScreen } from "../screens/AppStack/Match/MatchScreen";

type MatchStackParamList = {
  Match: undefined;
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
    </Match.Navigator>
  );
};
