import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

import { Colors } from "../../../utils/colors";

const { purple600 } = Colors;

interface ScreenWrapperProps {
  children: ReactNode;
}

const ScreenWrapper = ({ children }: ScreenWrapperProps) => {
  return <View style={styles.screenContainer}>{children}</View>;
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: purple600,
    flex: 1,
    paddingTop: 24,
    paddingBottom: 72,
    paddingHorizontal: 16,
  },
});
