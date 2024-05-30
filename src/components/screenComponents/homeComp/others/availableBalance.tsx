import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { IconbgWrapper } from "../../../general/wrappers";
import { Colors } from "../../../../utils/colors";

const { purple100, purple400, white800 } = Colors;

const AvailableBalance = () => {
  return (
    <View style={styles.balanceCon}>
      <ImageBackground
        source={require("../../../../../assets/images/balace_bg.png")}
        resizeMode="cover"
        style={styles.bgImageStyle}
        imageStyle={styles.imageStyle}
      >
        {/* Background image overlay */}
        <View style={styles.bgOverlay} />

        <Image
          source={require("../../../../../assets/images/profile_image.png")}
          style={styles.profileImage}
        />
        <IconbgWrapper bgIconStyle={styles.iconCon}>
          <AntDesign name="right" size={16} color={purple100} />
        </IconbgWrapper>

        <Text style={styles.balanceStatement}>Your available balance is</Text>
        <Text style={styles.currentAmount}>N20,983</Text>

        <View style={styles.balanceInfoCon}>
          <Text style={[styles.balanceInfo, styles.generalText]}>
            By this time last month, you spent slightly higher (N22,719)
          </Text>
        </View>

        <View style={styles.latestTransactionsCon}>
          <View style={styles.eachTransCon}>
            <Text style={[styles.generalText, styles.transText]}>
              Kuda bank
            </Text>
            <Text style={[styles.generalText, styles.transText]}>
              N12,000.00
            </Text>
          </View>
          <View style={styles.eachTransCon}>
            <Text style={[styles.generalText, styles.transText]}>GT Bank</Text>
            <Text style={[styles.generalText, styles.transText]}>N950.00</Text>
          </View>
          <View style={styles.eachTransCon}>
            <Text style={[styles.generalText, styles.transText]}>
              PiggyVest
            </Text>
            <Text style={[styles.generalText, styles.transText]}>
              N1,050.00
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default AvailableBalance;

const styles = StyleSheet.create({
  balanceCon: {
    marginTop: 24,
  },
  bgImageStyle: {
    borderRadius: 24,
    padding: 16,
  },
  imageStyle: {
    borderRadius: 24,
  },
  bgOverlay: {
    borderRadius: 24,
    ...StyleSheet.absoluteFillObject, // This will fill the entire parent view
    backgroundColor: "rgba(32, 15, 163, 0.7)",
  },
  profileImage: {
    backgroundColor: "#bdd6ff",
    height: 52,
    width: 52,
    borderRadius: 50,
    marginHorizontal: "auto",
  },
  iconCon: {
    backgroundColor: purple400,
    position: "absolute",
    right: 16,
    top: 16,
  },
  generalText: {
    fontFamily: "Inter-Regular",
    color: white800,
  },
  balanceStatement: {
    color: purple100,
    fontSize: 11,
    textAlign: "center",
    marginTop: 8,
  },
  currentAmount: {
    color: white800,
    textAlign: "center",
    fontSize: 28,
    fontFamily: "Inter-Bold",
  },
  balanceInfoCon: {
    width: 192,
    marginHorizontal: "auto",
  },
  balanceInfo: {
    textAlign: "center",
    fontSize: 11,
    lineHeight: 18,
  },

  latestTransactionsCon: {
    marginTop: 24,
  },
  eachTransCon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  transText: {
    fontSize: 12,
  },
});
