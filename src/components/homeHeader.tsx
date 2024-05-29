import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { Colors } from "../utils/colors";

const { purple100 } = Colors;

const HomeHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <View>
        <Text style={styles.accountName}>Hello John</Text>
        <Text style={styles.aboutFinance}>Your finances are looking good</Text>
      </View>

      <View style={styles.iconsContainer}>
        <Pressable style={styles.iconsPressables}>
          <Ionicons name="notifications-outline" size={18} color={purple100} />
        </Pressable>
        <Pressable style={styles.iconsPressables}>
          <Feather name="search" size={18} color={purple100} />
        </Pressable>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  accountName: {
    color: "#fff",
    fontSize: 16,
  },
  aboutFinance: {
    color: purple100,
    fontSize: 12,
  },
  iconsContainer: {
    flexDirection: "row",
    gap: 6,
  },
  iconsPressables: {
    backgroundColor: "#2812C9",
    height: 38,
    width: 38,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
