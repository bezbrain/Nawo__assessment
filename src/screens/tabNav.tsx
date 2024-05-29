import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import {
  DummyScreenFour,
  DummyScreenThree,
  DummyScreenTwo,
  HomeComponent,
} from "../components/screenComponents";

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarItemStyle: { backgroundColor: "#2c14de" },
        tabBarStyle: { backgroundColor: "#2c14de", borderTopWidth: 0 },
        title: "",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeComponent}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="home-variant"
                size={size}
                color="#fff"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Two"
        component={DummyScreenTwo}
        options={{
          // tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="home-variant"
                size={size}
                color="#fff"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Three"
        component={DummyScreenThree}
        options={{
          // tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="home-variant"
                size={size}
                color="#fff"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Four"
        component={DummyScreenFour}
        options={{
          // tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome5 name="user" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;
