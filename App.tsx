import "react-native-gesture-handler";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import * as Font from "expo-font";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { TabNav } from "./src/screens";
import { Colors } from "./src/utils/colors";
import { SplashScreen } from "./src/components/helpers";

const { purple600 } = Colors;

const loadResources = () => {
  return Font.loadAsync({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
    ...AntDesign.font,
    ...MaterialCommunityIcons.font,
    ...FontAwesome5.font,
    ...MaterialIcons.font,
    ...Feather.font,
  });
};

export default function App() {
  const [isAppLoading, setIsAppLoading] = useState(true);

  // DISPLAY SPLASH SCREEN UNTIL FONTS ARE LOADED COMPLETELY
  useEffect(() => {
    // loadFonts().then(() => setIsAppLoading(true));
    const loadAppResources = async () => {
      await loadResources();
      setTimeout(() => {
        setIsAppLoading(false);
      }, 2000);
    };

    loadAppResources();
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
    paddingTop: 36,
  },
});
