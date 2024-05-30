import React from "react";
import { Text, View } from "react-native";

import { ScreenWrapper } from "../../general/wrappers";
import { AvailableBalance, HomeHeader } from "../";

const HomeComponent = () => {
  return (
    <ScreenWrapper>
      <HomeHeader />
      <AvailableBalance />
    </ScreenWrapper>
  );
};

export default HomeComponent;
