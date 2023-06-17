import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { HomeScreen } from "../screens/AppStack/HomeScreen";
import { GuidesScreen } from "../screens/AppStack/archived/GuidesScreen";
import { ProfileScreen } from "../screens/AppStack/ProfileScreen";
import { PlanScreen } from "../screens/AppStack/archived/PlanScreen";
import { MatchScreen } from "../screens/AppStack/MatchScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const App = createBottomTabNavigator();

export const NavBarRoutes = () => {
  return (
    <App.Navigator
      initialRouteName="Guides"
      // activeColor="#DD5E89"
      // barStyle={{ backgroundColor: "#FFFBEC" }}
    >
      {/* For the 4 different navigation tabs */}
      <App.Screen
        name="Match"
        component={MatchScreen}
        options={{
          tabBarLabel: "Match",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" color={color} size={26} />
          ),
        }}
      />
      <App.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <App.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="diving-helmet"
              color={color}
              size={26}
            />
          ),
        }}
      />

      {/* Actual usage screens */}
      {/* <App.Screen name="Route" component={GuideScreen} />
      <App.Screen name="Details" component={DetailsScreen} /> */}
    </App.Navigator>
  );
};
