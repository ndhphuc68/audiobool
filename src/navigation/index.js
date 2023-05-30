import React from "react";
import WelcomeScreen from "../screens/Welcome/WelcomeScreen";
import PersonalizationScreen from "../screens/Personalization/PersonalizationScreen";
import LoadingScreen from "../screens/Loading/LoadingScreen";
import OnboardingScreen from "../screens/Onboarding/OnboardingScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreenName } from "../navigation/ScreenName";
import LoginScreen from "../screens/Login/LoginScreen";
import RegisterScreen from "../screens/Register/RegisterScreen";
import Tabbar from "./Tabbar";
import DetailCategoryScreen from "../screens/DetailCategory/DetailCategoryScreen";
import { Colors } from "../Themes/Colors";

const Stack = createNativeStackNavigator();

export default function ApplicationNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={ScreenName.bottomtab}
      >
        <Stack.Screen
          name={ScreenName.onboarding}
          component={OnboardingScreen}
        />
        <Stack.Screen name={ScreenName.login} component={LoginScreen} />
        <Stack.Screen name={ScreenName.register} component={RegisterScreen} />
        <Stack.Screen name={ScreenName.welcome} component={WelcomeScreen} />
        <Stack.Screen
          name={ScreenName.personalization}
          component={PersonalizationScreen}
        />
        <Stack.Screen name={ScreenName.loading} component={LoadingScreen} />
        <Stack.Screen name={ScreenName.bottomtab} component={Tabbar} />
        <Stack.Screen
          name={ScreenName.detailcategory}
          options={({ route }) => ({
            title: route.params.name,
            headerShown: true,
            headerTitleAlign: "center",
            headerBackTitleVisible: false,
            headerTintColor: Colors.neutral80,
            headerTitleStyle: {
              color: Colors.neutral80,
              fontSize: 16,
              fontWeight: "500",
            },
          })}
          component={DetailCategoryScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
