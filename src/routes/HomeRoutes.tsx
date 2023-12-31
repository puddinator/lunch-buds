import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/AppStack/Home/HomeScreen";
import { ShopScreen } from "../screens/AppStack/Home/ShopScreen";
import { TutorialScreen } from "../screens/TutorialScreen";
import { GrowTreeScreen } from "../screens/AppStack/Home/GrowTreeScreen";
import { BuyTicketResultScreen } from "../screens/BuyTicketResultScreen";

type HomeStackParamList = {
  Home: undefined;
  Tutorial: undefined; // it's not actl in the stack
  Shop: undefined;
  "Buy Ticket Result": undefined;
  "Grow Tree": undefined;
  Prompts: undefined;
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
      <Home.Screen name="Shop" component={ShopScreen} />
      <Home.Screen name="Grow Tree" component={GrowTreeScreen} />
    </Home.Navigator>
  );
};
