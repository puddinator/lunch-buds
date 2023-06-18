import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { ShopScreen } from "../screens/AppStack/Profile/ShopScreen";
import { ProfileScreen } from "../screens/AppStack/Profile/ProfileScreen";

type ProfileStackParamList = {
  Profile: undefined;
  Shop: undefined;
};

export type ProfileStackNavigationProps =
  NativeStackNavigationProp<ProfileStackParamList>;

const Profile = createNativeStackNavigator<ProfileStackParamList>();

export const ProfileRoutes = () => {
  return (
    <Profile.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Profile.Screen name="Profile" component={ProfileScreen} />
    </Profile.Navigator>
  );
};
