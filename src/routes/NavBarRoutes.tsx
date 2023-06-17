import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Image } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { HomeScreen } from "../screens/AppStack/HomeScreen";
import { GuidesScreen } from "../screens/AppStack/archived/GuidesScreen";
import { ProfileScreen } from "../screens/AppStack/ProfileScreen";
import { PlanScreen } from "../screens/AppStack/archived/PlanScreen";
import { MatchScreen } from "../screens/AppStack/MatchScreen";

const App = createMaterialBottomTabNavigator();

const matchIcon = require("../../assets/images/MatchIcon.png");
const homeIcon = require("../../assets/images/HomeIcon.png");
const profileIcon = require("../../assets/images/ProfileIcon.png");

export const NavBarRoutes = () => {

  return (
    <App.Navigator
      initialRouteName="Guides"
      activeColor="#807550"
      barStyle={{ backgroundColor: "#E8E5CC" }}
    >
      {/* For the 4 different navigation tabs */}
      <App.Screen
        name="<Match>"
        component={MatchScreen}
        options={{
          tabBarLabel: "Match",
          tabBarIcon: ({ color }) => (
            <Image source={matchIcon} style={{ width: 25, height: 25 }} />
          ),
        }}
      />
      {/* <App.Screen
        name="Plan"
        component={PlanScreen}
        options={{
          tabBarLabel: "Plan",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="calendar-multiple-check"
              color={color}
              size={26}
            />
          ),
        }}
      /> */}
      <App.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Image source={homeIcon} style={{ width: 25, height: 25 }} />
          ),
        }}
      />
      <App.Screen
        name="Profile"
        component={ProfileScreen}
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
