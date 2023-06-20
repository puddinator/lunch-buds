import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Image } from "react-native";
import { MatchRoutes } from "./MatchRoutes";
import { HomeRoutes } from "./HomeRoutes";
import { ProfileRoutes } from "./ProfileRoutes";

const App = createMaterialBottomTabNavigator();

const matchIcon = require("../../assets/images/MatchIcon.png");
const homeIcon = require("../../assets/images/HomeIcon.png");
const profileIcon = require("../../assets/images/ProfileIcon.png");

export const NavBarRoutes = () => {
  return (
    <App.Navigator
      initialRouteName="Home Routes"
      activeColor="#807550"
      // shifting={true}}
      
      barStyle={{ backgroundColor: "#E8E5CC" }}
    >
      {/* For the 4 different navigation tabs */}
      <App.Screen
        name="Match Routes"
        component={MatchRoutes}
        options={{
          tabBarLabel: "Match",
          tabBarIcon: ({ color }) => (
            <Image source={matchIcon} style={{ width: 25, height: 25 }} />
          ),
        }}
      />
      <App.Screen
        name="Home Routes"
        component={HomeRoutes}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Image source={homeIcon} style={{ width: 25, height: 25 }} />
          ),
        }}
      />
      <App.Screen
        name="Profile Routes"
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
