import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Colors } from "../../../../utils/colors";

const { white800 } = Colors;

interface TransactionCardProps {
  char: string;
  id: number;
}

const TransactionCard = ({ char, id }: TransactionCardProps) => {
  return (
    <View style={styles.transContainer}>
      <View style={styles.logoCon}>
        <Text style={styles.transLogo}>{char}</Text>
      </View>

      <View>
        <Text style={[styles.generalDetails, styles.recipient]}>
          John Ogaga
        </Text>
        <Text style={[styles.generalDetails, styles.transTime]}>
          Zenith Bank 12:03 AM
        </Text>
      </View>
      <Text style={[styles.transAmount, id === 0 ? styles.firstAmount : null]}>
        +N20,983
      </Text>
    </View>
  );
};

export default TransactionCard;

const styles = StyleSheet.create({
  transContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 18,
  },
  logoCon: {
    backgroundColor: "rgba(238, 242, 248, 0.8)",
    height: 36,
    width: 36,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  transLogo: {
    fontFamily: "Inter-Bold",
    color: "#005bed",
  },
  generalDetails: {
    color: white800,
  },
  recipient: {
    fontFamily: "Inter-SemiBold",
    fontSize: 14,
  },
  transTime: {
    fontFamily: "Inter-Regular",
    fontSize: 12,
  },
  transAmount: {
    marginLeft: "auto",
    color: white800,
    fontFamily: "Inter-SemiBold",
  },
  firstAmount: {
    color: "rgba(50, 252, 101, 0.8)",
  },
});
