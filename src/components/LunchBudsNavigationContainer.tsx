import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

import { NavBarRoutes } from "../routes/NavBarRoutes";
import { AuthRoutes } from "../routes/AuthRoutes";
import { LottieSplash } from "./LottieSplash";
import { TutorialScreen } from "../screens/TutorialScreen";
import { BuyTicketResultScreen } from "../screens/BuyTicketResultScreen";

const Stack = createNativeStackNavigator();

export const LunchBudsNavigationContainer = () => {
  const { isLoggedIn, isLoadingInitial } = useContext(AuthContext);

  const [isAnimationFinish, setIsAnimationFinish] = useState(false);

  return (
    <>
      {isLoadingInitial || !isAnimationFinish ? (
        <LottieSplash setIsAnimationFinish={setIsAnimationFinish} />
      ) : (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            {isLoggedIn ? (
              <>
                <Stack.Screen name="App" component={NavBarRoutes} />
                <Stack.Screen name="Tutorial" component={TutorialScreen} />
                <Stack.Screen
                  name="Buy Ticket Result"
                  component={BuyTicketResultScreen}
                />
              </>
            ) : (
              <Stack.Screen name="Auth" component={AuthRoutes} />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
};
