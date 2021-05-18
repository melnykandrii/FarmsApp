import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useDomine,
  Domine_400Regular,
} from "@expo-google-fonts/domine";
import { theme } from "./src/infrastructure/theme";
import TabNavigation from "./src/features/restaurants/navigation/bottom.tab.navigation";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  const [domineLoaded] = useDomine({
    Domine_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded || !domineLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <TabNavigation />
        </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
