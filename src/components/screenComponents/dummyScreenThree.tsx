import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { ScreenWrapper } from "../general/wrappers";

const DummyScreenThree = () => {
  return (
    <ScreenWrapper>
      <View style={styles.dummyContainer}>
        <Text style={styles.dummyText}>Dummy Screen Three</Text>
      </View>
    </ScreenWrapper>
  );
};

export default DummyScreenThree;

const styles = StyleSheet.create({
  dummyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dummyText: {
    color: "#fff",
    fontSize: 24,
  },
});
