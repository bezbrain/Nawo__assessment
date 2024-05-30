import "react-native-gesture-handler";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import * as Font from "expo-font";

import { TabNav } from "./src/screens";
import { Colors } from "./src/utils/colors";
import { SplashScreen } from "./src/components/helpers";

const { purple600 } = Colors;

const loadFonts = () => {
  return Font.loadAsync({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
  });
};

export default function App() {
  const [isAppLoading, setIsAppLoading] = useState(false);

  // DISPLAY SPLASH SCREEN UNTIL FONTS ARE LOADED COMPLETELY
  useEffect(() => {
    loadFonts().then(() => setIsAppLoading(true));
  }, []);

  if (!isAppLoading) {
    return (
      <>
        <StatusBar style="light" />
        <SplashScreen />
      </>
    );
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />
        <NavigationContainer>
          <TabNav />
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: purple600,
    paddingTop: 36,
  },
});
