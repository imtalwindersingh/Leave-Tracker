/* eslint-disable no-nested-ternary */
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./MainStack";

const MainRoute = `MainRoute`;

export const TopLevelRoutes = {
  MainRoute,
};

const RootStack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name={MainRoute} component={MainStack} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
