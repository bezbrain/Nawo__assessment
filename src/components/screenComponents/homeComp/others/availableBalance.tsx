import React from "react";
import { Image, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const AvailableBalance = () => {
  return (
    <View>
      <Image
        source={require("../../../../../assets/images/profile_image.png")}
      />
      <AntDesign name="right" size={24} color="black" />
    </View>
  );
};

export default AvailableBalance;
