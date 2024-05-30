import React from "react";
import { ScrollView } from "react-native";

import { ScreenWrapper } from "../../general/wrappers";
import HomeHeader from "./others/homeHeader";
import AvailableBalance from "./others/availableBalance";
import SortTransactions from "./others/sortTransactions";
import MyBudget from "./others/myBudget";

const HomeComponent = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ScreenWrapper>
        <HomeHeader />
        <AvailableBalance />
        <SortTransactions />
        <MyBudget />
      </ScreenWrapper>
    </ScrollView>
  );
};

export default HomeComponent;
