import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { IconbgWrapper } from "../../../general/wrappers";
import { Colors } from "../../../../utils/colors";

const { purple100, purple400 } = Colors;

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
          <Text style={styles.balanceInfo}>
            By this time last month, you spent slightly higher (N22,719)
          </Text>
        </View>

        <View style={styles.latestTransactionsCon}>
          <View>
            <Text>Kuda bank</Text>
            <Text>N12,000.00</Text>
          </View>
          <View>
            <Text>GT Bank</Text>
            <Text>N950.00</Text>
          </View>
          <View>
            <Text>PiggyVest</Text>
            <Text>N1,050.00</Text>
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
  balanceStatement: {
    color: purple100,
    textAlign: "center",
    marginTop: 8,
    fontSize: 11,
  },
  currentAmount: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 28,
    fontFamily: "Inter",
  },
  balanceInfoCon: {
    width: 192,
    marginHorizontal: "auto",
  },
  balanceInfo: {
    color: "#fff",
    textAlign: "center",
    fontSize: 11,
    lineHeight: 18,
  },

  latestTransactionsCon: {
    //
  },
});
