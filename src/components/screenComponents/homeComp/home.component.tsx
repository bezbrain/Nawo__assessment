import React from "react";
import { Text, View } from "react-native";

import { ScreenWrapper } from "../../general/wrappers";
import HomeHeader from "./others/homeHeader";
import AvailableBalance from "./others/availableBalance";
import SortTransactions from "./others/sortTransactions";

const HomeComponent = () => {
  return (
    <ScreenWrapper>
      <HomeHeader />
      <AvailableBalance />
      <SortTransactions />
    </ScreenWrapper>
  );
};

export default HomeComponent;
