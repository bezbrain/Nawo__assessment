import React from "react";
import { StyleSheet, Text, View } from "react-native";

import ArrowRight from "../../../general/arrowRight/arrowRight";
import { Colors } from "../../../../utils/colors";
import TransactionCard from "./transactionCard";

const { white800 } = Colors;

const recentTransData = [
  {
    id: 1,
    char: "J",
  },
  {
    id: 2,
    char: "H",
  },
  {
    id: 3,
    char: "H",
  },
];

const Transactions = () => {
  return (
    <View style={styles.budgetContainer}>
      <Text style={styles.title}>Transactions</Text>

      <View style={styles.budegetDetails}>
        <ArrowRight size={12} styleIconBg={styles.budgetArrowIcon} />
        <Text style={[styles.generalText, styles.recentTrans]}>
          Recent Transactions
        </Text>

        {recentTransData.map((each, i) => (
          <TransactionCard key={i} char={each.char} id={i} />
        ))}
      </View>
    </View>
  );
};

export default Transactions;

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
  recentTrans: {
    fontSize: 12,
    fontFamily: "Inter-SemiBold",
    marginBottom: 16,
  },
});
