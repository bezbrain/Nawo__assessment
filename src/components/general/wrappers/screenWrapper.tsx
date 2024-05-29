import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

interface ScreenWrapperProps {
  children: ReactNode;
}

const ScreenWrapper = ({ children }: ScreenWrapperProps) => {
  return <View style={styles.screenContainer}>{children}</View>;
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: "#2c14de",
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 16,
  },
});
