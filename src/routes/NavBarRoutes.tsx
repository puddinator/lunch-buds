import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { HomeScreen } from "../screens/AppStack/Home/HomeScreen";
import { GuidesScreen } from "../screens/AppStack/archived/GuidesScreen";
import { ProfileScreen } from "../screens/AppStack/Profile/ProfileScreen";
import { PlanScreen } from "../screens/AppStack/archived/PlanScreen";
import { MatchScreen as MatchRoutes } from "../screens/AppStack/Match/MatchScreen";
import { ShopScreen } from "../screens/AppStack/Home/ShopScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ProfileRoutes } from "./ProfileRoutes";
import { HomeRoutes } from "./HomeRoutes";

const App = createMaterialBottomTabNavigator();

const matchIcon = require("../../assets/images/MatchIcon.png");
const homeIcon = require("../../assets/images/HomeIcon.png");
const profileIcon = require("../../assets/images/ProfileIcon.png");

export const NavBarRoutes = () => {
  return (
    <App.Navigator
      initialRouteName="Home"
      activeColor="#807550"
      barStyle={{ backgroundColor: "#E8E5CC" }}
    >
      {/* For the 4 different navigation tabs */}
      <App.Screen
        name="Match"
        component={MatchRoutes}
        options={{
          tabBarLabel: "Match",
          tabBarIcon: ({ color }) => (
            <Image source={matchIcon} style={{ width: 25, height: 25 }} />
          ),
        }}
      />
      <App.Screen
        name="Home"
        component={HomeRoutes}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Image source={homeIcon} style={{ width: 25, height: 25 }} />
          ),
        }}
      />
      <App.Screen
        name="Profile"
        component={ProfileRoutes}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <Image source={profileIcon} style={{ width: 25, height: 25 }} />
          ),
        }}
      />

      {/* Actual usage screens */}
      {/* <App.Screen name="Route" component={GuideScreen} />
      <App.Screen name="Details" component={DetailsScreen} /> */}
    </App.Navigator>
  );
};
