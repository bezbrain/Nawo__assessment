import React from "react";
import { Text, View } from "react-native";

import { ScreenWrapper } from "../../general/wrappers";
import HomeHeader from "./others/homeHeader";
import AvailableBalance from "./others/availableBalance";

const HomeComponent = () => {
  return (
    <ScreenWrapper>
      <HomeHeader />
      <AvailableBalance />
    </ScreenWrapper>
  );
};

export default HomeComponent;
