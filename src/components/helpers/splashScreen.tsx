import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

import { Colors } from "../../utils/colors";

const { purple600 } = Colors;

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.directImageCon}>
        <View style={styles.image1Container}>
          <View style={styles.overlay} />
          <Image
            source={require("../../../assets/splash1.png")}
            style={styles.image1}
          />
        </View>
        <Image
          source={require("../../../assets/splash2.png")}
          style={styles.image2}
        />
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: purple600,
    position: "absolute",
    zIndex: 9,
    minHeight: "100%",
    width: "100%",
  },
  directImageCon: {
    flexDirection: "row",
    alignItems: "center",
  },
  image1Container: {
    position: "relative",
  },
  overlay: {
    position: "absolute",
    // borderWidth: 2,
    height: 136,
    width: 136,
    borderRadius: 60,
    zIndex: 10,
    backgroundColor: "rgba(44, 20, 221, 0.8)",
  },
  image1: {
    height: 136,
    width: 136,
  },
  image2: {
    marginLeft: -100,
    zIndex: 20,
  },
});
