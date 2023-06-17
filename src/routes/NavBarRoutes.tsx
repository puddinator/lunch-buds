import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { HomeScreen } from "../screens/AppStack/HomeScreen";
import { GuidesScreen } from "../screens/AppStack/archived/GuidesScreen";
import { ProfileScreen } from "../screens/AppStack/ProfileScreen";
import { PlanScreen } from "../screens/AppStack/archived/PlanScreen";
import { MatchScreen } from "../screens/AppStack/MatchScreen";

const App = createMaterialBottomTabNavigator();

export const NavBarRoutes = () => {
  return (
    <App.Navigator
      initialRouteName="Guides"
      activeColor="#DD5E89"
      barStyle={{ backgroundColor: "#FFAFCC" }}
    >
      {/* For the 4 different navigation tabs */}
      <App.Screen
        name="Search"
        component={MatchScreen}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="map-search-outline"
              color={color}
              size={26}
            />
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
        name="Favourites"
        component={HomeScreen}
        options={{
          tabBarLabel: "Favourites",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" color={color} size={26} />
          ),
        }}
      />
      <App.Screen
        name="Me"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Me",
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
