import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { Colors } from "../../../../utils/colors";
import { IconbgWrapper } from "../../../general/wrappers";

const { purple100, purple400 } = Colors;

const HomeHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <View>
        <Text style={styles.accountName}>Hello John</Text>
        <Text style={styles.aboutFinance}>Your finances are looking good</Text>
      </View>

      <View style={styles.iconsContainer}>
        <IconbgWrapper bgIconStyle={styles.iconCon}>
          <Ionicons name="notifications-outline" size={18} color={purple100} />
        </IconbgWrapper>
        <IconbgWrapper bgIconStyle={styles.iconCon}>
          <Feather name="search" size={18} color={purple100} />
        </IconbgWrapper>
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
  iconCon: {
    backgroundColor: purple400,
  },
});
