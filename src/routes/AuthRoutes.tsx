import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { ISignInProps } from "../contexts/interfaces/IAuthProvider";
import { NewProfileScreen } from "../screens/AuthStack/NewProfileScreen";
import { LoginScreen } from "./../screens/AuthStack/LoginScreen";
import { SignUpScreen } from "./../screens/AuthStack/SignUpScreen";

type AuthStackParamList = {
  "Sign Up": undefined;
  Login: undefined;
  "New Profile": ISignInProps;
};

export type AuthStackNavigationProps =
  NativeStackNavigationProp<AuthStackParamList>;

const Auth = createNativeStackNavigator<AuthStackParamList>();

export const AuthRoutes = () => {
  return (
    <Auth.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Auth.Screen name="Login" component={LoginScreen} />
      <Auth.Screen name="Sign Up" component={SignUpScreen} />
      <Auth.Screen name="New Profile" component={NewProfileScreen} />
    </Auth.Navigator>
  );
};
