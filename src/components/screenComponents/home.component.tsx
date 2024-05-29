import React from "react";
import { Text, View } from "react-native";

import { ScreenWrapper } from "../general/wrappers";
import HomeHeader from "../homeHeader";

const HomeComponent = () => {
  return (
    <ScreenWrapper>
      <HomeHeader />
    </ScreenWrapper>
  );
};

export default HomeComponent;
