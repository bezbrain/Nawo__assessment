import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { Colors } from "../../../../utils/colors";
import ArrowRight from "../../../general/arrowRight/arrowRight";

const { purple400, purple100, white800 } = Colors;

const SortTransactions = () => {
  return (
    <View style={styles.sortContainer}>
      <View style={styles.iconContainer}>
        <AntDesign name="setting" size={18} color={white800} />
        <View style={styles.orangeDot} />
      </View>

      <View style={styles.sortInfo}>
        <Text style={styles.line1}>Sort your transactions</Text>
        <Text style={styles.line2}>
          Get points for sorting your transactions
        </Text>
      </View>

      <ArrowRight styleIconBg={styles.sortArrowIcon} size={12} />
    </View>
  );
};

export default SortTransactions;

const styles = StyleSheet.create({
  sortContainer: {
    marginTop: 16,
    padding: 16,
    borderRadius: 16,
    backgroundColor: purple400,
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
  },
  iconContainer: {
    position: "relative",
    backgroundColor: "#5844EE",
    justifyContent: "center",
    alignItems: "center",
    width: 38,
    height: 38,
    borderRadius: 10,
  },
  sortInfo: {
    width: 152,
  },
  orangeDot: {
    position: "absolute",
    top: -1,
    right: -1,
    backgroundColor: "#FFAE58",
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  line1: {
    fontSize: 14,
    fontFamily: "Inter-SemiBold",
    color: white800,
    marginBottom: 6,
  },
  line2: {
    fontSize: 12,
    color: purple100,
    fontFamily: "Inter-Regular",
    lineHeight: 18,
  },
  sortArrowIcon: {
    position: "static",
    right: 0,
    top: 0,
    backgroundColor: "#2310B2",
    height: 30,
    width: 30,
    marginLeft: "auto",
  },
});