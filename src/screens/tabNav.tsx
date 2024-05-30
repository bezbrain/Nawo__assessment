import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import {
  DummyScreenFour,
  DummyScreenThree,
  DummyScreenTwo,
  HomeComponent,
} from "../components/screenComponents";
import { Colors } from "../utils/colors";

const { purple600 } = Colors;

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarItemStyle: { backgroundColor: purple600 },
        tabBarStyle: { backgroundColor: purple600, borderTopWidth: 0 },
        title: "",
        tabBarActiveTintColor: "#fff",
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
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Two"
        component={DummyScreenTwo}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name="pie-chart" size={22} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Three"
        component={DummyScreenThree}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialIcons
                name="insert-chart-outlined"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Four"
        component={DummyScreenFour}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome5 name="user" size={18} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;
