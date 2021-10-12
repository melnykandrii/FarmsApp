import { StatusBar as ExpoStatusBar } from "expo-status-bar";
//import firebase from "firebase/app";
import * as firebase from "firebase";
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
import { Navigation } from "./src/infrastructure/navigation";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBjNB72ZQH_mIfcFfaAAGhb83TeOXLKNF0",
  authDomain: "nearmeauth-44314.firebaseapp.com",
  projectId: "nearmeauth-44314",
  storageBucket: "nearmeauth-44314.appspot.com",
  messagingSenderId: "167783518655",
  appId: "1:167783518655:web:c1ce1ab71e5cf40d62910a",
  measurementId: "G-RYTCWSW1NG",
  //  apiKey: "AIzaSyD3pDCLsvfhpR_UWo40kWhidIVUlVclbNU",
  //  authDomain: "farmstogo-13a98.firebaseapp.com",
  //  projectId: "farmstogo-13a98",
  //  storageBucket: "farmstogo-13a98.appspot.com",
  //  messagingSenderId: "668966688436",
  //  appId: "1:668966688436:web:54cc3ba313361d8b39a9e1",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

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
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
