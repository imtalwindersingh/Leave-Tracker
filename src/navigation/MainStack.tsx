import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Main/Home";
import { SafeAreaView } from "react-native";
import NewRequestStep1 from "../screens/Main/NewRequestStep1";
import NewRequestStep2 from "../screens/Main/NewRequestStep2";
import { Screens } from "../config/keys";

const MainStack = createStackNavigator();

const MainNavigationStack = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MainStack.Navigator screenOptions={{ headerShown: false }}>
        <MainStack.Screen name={Screens.Home} component={Home} />
        <MainStack.Screen
          name={Screens.NewRequestStep1}
          component={NewRequestStep1}
        />
        <MainStack.Screen
          name={Screens.NewRequestStep2}
          component={NewRequestStep2}
        />
      </MainStack.Navigator>
    </SafeAreaView>
  );
};

export default MainNavigationStack;
