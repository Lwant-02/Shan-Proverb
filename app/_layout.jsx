import React, { useEffect } from "react";
import { Stack, SplashScreen } from "expo-router";
import { useFonts } from "expo-font";

import "../global.css";
import { GlobalContextProvider } from "../context/useGlobalContext";

SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "B-SHANBB": require("../assets/fonts/B-SHANBB.ttf"),
    "Kam-jing": require("../assets/fonts/Kam-jing.ttf"),
    "NamTeng-2020": require("../assets/fonts/NamTeng-2020.ttf"),
    "PangLong-Latest": require("../assets/fonts/PangLong-Latest.ttf"),
    "Pyidaungsu-Bold": require("../assets/fonts/Pyidaungsu-Bold.ttf"),
    "Pyidaungsu-Numbers": require("../assets/fonts/Pyidaungsu-Numbers.ttf"),
    "Yunghkio-Unicode": require("../assets/fonts/Yunghkio-Unicode.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded) return null;
  return (
    <GlobalContextProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="search/[query]" options={{ headerShown: false }} />
      </Stack>
    </GlobalContextProvider>
  );
}
