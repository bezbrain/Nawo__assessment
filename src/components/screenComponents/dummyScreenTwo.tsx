import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScreenWrapper } from "../general/wrappers";

const DummyScreenTwo = () => {
  return (
    <ScreenWrapper>
      <View style={styles.dummyContainer}>
        <Text style={styles.dummyText}>Dummy Screen Two</Text>
      </View>
    </ScreenWrapper>
  );
};

export default DummyScreenTwo;

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
