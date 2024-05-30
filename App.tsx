import "react-native-gesture-handler";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";

import { TabNav } from "./src/screens";
import { Colors } from "./src/utils/colors";
import { SplashScreen } from "./src/components/helpers";

const { purple600 } = Colors;

export default function App() {
  const [isAppLoading, setIsAppLoading] = useState(true);

  // DISPLAY SPLASH SCREEN FOR 2 SECONDS TILL APP IS READY
  useEffect(() => {
    setTimeout(() => {
      setIsAppLoading(false);
    }, 2000);
  }, []);

  if (isAppLoading) {
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
  },
});
