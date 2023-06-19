import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { ShopScreen } from "../screens/AppStack/Home/ShopScreen";
import { ProfileScreen } from "../screens/AppStack/Profile/ProfileScreen";
import { EditProfileScreen } from "../screens/AppStack/Profile/EditProfileScreen";

type ProfileStackParamList = {
  Profile: undefined;
  "Edit Profile": undefined;
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
      <Profile.Screen name="Edit Profile" component={EditProfileScreen} />
    </Profile.Navigator>
  );
};
