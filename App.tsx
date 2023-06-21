import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { useCallback } from "react";
import { View } from "react-native";
import Toast from "react-native-toast-message";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { LunchBudsNavigationContainer } from "./src/components/LunchBudsNavigationContainer";
import { AuthProvider } from "./src/contexts/AuthProvider";
import { useCustomFonts } from "./src/hooks/useCustomFonts";
import { theme } from "./src/theme";

import { QueryClient, QueryClientProvider } from "react-query";

import { LogBox } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

SplashScreen.preventAutoHideAsync();

export default function App() {
  const { fontsLoaded } = useCustomFonts();
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }

  const queryClient = new QueryClient();

  return (
    <NativeBaseProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          {/* below is for toast messages */}
          <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
            <AuthProvider>
              <LunchBudsNavigationContainer />
              <Toast />
            </AuthProvider>
            <StatusBar backgroundColor={"transparent"} translucent />
          </View>
        </SafeAreaProvider>
      </QueryClientProvider>
    </NativeBaseProvider>
  );
}
