import React from "react";
import { StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { IconbgWrapper } from "../wrappers";
import { Colors } from "../../../utils/colors";

const { purple100, purple400 } = Colors;

interface ArrowRightProps {
  styleIconBg?: Object;
  size: number;
}

const ArrowRight = ({ styleIconBg, size }: ArrowRightProps) => {
  return (
    <IconbgWrapper bgIconStyle={[styles.iconCon, styleIconBg]}>
      <AntDesign name="right" size={size} color={purple100} />
    </IconbgWrapper>
  );
};

export default ArrowRight;

const styles = StyleSheet.create({
  iconCon: {
    backgroundColor: purple400,
    position: "absolute",
    right: 16,
    top: 16,
  },
});
