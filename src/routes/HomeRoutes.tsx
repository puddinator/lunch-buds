import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/AppStack/Home/HomeScreen";
import { ShopScreen } from "../screens/AppStack/Home/ShopScreen";
import { TutorialScreen } from "../screens/AppStack/Home/TutorialScreen";
import { GrowTreeScreen } from "../screens/AppStack/Home/GrowTreeScreen";
import { PromptsScreen } from "../screens/AppStack/Home/PromptsScreen";

type HomeStackParamList = {
  Home: undefined;
  Tutorial: undefined;
  Shop: undefined;
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
      <Home.Screen name="Tutorial" component={TutorialScreen} />
      <Home.Screen name="Shop" component={ShopScreen} />
      <Home.Screen name="Grow Tree" component={GrowTreeScreen} />
      <Home.Screen name="Prompts" component={PromptsScreen} />
    </Home.Navigator>
  );
};
