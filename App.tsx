import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import { TabNav } from "./src/screens";

export default function App() {
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
    backgroundColor: "#2c14de",
    // alignItems: "center",
    // justifyContent: "center",
    // paddingBottom: 24,
    // borderWidth: 2,
    // borderColor: "red",
  },
});
