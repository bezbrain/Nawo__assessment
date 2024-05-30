import React, { ReactNode } from "react";
import { Pressable, StyleSheet } from "react-native";

interface IconBgWrapperProps {
  children: ReactNode;
  bgIconStyle?: Object;
}

const IconbgWrapper = ({ children, bgIconStyle }: IconBgWrapperProps) => {
  return (
    <Pressable style={[styles.iconsPressables, bgIconStyle]}>
      {children}
    </Pressable>
  );
};

export default IconbgWrapper;

const styles = StyleSheet.create({
  iconsPressables: {
    height: 38,
    width: 38,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
