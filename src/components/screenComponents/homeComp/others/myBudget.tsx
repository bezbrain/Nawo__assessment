import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Colors } from "../../../../utils/colors";
import ArrowRight from "../../../general/arrowRight/arrowRight";

const { white800 } = Colors;

const MyBudget = () => {
  return (
    <View style={styles.budgetContainer}>
      <Text style={styles.title}>My Budgets</Text>

      <View style={styles.budegetDetails}>
        <ArrowRight size={12} styleIconBg={styles.budgetArrowIcon} />
        <Text style={[styles.generalText, styles.youHave]}>You have</Text>
        <Text style={[styles.generalText, styles.budgetAmount]}>N29,880</Text>
        <Text style={[styles.generalText, styles.leftOut]}>
          Left out of N80,888 budgeted
        </Text>

        <View style={styles.line}>
          <View style={styles.lineCount} />
        </View>

        <View style={styles.budgetFooter}>
          <Text style={styles.emoji}>😱</Text>
          <Text style={[styles.generalText, styles.sapaText]}>
            Sapa go soon catch you bros, calm down!!
          </Text>
        </View>
      </View>
    </View>
  );
};

export default MyBudget;

const styles = StyleSheet.create({
  budgetContainer: {
    marginTop: 30,
  },
  title: {
    marginBottom: 16,
    color: white800,
    fontFamily: "Inter-SemiBold",
  },
  budegetDetails: {
    backgroundColor: "rgba(67, 45, 237, 0.5)",
    borderRadius: 16,
    padding: 16,
  },
  budgetArrowIcon: {
    backgroundColor: "#2310B2",
    height: 20,
    width: 20,
    marginLeft: "auto",
  },
  generalText: {
    color: white800,
  },
  youHave: {
    fontSize: 12,
    fontFamily: "Inter-Regular",
  },
  budgetAmount: {
    fontSize: 18,
    fontFamily: "Inter-Bold",
    marginVertical: 16,
  },
  leftOut: {
    fontSize: 12,
    fontFamily: "Inter-Regular",
  },

  line: {
    height: 4,
    width: "100%",
    backgroundColor: "rgba(50, 252, 101, 0.2)",
    marginVertical: 24,
  },
  lineCount: {
    backgroundColor: "#32FC65",
    width: "75%",
    height: "100%",
  },

  budgetFooter: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 8,
  },
  emoji: {
    color: "rgba(192, 198, 237, 0.6)",
  },
  sapaText: {
    fontSize: 11,
    fontFamily: "Inter-Regular",
  },
});
