import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/AppStack/Home/HomeScreen";
import { ShopScreen } from "../screens/AppStack/Home/ShopScreen";
import { Tutorial } from "../screens/Tutorial";

type HomeStackParamList = {
  Home: undefined;
  Tutorial: undefined;
  Shop: undefined;
};

export type HomeStackNavigationProps =
  NativeStackNavigationProp<HomeStackParamList>;

const Home = createNativeStackNavigator<HomeStackParamList>();

export const HomeRoutes = () => {
  return (
    <Home.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Home.Screen name="Home" component={HomeScreen} />
      <Home.Screen name="Tutorial" component={Tutorial} />
      <Home.Screen name="Shop" component={ShopScreen} />
    </Home.Navigator>
  );
};
